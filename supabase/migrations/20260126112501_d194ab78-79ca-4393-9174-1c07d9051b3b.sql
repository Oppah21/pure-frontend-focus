-- Create enum for ride status
CREATE TYPE public.ride_status AS ENUM ('scheduled', 'in_progress', 'completed', 'cancelled');

-- Create enum for booking status
CREATE TYPE public.booking_status AS ENUM ('pending', 'confirmed', 'cancelled', 'completed');

-- Create enum for user roles
CREATE TYPE public.user_role AS ENUM ('user', 'driver', 'admin');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  avatar_url TEXT,
  bio TEXT,
  is_driver_verified BOOLEAN DEFAULT false,
  driver_license TEXT,
  vehicle_info JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create user_roles table (separate from profiles for security)
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role user_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE (user_id, role)
);

-- Create rides table
CREATE TABLE public.rides (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  driver_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  origin_address TEXT NOT NULL,
  origin_lat DECIMAL(10, 8),
  origin_lng DECIMAL(11, 8),
  destination_address TEXT NOT NULL,
  destination_lat DECIMAL(10, 8),
  destination_lng DECIMAL(11, 8),
  departure_date DATE NOT NULL,
  departure_time TIME NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  seats_available INTEGER NOT NULL CHECK (seats_available >= 0),
  total_seats INTEGER NOT NULL CHECK (total_seats > 0),
  description TEXT,
  status ride_status DEFAULT 'scheduled' NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create bookings table
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ride_id UUID REFERENCES public.rides(id) ON DELETE CASCADE NOT NULL,
  passenger_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  seats_booked INTEGER NOT NULL DEFAULT 1 CHECK (seats_booked > 0),
  total_price DECIMAL(10, 2) NOT NULL,
  status booking_status DEFAULT 'pending' NOT NULL,
  payment_status TEXT DEFAULT 'pending',
  payment_method TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE (ride_id, passenger_id)
);

-- Create messages table for in-app chat
CREATE TABLE public.messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ride_id UUID REFERENCES public.rides(id) ON DELETE CASCADE NOT NULL,
  sender_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create ratings table
CREATE TABLE public.ratings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ride_id UUID REFERENCES public.rides(id) ON DELETE CASCADE NOT NULL,
  rater_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  rated_user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE (ride_id, rater_id, rated_user_id)
);

-- Create indexes for performance
CREATE INDEX idx_rides_departure ON public.rides(departure_date, departure_time);
CREATE INDEX idx_rides_origin ON public.rides(origin_address);
CREATE INDEX idx_rides_destination ON public.rides(destination_address);
CREATE INDEX idx_rides_status ON public.rides(status);
CREATE INDEX idx_rides_driver ON public.rides(driver_id);
CREATE INDEX idx_bookings_ride ON public.bookings(ride_id);
CREATE INDEX idx_bookings_passenger ON public.bookings(passenger_id);
CREATE INDEX idx_messages_ride ON public.messages(ride_id);
CREATE INDEX idx_ratings_rated_user ON public.ratings(rated_user_id);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rides ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ratings ENABLE ROW LEVEL SECURITY;

-- Helper function: Check if user has a specific role
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role user_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Helper function: Check if user is ride participant (driver or passenger)
CREATE OR REPLACE FUNCTION public.is_ride_participant(_ride_id UUID, _user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.rides WHERE id = _ride_id AND driver_id = _user_id
    UNION
    SELECT 1 FROM public.bookings WHERE ride_id = _ride_id AND passenger_id = _user_id AND status IN ('confirmed', 'completed')
  )
$$;

-- Helper function: Check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.has_role(_user_id, 'admin')
$$;

-- PROFILES POLICIES
CREATE POLICY "Users can view all profiles"
  ON public.profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = user_id);

-- USER_ROLES POLICIES (only admins can manage, users can view own)
CREATE POLICY "Users can view own roles"
  ON public.user_roles FOR SELECT
  USING (auth.uid() = user_id OR public.is_admin(auth.uid()));

CREATE POLICY "Only admins can insert roles"
  ON public.user_roles FOR INSERT
  WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Only admins can update roles"
  ON public.user_roles FOR UPDATE
  USING (public.is_admin(auth.uid()));

