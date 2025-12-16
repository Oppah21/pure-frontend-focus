import { Store, Truck, Building2, PartyPopper, Flower2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServicesOverview = () => {
  const services = [
    {
      icon: Store,
      title: "Retail & In-Store",
      description: "Visit our supermarket for a complete shopping experience.",
    },
    {
      icon: Truck,
      title: "Delivery Services",
      description: "Same-day delivery across Harare and surrounding areas.",
    },
    {
      icon: Building2,
      title: "Corporate Supply",
      description: "Bulk orders and regular supplies for businesses.",
    },
    {
      icon: PartyPopper,
      title: "Events & Weddings",
      description: "Fresh produce and catering supplies for special occasions.",
    },
    {
      icon: Flower2,
      title: "Floristry Services",
      description: "Beautiful fresh flowers and arrangements available.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-fresh-gold font-semibold tracking-wider uppercase text-sm">
            What We Offer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Services Overview
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Beyond products, we offer a range of services to meet all your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/contact">
            <Button variant="outline" size="lg">
              Learn More About Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
