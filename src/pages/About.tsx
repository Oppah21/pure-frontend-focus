import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Leaf, Users, Award, Truck, Heart, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "@/assets/hero-produce.jpg";

const values = [
  {
    icon: Leaf,
    title: "Quality Products",
    description: "We source the best products from trusted suppliers to ensure top quality.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority with friendly service and great prices.",
  },
  {
    icon: Award,
    title: "Wide Selection",
    description: "Thousands of products across all departments to meet your every need.",
  },
  {
    icon: Truck,
    title: "Convenient Shopping",
    description: "Easy access, ample parking, and home delivery options available.",
  },
];

const milestones = [
  { year: "2010", title: "Founded", description: "Started as a neighborhood grocery store" },
  { year: "2015", title: "Expansion", description: "Opened our full supermarket location" },
  { year: "2020", title: "Going Digital", description: "Launched online ordering and delivery" },
  { year: "2024", title: "Community Hub", description: "Serving 10,000+ families weekly" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-primary/10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 bg-secondary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Leaf className="w-4 h-4" />
                  Our Story
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Your Neighborhood{" "}
                  <span className="text-primary">Supermarket</span>
                </h1>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  For over a decade, The Fresh Company supermarket has been dedicated to serving 
                  families with quality products at great prices. What started as a small grocery 
                  store has grown into a full-service supermarket committed to convenience, 
                  variety, and customer satisfaction.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/products">
                    <Button variant="fresh" size="lg">
                      Explore Products
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={heroImage}
                    alt="Fresh produce from our farm"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">10,000+</p>
                      <p className="text-sm text-muted-foreground">Happy Families</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-primary">Values</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                These core principles guide everything we do at The Fresh Company.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-primary">Journey</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From humble beginnings to becoming your trusted neighborhood supermarket.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="bg-card p-6 rounded-2xl border border-border h-full">
                    <span className="text-4xl font-bold text-primary/20">{milestone.year}</span>
                    <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose <span className="text-primary">The Fresh Company?</span>
                </h2>
                <ul className="space-y-4">
                  {[
                    "Wide variety of products",
                    "Competitive everyday prices",
                    "Fresh produce daily",
                    "Convenient store hours",
                    "Friendly customer service",
                    "Home delivery available",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-2xl border border-border text-center">
                  <p className="text-4xl font-bold text-primary">14+</p>
                  <p className="text-muted-foreground text-sm mt-1">Years Experience</p>
                </div>
                <div className="bg-card p-6 rounded-2xl border border-border text-center">
                  <p className="text-4xl font-bold text-primary">50+</p>
                  <p className="text-muted-foreground text-sm mt-1">Trusted Suppliers</p>
                </div>
                <div className="bg-card p-6 rounded-2xl border border-border text-center">
                  <p className="text-4xl font-bold text-primary">5000+</p>
                  <p className="text-muted-foreground text-sm mt-1">Products</p>
                </div>
                <div className="bg-card p-6 rounded-2xl border border-border text-center">
                  <p className="text-4xl font-bold text-primary">24h</p>
                  <p className="text-muted-foreground text-sm mt-1">Delivery Time</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
