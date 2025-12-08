import { Truck, Clock, ShieldCheck, Leaf, Package, HeartHandshake } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "Same Day Delivery",
      description: "Order before 12pm and receive your fresh produce on the same day.",
    },
    {
      icon: ShieldCheck,
      title: "Freshness Guaranteed",
      description: "If you're not satisfied with the freshness, we'll replace it free.",
    },
    {
      icon: Leaf,
      title: "Farm Fresh",
      description: "Sourced directly from trusted local farms in Harare and beyond.",
    },
    {
      icon: Clock,
      title: "Convenient Scheduling",
      description: "Choose your preferred delivery time slot that works for you.",
    },
    {
      icon: Package,
      title: "Eco-Friendly Packaging",
      description: "All our products are packed in sustainable, recyclable materials.",
    },
    {
      icon: HeartHandshake,
      title: "Local Support",
      description: "Supporting local farmers and suppliers in our community.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-fresh-gold font-semibold tracking-wider uppercase text-sm">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            The Fresh Difference
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're committed to bringing you the freshest produce with unmatched convenience and care.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
