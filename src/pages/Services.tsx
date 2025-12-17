import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Store, Truck, Building2, PartyPopper, Flower2 } from "lucide-react";

const services = [
  {
    icon: Store,
    title: "Retail & In-Store Shopping",
    description: "Experience the freshest produce and quality goods at our welcoming retail locations. Browse our carefully curated selection with personalized assistance from our knowledgeable staff.",
    features: ["Wide product selection", "Expert staff assistance", "Fresh daily stock", "Convenient locations"]
  },
  {
    icon: Truck,
    title: "Delivery Services",
    description: "Get fresh produce and quality products delivered right to your doorstep. Our reliable delivery service ensures your orders arrive fresh and on time.",
    features: ["Same-day delivery", "Temperature-controlled transport", "Flexible scheduling", "Order tracking"]
  },
  {
    icon: Building2,
    title: "Corporate Supply",
    description: "Partner with us for your business needs. We provide consistent, high-quality supply solutions for restaurants, hotels, offices, and other commercial establishments.",
    features: ["Bulk ordering", "Dedicated account manager", "Competitive pricing", "Regular delivery schedules"]
  },
  {
    icon: PartyPopper,
    title: "Events & Weddings",
    description: "Make your special occasions memorable with our premium catering supplies. From intimate gatherings to grand celebrations, we provide the finest ingredients and products.",
    features: ["Custom orders", "Bulk catering supplies", "Premium selections", "Event consultation"]
  },
  {
    icon: Flower2,
    title: "Floristry Services",
    description: "Beautiful fresh flowers for every occasion. Our floristry team creates stunning arrangements using the freshest blooms, perfect for gifts, events, or brightening your space.",
    features: ["Custom arrangements", "Fresh cut flowers", "Corporate flowers", "Event decorations"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond quality products, we offer comprehensive services to meet all your fresh produce and lifestyle needs. Discover how we can serve you better.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:gap-12">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-card rounded-3xl p-8 md:p-12 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl`}
              >
                {/* Icon Section */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {service.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our services and how we can help meet your needs.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors duration-300"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
