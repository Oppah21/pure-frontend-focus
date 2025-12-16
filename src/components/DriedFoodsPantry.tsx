import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import driedFoodsImage from "@/assets/dried-foods-category.jpg";

const DriedFoodsPantry = () => {
  const pantryItems = [
    { name: "Dried Vegetables", count: "30+" },
    { name: "Traditional Grains", count: "25+" },
    { name: "Beans & Legumes", count: "40+" },
    { name: "Nuts & Seeds", count: "35+" },
    { name: "Dried Fruits", count: "20+" },
    { name: "Spices & Herbs", count: "50+" },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span className="text-fresh-gold font-semibold tracking-wider uppercase text-sm">
              Traditional & Nutritious
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Dried Foods & Pantry
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Stock your pantry with our extensive collection of dried foods, 
              traditional grains, and nutritious staples. Quality ingredients 
              for authentic Zimbabwean cooking and everyday meals.
            </p>

            {/* Pantry Items Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {pantryItems.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors text-center"
                >
                  <p className="font-display text-2xl font-bold text-primary">{item.count}</p>
                  <p className="text-sm text-muted-foreground">{item.name}</p>
                </div>
              ))}
            </div>

            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Explore Dried Foods
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={driedFoodsImage}
                alt="Dried Foods and Pantry Essentials"
                className="w-full h-[450px] object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-xl">
              <p className="font-display text-lg font-bold text-foreground">200+ Products</p>
              <p className="text-sm text-muted-foreground">Traditional & Modern</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriedFoodsPantry;
