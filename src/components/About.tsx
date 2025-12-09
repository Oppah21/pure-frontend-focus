import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroProduce from "@/assets/hero-produce.jpg";

const About = () => {
  const highlights = [
    "Family-owned business since 2015",
    "Over 300+ happy customers",
    "Partnered with 20+ local farms",
    "100% fresh guarantee on all products",
  ];

  return (
    <section id="about" className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroProduce}
                alt="Fresh produce from The Fresh Company"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-6 -right-6 md:right-6 bg-card rounded-2xl p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">8+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-fresh-gold">300+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="text-fresh-gold font-semibold tracking-wider uppercase text-sm">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
              Your Trusted<br />Supermarket
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-6">
              The Fresh Company supermarket was founded with a simple mission: to be your 
              one-stop shop for all household needs. From fresh produce and dairy to 
              pantry essentials and household items, we offer quality products at 
              competitive prices.
            </p>
            <p className="text-primary-foreground/80 text-lg mb-8">
              With multiple departments and thousands of products, we make shopping 
              convenient and affordable for families across Harare.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="w-6 h-6 rounded-full bg-fresh-gold flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-fresh-brown" />
                  </div>
                  <span className="text-primary-foreground/90">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="accent" size="xl">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
