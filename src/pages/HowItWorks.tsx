import Header from "@/components/ride/Header";
import Footer from "@/components/ride/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Car, MessageCircle, Star, Shield, CreditCard, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const passengerSteps = [
    {
      icon: Search,
      title: "Search for a ride",
      description:
        "Enter your departure and destination cities, choose a date, and browse available rides.",
    },
    {
      icon: Star,
      title: "Choose your driver",
      description:
        "Review driver profiles, ratings, and ride details to find the perfect match for your journey.",
    },
    {
      icon: CreditCard,
      title: "Book and pay",
      description:
        "Reserve your seat with a secure payment. You'll receive confirmation instantly.",
    },
    {
      icon: MessageCircle,
      title: "Travel together",
      description:
        "Connect with your driver, meet at the pickup point, and enjoy the journey!",
    },
  ];

  const driverSteps = [
    {
      icon: Car,
      title: "Post your trip",
      description:
        "Share your route, date, time, and number of available seats. Set your price per passenger.",
    },
    {
      icon: Shield,
      title: "Get verified",
      description:
        "Complete your profile with your driver's license and vehicle info for passenger trust.",
    },
    {
      icon: MessageCircle,
      title: "Accept passengers",
      description:
        "Review booking requests and chat with passengers before the trip.",
    },
    {
      icon: CreditCard,
      title: "Earn money",
      description:
        "Share the cost of your trip and receive payments directly to your account.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              How Click & Ride Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're looking for a ride or offering one, we make it simple to travel together.
            </p>
          </div>
        </section>

        {/* For Passengers */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold mb-4">For Passengers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find affordable rides to your destination in just a few steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {passengerSteps.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 relative">
                      <step.icon className="h-8 w-8 text-primary" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                  {index < passengerSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-8 -right-4 h-6 w-6 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/search">
                <Button size="lg" className="rounded-xl">
                  Find a Ride
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* For Drivers */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold mb-4">For Drivers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Share your journey and earn money while helping others travel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {driverSteps.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4 relative">
                      <step.icon className="h-8 w-8 text-accent" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                  {index < driverSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-8 -right-4 h-6 w-6 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/offer-ride">
                <Button size="lg" variant="secondary" className="rounded-xl">
                  Offer a Ride
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Safety */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="font-display text-3xl font-bold mb-4">Your Safety Matters</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We take safety seriously. Here's how we protect our community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Verified Profiles",
                    description:
                      "All users verify their identity. Drivers provide license information.",
                  },
                  {
                    title: "Ratings & Reviews",
                    description:
                      "See ratings and reviews from other travelers before booking.",
                  },
                  {
                    title: "Secure Payments",
                    description:
                      "All payments are processed securely through our platform.",
                  },
                ].map((item) => (
                  <div key={item.title} className="text-center p-6 rounded-2xl border border-border">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join our community of travelers today.
            </p>
            <Link to="/auth?mode=signup">
              <Button size="lg" variant="secondary" className="rounded-xl">
                Create Account
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
