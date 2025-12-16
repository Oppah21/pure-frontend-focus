import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import fruitsImage from "@/assets/fruits-category.jpg";
import vegetablesImage from "@/assets/vegetables-category.jpg";

const FreshProduceHighlights = () => {
  const produceItems = [
    {
      title: "Fresh Fruits",
      description: "Seasonal and exotic fruits sourced daily from local farms.",
      image: fruitsImage,
    },
    {
      title: "Fresh Vegetables",
      description: "Farm-fresh vegetables picked at peak ripeness.",
      image: vegetablesImage,
    },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-fresh-gold font-semibold tracking-wider uppercase text-sm">
            Farm Fresh Daily
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Fresh Produce Highlights
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked fruits and vegetables delivered fresh to our shelves every day.
          </p>
        </div>

        {/* Produce Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {produceItems.map((item, index) => (
            <div
              key={item.title}
              className="relative group overflow-hidden rounded-3xl h-[400px] cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 mb-4">{item.description}</p>
                <div className="flex items-center text-fresh-gold font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Explore Selection</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View All Produce
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FreshProduceHighlights;
