import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "@/components/ride/Header";
import Footer from "@/components/ride/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import {
  Car,
  Calendar,
  Clock,
  MapPin,
  Users,
  Plus,
  Star,
  MessageCircle,
  Settings,
  Loader2,
} from "lucide-react";
import { format } from "date-fns";

interface Booking {
  id: string;
  ride_id: string;
  seats_booked: number;
  total_price: number;
  status: string;
  created_at: string;
  ride?: {
    origin_address: string;
    destination_address: string;
    departure_date: string;
    departure_time: string;
  };
}
interface Ride {
  id: string;
  origin_address: string;
  destination_address: string;
  departure_date: string;
  departure_time: string;
  price: number;
  seats_available: number;
  total_seats: number;
  status: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [myRides, setMyRides] = useState<Ride[]>([]);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const fetchData = async () => {
    if (!user) return;

    setLoading(true);
    try {
      // Fetch profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      setProfile(profileData);

      // Fetch bookings
      const { data: bookingsData } = await supabase
        .from("bookings")
        .select(`
          *,
          ride:rides(
            origin_address,
            destination_address,
            departure_date,
            departure_time
          )
        `)
        .eq("passenger_id", user.id)
        .order("created_at", { ascending: false });

      setBookings(bookingsData || []);

      // Fetch my rides (as driver)
      const { data: ridesData } = await supabase
        .from("rides")
        .select("*")
        .eq("driver_id", user.id)
        .order("departure_date", { ascending: false });

      setMyRides(ridesData || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-success text-success-foreground";
      case "pending":
        return "bg-warning text-warning-foreground";
      case "cancelled":
        return "bg-destructive text-destructive-foreground";
      case "completed":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
        <Footer />
      </div>
    );
  }

  const userName = profile
    ? `${profile.first_name || ""} ${profile.last_name || ""}`.trim() || "User"
    : "User";

  const userInitials = userName
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={profile?.avatar_url || ""} />
                <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                  {userInitials}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="font-display text-2xl font-bold">{userName}</h1>
                <p className="text-muted-foreground">{user?.email}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => navigate("/profile")}>
                <Settings className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              <Button onClick={() => navigate("/offer-ride")}>
                <Plus className="h-4 w-4 mr-2" />
                Offer a Ride
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-primary">{bookings.length}</p>
                <p className="text-sm text-muted-foreground">Trips Taken</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-primary">{myRides.length}</p>
                <p className="text-sm text-muted-foreground">Rides Offered</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-primary">4.8</p>
                <p className="text-sm text-muted-foreground">Rating</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-primary">
                  ${bookings.reduce((sum, b) => sum + (b.total_price || 0), 0)}
                </p>
                <p className="text-sm text-muted-foreground">Total Spent</p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="bookings" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="bookings">My Bookings</TabsTrigger>
              <TabsTrigger value="rides">My Rides</TabsTrigger>
            </TabsList>

            <TabsContent value="bookings" className="space-y-4">
              {bookings.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Car className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg font-medium mb-2">No bookings yet</p>
                    <p className="text-muted-foreground mb-4">
                      Find a ride and start your journey
                    </p>
                    <Button onClick={() => navigate("/search")}>Find a Ride</Button>
                  </CardContent>
                </Card>
              ) : (
                bookings.map((booking) => (
                  <Card key={booking.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={getStatusColor(booking.status)}>
                              {booking.status}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              {format(new Date(booking.created_at), "MMM d, yyyy")}
                            </span>
                          </div>
                          {booking.ride && (
                            <>
                              <div className="flex items-center gap-2 mb-1">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span className="font-medium">
                                  {booking.ride.origin_address} →{" "}
                                  {booking.ride.destination_address}
                                </span>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {format(
                                    new Date(booking.ride.departure_date),
                                    "EEE, MMM d"
                                  )}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {booking.ride.departure_time}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Users className="h-3 w-3" />
                                  {booking.seats_booked} seat
                                  {booking.seats_booked > 1 ? "s" : ""}
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold">${booking.total_price}</p>
                          <Link to={`/ride/${booking.ride_id}`}>
                            <Button variant="ghost" size="sm">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>

            <TabsContent value="rides" className="space-y-4">
              {myRides.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Car className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg font-medium mb-2">No rides offered yet</p>
                    <p className="text-muted-foreground mb-4">
                      Share your trip and help cover your travel costs
                    </p>
                    <Button onClick={() => navigate("/offer-ride")}>Offer a Ride</Button>
                  </CardContent>
                </Card>
              ) : (
                myRides.map((ride) => (
                  <Card key={ride.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={getStatusColor(ride.status)}>
                              {ride.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 mb-1">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span className="font-medium">
                              {ride.origin_address} → {ride.destination_address}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {format(new Date(ride.departure_date), "EEE, MMM d")}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {ride.departure_time}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {ride.seats_available}/{ride.total_seats} seats
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold">${ride.price}</p>
                          <p className="text-sm text-muted-foreground">per seat</p>
                          <Link to={`/ride/${ride.id}`}>
                            <Button variant="ghost" size="sm">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
