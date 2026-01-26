import Header from "@/components/ride/Header";
import Footer from "@/components/ride/Footer";
import RideSearchForm from "@/components/ride/RideSearchForm";
import { Link } from "react-router-dom";
import { Car, Shield, Leaf, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const features = [
    {
      icon: Car,
      title: "Easy Booking",
      description: "Find and book rides in just a few clicks. Simple, fast, and convenient.",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Verified profiles, ratings, and secure payment for peace of mind.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Reduce your carbon footprint by sharing rides with others.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Join a community of travelers and make new connections.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Regular Commuter",
      content: "Click & Ride has transformed my daily commute. I save money and have made great friends!",
      rating: 5,
    },
    {
      name: "James L.",
      role: "Weekend Traveler",
      content: "Perfect for weekend trips. The booking process is seamless and drivers are always friendly.",
      rating: 5,
    },
    {
      name: "Emily R.",
      role: "Student",
      content: "As a student, this is the most affordable way to travel between cities. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up">
                Share the Ride,{" "}
                <span className="text-primary">Share the Journey</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up">
                Connect with travelers heading your way. Save money, reduce emissions, and make every trip an adventure.
              </p>
            </div>

            {/* Search Form */}
            <div className="max-w-5xl mx-auto animate-fade-up">
              <RideSearchForm />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
              {[
                { value: "2M+", label: "Active Users" },
                { value: "500K+", label: "Rides Shared" },
                { value: "50+", label: "Cities" },
                { value: "4.8", label: "Avg Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Click & Ride?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We make ride-sharing simple, safe, and sustainable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get started in three simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Search",
                  description: "Enter your departure and destination to find available rides",
                },
                {
                  step: "2",
                  title: "Book",
                  description: "Choose a ride that fits your schedule and book instantly",
                },
                {
                  step: "3",
                  title: "Travel",
                  description: "Meet your driver and enjoy the journey together",
                },
              ].map((item, index) => (
                <div key={item.step} className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-display text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                  {index < 2 && (
                    <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/search">
                <Button size="lg" className="rounded-xl gap-2">
                  Find a Ride Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Users Say
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join thousands of happy travelers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="p-6 rounded-2xl bg-background border border-border"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join our community of travelers and experience a better way to travel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/search">
                <Button size="lg" variant="secondary" className="rounded-xl">
                  Find a Ride
                </Button>
              </Link>
              <Link to="/offer-ride">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Offer a Ride
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
