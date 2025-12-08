import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mutasa",
      role: "Regular Customer",
      content: "The Fresh Company has completely changed how I shop for groceries. The produce is always fresh, and the delivery is incredibly convenient. Highly recommended!",
      rating: 5,
    },
    {
      name: "John Chikwanda",
      role: "Restaurant Owner",
      content: "As a restaurant owner, quality is everything. The Fresh Company consistently delivers top-quality vegetables and fruits. My customers love the dishes we make with their produce.",
      rating: 5,
    },
    {
      name: "Grace Moyo",
      role: "Health Enthusiast",
      content: "I love their selection of organic vegetables and dried foods. It's amazing to find everything I need for a healthy lifestyle in one place. The Woolworths range is a bonus!",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-fresh-gold font-semibold tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us for their daily fresh produce needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-fresh-gold text-fresh-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display text-lg font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
