import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, Clock } from "lucide-react";
import heroProduce from "@/assets/hero-produce.jpg";

const Hero = () => {
  const features = [
    { icon: Truck, text: "Free Delivery" },
    { icon: Shield, text: "Fresh Guarantee" },
    { icon: Clock, text: "Same Day" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-primary">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroProduce})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Category Tags */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
              {["Premium Fruits", "Vegetables", "Woolworths Groceries", "Dried Foods"].map((tag, index) => (
                <span
                  key={tag}
                  className="text-fresh-gold text-xs sm:text-sm font-semibold tracking-wider uppercase"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tag}
                  {index < 3 && <span className="mx-2">•</span>}
                </span>
              ))}
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up">
              Freshness<br />
              Delivered Daily
            </h1>

            {/* Description */}
            <p className="text-primary-foreground/80 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              The Fresh Company brings the best of Harare's farms and trusted suppliers to your table. From daily fruit and vegetable deliveries to curated Woolworths groceries and traditional dried foods, we deliver consistency, nutrition and flavour — every day.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button variant="accent" size="xl" className="group">
                Explore Woolworths Range
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero" size="xl">
                View All Products
              </Button>
            </div>

            {/* Trust Features */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-10 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              {features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-fresh-gold" />
                  </div>
                  <span className="text-primary-foreground/90 font-medium text-sm">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block relative animate-scale-in">
            <div className="relative">
              <img
                src={heroProduce}
                alt="Fresh organic vegetables and fruits"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-fresh-gold/20 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-fresh-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Same Day</p>
                    <p className="text-sm text-muted-foreground">Delivery Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
