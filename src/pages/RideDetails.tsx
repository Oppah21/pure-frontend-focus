import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/ride/Header";
import Footer from "@/components/ride/Footer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  Star,
  MessageCircle,
  Car,
  Loader2,
  Check,
  CreditCard,
  Shield,
} from "lucide-react";
import { format } from "date-fns";

interface RideDetails {
  id: string;
  origin_address: string;
  destination_address: string;
  departure_date: string;
  departure_time: string;
  price: number;
  seats_available: number;
  total_seats: number;
  description: string | null;
  driver_id: string;
  status: string;
  driver?: {
    first_name: string | null;
    last_name: string | null;
    avatar_url: string | null;
    bio: string | null;
    phone: string | null;
  };
}

const RideDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();

  const [ride, setRide] = useState<RideDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(false);
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [seats, setSeats] = useState(1);
  const [driverRating, setDriverRating] = useState<number | null>(null);

  useEffect(() => {
    if (id) {
      fetchRideDetails();
    }
  }, [id]);

  const fetchRideDetails = async () => {
    try {
      const { data: rideData, error } = await supabase
        .from("rides")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;

      // Fetch driver profile separately
      const { data: driverProfile } = await supabase
        .from("profiles")
        .select("first_name, last_name, avatar_url, bio, phone")
        .eq("user_id", rideData.driver_id)
        .maybeSingle();

      const data = {
        ...rideData,
        driver: driverProfile || undefined,
      };

      setRide(data as RideDetails);

      // Fetch driver rating
      if (data?.driver_id) {
        const { data: ratings } = await supabase
          .from("ratings")
          .select("rating")
          .eq("rated_user_id", data.driver_id);

        if (ratings && ratings.length > 0) {
          const avg = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;
          setDriverRating(avg);
        }
      }
    } catch (error) {
      console.error("Error fetching ride:", error);
      toast({
        title: "Error",
        description: "Failed to load ride details",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBooking = async () => {
    if (!user) {
      navigate("/auth");
      return;
    }

    if (!ride) return;

    setBooking(true);
    try {
      const { error } = await supabase.from("bookings").insert({
        ride_id: ride.id,
        passenger_id: user.id,
        seats_booked: seats,
        total_price: ride.price * seats,
        status: "confirmed",
        payment_status: "completed",
        payment_method: "card",
      });

      if (error) throw error;

      setShowPaymentDialog(false);
      toast({
        title: "Booking confirmed!",
        description: "Your ride has been booked successfully.",
      });
      navigate("/dashboard");
    } catch (error: any) {
      toast({
        title: "Booking failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setBooking(false);
    }
  };

  const driverName = ride?.driver
    ? `${ride.driver.first_name || ""} ${ride.driver.last_name || ""}`.trim() || "Driver"
    : "Driver";

  const driverInitials = driverName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  if (loading) {
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

  if (!ride) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <p className="text-xl text-muted-foreground mb-4">Ride not found</p>
          <Button onClick={() => navigate("/search")}>Back to Search</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Route Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-primary" />
                      <div className="w-0.5 h-20 bg-border" />
                      <div className="w-4 h-4 rounded-full bg-accent" />
                    </div>
                    <div className="flex-1 space-y-6">
                      <div>
                        <p className="text-sm text-muted-foreground flex items-center gap-2 mb-1">
                          <Clock className="h-4 w-4" />
                          {ride.departure_time}
                        </p>
                        <p className="text-xl font-semibold">{ride.origin_address}</p>
                      </div>
                      <div>
                        <p className="text-xl font-semibold">{ride.destination_address}</p>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <span>{format(new Date(ride.departure_date), "EEEE, MMMM d, yyyy")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <span>
                        {ride.seats_available} of {ride.total_seats} seats available
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Driver Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Driver</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={ride.driver?.avatar_url || ""} />
                      <AvatarFallback className="bg-primary/10 text-primary text-xl">
                        {driverInitials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-lg font-semibold">{driverName}</p>
                      {driverRating && (
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Star className="h-4 w-4 fill-warning text-warning" />
                          {driverRating.toFixed(1)} rating
                        </p>
                      )}
                    </div>
                    {user && user.id !== ride.driver_id && (
                      <Button variant="outline" size="sm" className="gap-2">
                        <MessageCircle className="h-4 w-4" />
                        Message
                      </Button>
                    )}
                  </div>
                  {ride.driver?.bio && (
                    <p className="mt-4 text-muted-foreground">{ride.driver.bio}</p>
                  )}
                </CardContent>
              </Card>

              {/* Description */}
              {ride.description && (
                <Card>
                  <CardHeader>
                    <CardTitle>About this ride</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{ride.description}</p>
                  </CardContent>
                </Card>
              )}

              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-64 bg-muted flex items-center justify-center rounded-lg">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Map view coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Sidebar */}
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-4xl font-bold text-primary">${ride.price}</p>
                    <p className="text-muted-foreground">per seat</p>
                  </div>

                  {ride.seats_available > 0 ? (
                    <>
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center justify-between">
                          <span>Number of seats</span>
                          <select
                            value={seats}
                            onChange={(e) => setSeats(Number(e.target.value))}
                            className="border border-input rounded-md px-3 py-1 bg-background"
                          >
                            {Array.from({ length: ride.seats_available }, (_, i) => i + 1).map(
                              (num) => (
                                <option key={num} value={num}>
                                  {num}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between font-semibold">
                          <span>Total</span>
                          <span className="text-xl">${(ride.price * seats).toFixed(2)}</span>
                        </div>
                      </div>

                      {user?.id === ride.driver_id ? (
                        <Button className="w-full" disabled>
                          This is your ride
                        </Button>
                      ) : (
                        <Button
                          className="w-full"
                          size="lg"
                          onClick={() => setShowBookingDialog(true)}
                        >
                          Book {seats} seat{seats > 1 ? "s" : ""}
                        </Button>
                      )}
                    </>
                  ) : (
                    <Badge variant="secondary" className="w-full justify-center py-2">
                      No seats available
                    </Badge>
                  )}

                  <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span>Secure booking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      <span>Free cancellation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Booking Confirmation Dialog */}
      <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm your booking</DialogTitle>
            <DialogDescription>
              You're about to book {seats} seat{seats > 1 ? "s" : ""} for this ride
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex justify-between">
              <span>Route</span>
              <span className="font-medium">
                {ride.origin_address} → {ride.destination_address}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Date</span>
              <span className="font-medium">
                {format(new Date(ride.departure_date), "MMM d, yyyy")}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Time</span>
              <span className="font-medium">{ride.departure_time}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>${(ride.price * seats).toFixed(2)}</span>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowBookingDialog(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setShowBookingDialog(false);
                setShowPaymentDialog(true);
              }}
            >
              Continue to Payment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Payment Dialog (Mock) */}
      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment</DialogTitle>
            <DialogDescription>Complete your booking (Demo mode)</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="p-4 bg-muted rounded-lg flex items-center gap-4">
              <CreditCard className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="font-medium">Demo Payment</p>
                <p className="text-sm text-muted-foreground">
                  Click confirm to simulate payment
                </p>
              </div>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span>Amount</span>
              <span>${(ride.price * seats).toFixed(2)}</span>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowPaymentDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleBooking} disabled={booking}>
              {booking ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Processing...
                </span>
              ) : (
                "Confirm Payment"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default RideDetails;
