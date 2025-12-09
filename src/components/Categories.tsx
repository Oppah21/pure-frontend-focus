import { ArrowRight } from "lucide-react";
import fruitsImage from "@/assets/fruits-category.jpg";
import vegetablesImage from "@/assets/vegetables-category.jpg";
import groceriesImage from "@/assets/groceries-category.jpg";
import driedFoodsImage from "@/assets/dried-foods-category.jpg";

const Categories = () => {
  const categories = [
    {
      title: "Fresh Produce",
      description: "Farm-fresh fruits and vegetables delivered daily.",
      image: fruitsImage,
      items: "100+ varieties",
    },
    {
      title: "Dairy & Bakery",
      description: "Fresh milk, cheese, bread, and baked goods.",
      image: vegetablesImage,
      items: "80+ products",
    },
    {
      title: "Pantry Essentials",
      description: "Rice, pasta, oils, spices, and everyday groceries.",
      image: groceriesImage,
      items: "300+ products",
    },
    {
      title: "Beverages & Snacks",
      description: "Drinks, juices, chips, and tasty treats for everyone.",
      image: driedFoodsImage,
      items: "150+ products",
    },
  ];

  return (
    <section id="products" className="section-padding bg-secondary">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-fresh-gold font-semibold tracking-wider uppercase text-sm">
            Our Products
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From fresh produce to household essentials, find everything you need under one roof.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="card-fresh group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                
                {/* Items count badge */}
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-foreground">{category.items}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
