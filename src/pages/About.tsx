import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Leaf, Users, Award, Heart, Target, Eye, Sparkles, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "@/assets/hero-produce.jpg";

const coreValues = [
  {
    icon: Leaf,
    title: "Quality First",
    description: "We never compromise on the quality of our products. Every item is carefully selected to meet our high standards.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Our customers are at the heart of everything we do. Your satisfaction drives our commitment to excellence.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "We operate with honesty and transparency in all our dealings with customers, suppliers, and community.",
  },
  {
    icon: Heart,
    title: "Community",
    description: "We believe in giving back and supporting the local community that has supported us throughout our journey.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Our Story Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-primary">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Leaf className="w-4 h-4" />
                  Our Story
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                  From Humble Beginnings to Your Trusted Partner
                </h1>
                <p className="text-primary-foreground/80 text-lg mb-6 leading-relaxed">
                  The Fresh Company was born from a simple dream — to provide families in Harare with 
                  access to the freshest, highest-quality produce at fair prices. What started as a 
                  small produce stall in 2015 has grown into a beloved supermarket that serves 
                  thousands of families every week.
                </p>
                <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                  Our founder's passion for fresh, quality food and commitment to customer service 
                  laid the foundation for what The Fresh Company stands for today — a place where 
                  freshness meets affordability, and where every customer is treated like family.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/products">
                    <Button variant="fresh" size="lg">
                      Explore Our Products
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={heroImage}
                    alt="Fresh produce from The Fresh Company"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">8+ Years</p>
                      <p className="text-sm text-muted-foreground">Serving Harare</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-background p-8 md:p-10 rounded-3xl border border-border hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the most trusted provider of fresh, quality produce and grocery essentials 
                  in Zimbabwe. We are committed to sourcing the best products, supporting local 
                  farmers, and delivering exceptional value to every customer who walks through 
                  our doors.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3 text-foreground">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Deliver freshness daily
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Support local farmers
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Provide exceptional value
                  </li>
                </ul>
              </div>

              {/* Vision */}
              <div className="bg-background p-8 md:p-10 rounded-3xl border border-border hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-fresh-gold/20 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-fresh-gold" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become Zimbabwe's leading fresh produce and grocery destination, recognized 
                  for our unwavering commitment to quality, innovation, and community impact. 
                  We envision a future where every family has access to fresh, nutritious food 
                  at prices they can afford.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3 text-foreground">
                    <Sparkles className="w-5 h-5 text-fresh-gold" />
                    Lead in quality standards
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <Sparkles className="w-5 h-5 text-fresh-gold" />
                    Expand across Zimbabwe
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <Sparkles className="w-5 h-5 text-fresh-gold" />
                    Pioneer sustainable practices
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                What We Stand For
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                Our Core <span className="text-primary">Values</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                These principles guide every decision we make and every interaction we have.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-3xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitment to Freshness Section */}
        <section className="py-20 bg-primary relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <ShieldCheck className="w-4 h-4" />
                  Our Promise
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  Our Commitment to Freshness
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-6 leading-relaxed">
                  At The Fresh Company, freshness isn't just a word — it's our promise. We go 
                  to great lengths to ensure that every product on our shelves meets our 
                  rigorous freshness standards.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Daily deliveries from local farms and trusted suppliers",
                    "Strict quality control at every stage of the supply chain",
                    "Temperature-controlled storage for perishable items",
                    "Regular stock rotation to ensure peak freshness",
                    "100% freshness guarantee on all produce",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-fresh-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Leaf className="w-4 h-4 text-fresh-brown" />
                      </div>
                      <span className="text-primary-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/products">
                  <Button variant="accent" size="xl">
                    Shop Fresh Today
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-2xl text-center border border-primary-foreground/20">
                  <p className="text-4xl font-bold text-primary-foreground">100%</p>
                  <p className="text-primary-foreground/70 text-sm mt-1">Freshness Guarantee</p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-2xl text-center border border-primary-foreground/20">
                  <p className="text-4xl font-bold text-primary-foreground">Daily</p>
                  <p className="text-primary-foreground/70 text-sm mt-1">Fresh Deliveries</p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-2xl text-center border border-primary-foreground/20">
                  <p className="text-4xl font-bold text-primary-foreground">20+</p>
                  <p className="text-primary-foreground/70 text-sm mt-1">Local Farm Partners</p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-2xl text-center border border-primary-foreground/20">
                  <p className="text-4xl font-bold text-primary-foreground">300+</p>
                  <p className="text-primary-foreground/70 text-sm mt-1">Happy Customers</p>
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
