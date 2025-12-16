import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Apple, Carrot, ShoppingBag, Wheat, Leaf, Nut, Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import fruitsImage from "@/assets/fruits-category.jpg";
import vegetablesImage from "@/assets/vegetables-category.jpg";
import groceriesImage from "@/assets/groceries-category.jpg";
import driedFoodsImage from "@/assets/dried-foods-category.jpg";

const categories = [
  {
    id: 1,
    name: "Fresh Fruits",
    description: "Hand-picked seasonal fruits bursting with natural sweetness and freshness.",
    image: fruitsImage,
    icon: Apple,
    items: "50+ varieties",
  },
  {
    id: 2,
    name: "Fresh Vegetables",
    description: "Farm-fresh vegetables delivered daily for maximum nutrition and taste.",
    image: vegetablesImage,
    icon: Carrot,
    items: "60+ varieties",
  },
  {
    id: 3,
    name: "Woolworths Range",
    description: "Premium Woolworths products known for exceptional quality and taste.",
    image: groceriesImage,
    icon: ShoppingBag,
    items: "100+ products",
  },
  {
    id: 4,
    name: "Dried Foods",
    description: "Traditional dried foods rich in nutrients and authentic African flavors.",
    image: driedFoodsImage,
    icon: Wheat,
    items: "40+ items",
  },
  {
    id: 5,
    name: "Spices & Herbs",
    description: "Aromatic spices and fresh herbs to elevate every meal.",
    image: vegetablesImage,
    icon: Leaf,
    items: "80+ varieties",
  },
  {
    id: 6,
    name: "Nuts & Seeds",
    description: "Premium nuts and seeds packed with protein and healthy fats.",
    image: driedFoodsImage,
    icon: Nut,
    items: "30+ types",
  },
  {
    id: 7,
    name: "Combo Packs",
    description: "Curated bundles offering great value and convenience for your kitchen.",
    image: groceriesImage,
    icon: Package,
    items: "15+ combos",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-primary">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-block bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Our Produce
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Fresh From Farm to Table
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
              Explore our wide selection of premium produce, carefully sourced and delivered fresh to ensure quality in every bite.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Browse Our Categories
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From farm-fresh fruits to traditional dried foods, discover quality products for every meal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div
                    key={category.id}
                    className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <span className="bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1 rounded-full">
                          {category.items}
                        </span>
                        <div className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {category.description}
                      </p>
                      <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                        <span>Explore Category</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Our Produce */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                  Quality Promise
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose Our Produce?
                </h2>
                <div className="space-y-4">
                  {[
                    "Sourced directly from trusted local farms",
                    "Fresh deliveries multiple times per week",
                    "Strict quality control standards",
                    "Wide variety of seasonal produce",
                    "Competitive prices without compromising quality",
                    "Supporting local farmers and communities",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src={fruitsImage}
                  alt="Fresh produce selection"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
                  <div className="text-4xl font-bold text-primary mb-1">300+</div>
                  <div className="text-muted-foreground text-sm">Products Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Shop Fresh?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Visit our store today or contact us for bulk orders and corporate supplies.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