CREATE POLICY "Only admins can delete roles"
  ON public.user_roles FOR DELETE
  USING (public.is_admin(auth.uid()));

-- RIDES POLICIES
CREATE POLICY "Anyone can view scheduled rides"
  ON public.rides FOR SELECT
  USING (status = 'scheduled' OR driver_id = auth.uid() OR public.is_ride_participant(id, auth.uid()) OR public.is_admin(auth.uid()));

CREATE POLICY "Authenticated users can create rides"
  ON public.rides FOR INSERT
  WITH CHECK (auth.uid() = driver_id);

CREATE POLICY "Drivers can update own rides"
  ON public.rides FOR UPDATE
  USING (auth.uid() = driver_id OR public.is_admin(auth.uid()));

CREATE POLICY "Drivers can delete own rides"
  ON public.rides FOR DELETE
  USING (auth.uid() = driver_id OR public.is_admin(auth.uid()));

-- BOOKINGS POLICIES
CREATE POLICY "Users can view own bookings or as driver"
  ON public.bookings FOR SELECT
  USING (
    auth.uid() = passenger_id 
    OR EXISTS (SELECT 1 FROM public.rides WHERE id = ride_id AND driver_id = auth.uid())
    OR public.is_admin(auth.uid())
  );

CREATE POLICY "Authenticated users can create bookings"
  ON public.bookings FOR INSERT
  WITH CHECK (auth.uid() = passenger_id);

CREATE POLICY "Users can update own bookings"
  ON public.bookings FOR UPDATE
  USING (
    auth.uid() = passenger_id 
    OR EXISTS (SELECT 1 FROM public.rides WHERE id = ride_id AND driver_id = auth.uid())
    OR public.is_admin(auth.uid())
  );

CREATE POLICY "Users can cancel own bookings"
  ON public.bookings FOR DELETE
  USING (auth.uid() = passenger_id OR public.is_admin(auth.uid()));

-- MESSAGES POLICIES
CREATE POLICY "Ride participants can view messages"
  ON public.messages FOR SELECT
  USING (public.is_ride_participant(ride_id, auth.uid()) OR public.is_admin(auth.uid()));

CREATE POLICY "Ride participants can send messages"
  ON public.messages FOR INSERT
  WITH CHECK (auth.uid() = sender_id AND public.is_ride_participant(ride_id, auth.uid()));

CREATE POLICY "Senders can update own messages"
  ON public.messages FOR UPDATE
  USING (auth.uid() = sender_id);

CREATE POLICY "Senders can delete own messages"
  ON public.messages FOR DELETE
  USING (auth.uid() = sender_id OR public.is_admin(auth.uid()));

-- RATINGS POLICIES
CREATE POLICY "Anyone can view ratings"
  ON public.ratings FOR SELECT
  USING (true);

CREATE POLICY "Ride participants can create ratings"
  ON public.ratings FOR INSERT
  WITH CHECK (
    auth.uid() = rater_id 
    AND auth.uid() != rated_user_id
    AND public.is_ride_participant(ride_id, auth.uid())
  );

CREATE POLICY "Users can update own ratings"
  ON public.ratings FOR UPDATE
  USING (auth.uid() = rater_id);

CREATE POLICY "Users can delete own ratings"
  ON public.ratings FOR DELETE
  USING (auth.uid() = rater_id OR public.is_admin(auth.uid()));

-- Function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add update triggers
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_rides_updated_at
  BEFORE UPDATE ON public.rides
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Function to auto-create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email)
  VALUES (NEW.id, NEW.email);
  
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update seats when booking is created
CREATE OR REPLACE FUNCTION public.handle_booking_created()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.rides
  SET seats_available = seats_available - NEW.seats_booked
  WHERE id = NEW.ride_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to restore seats when booking is cancelled
CREATE OR REPLACE FUNCTION public.handle_booking_cancelled()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.status != 'cancelled' AND NEW.status = 'cancelled' THEN
    UPDATE public.rides
    SET seats_available = seats_available + OLD.seats_booked
    WHERE id = OLD.ride_id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_booking_created
  AFTER INSERT ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.handle_booking_created();

CREATE TRIGGER on_booking_cancelled
  AFTER UPDATE ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.handle_booking_cancelled();

-- Enable realtime for messages
ALTER PUBLICATION supabase_realtime ADD TABLE public.messages;