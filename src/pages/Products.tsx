import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

import fruitsImage from "@/assets/fruits-category.jpg";
import vegetablesImage from "@/assets/vegetables-category.jpg";
import groceriesImage from "@/assets/groceries-category.jpg";
import driedFoodsImage from "@/assets/dried-foods-category.jpg";

const products = [
  {
    id: 1,
    name: "Fresh Produce Bundle",
    category: "Fresh Produce",
    image: fruitsImage,
    badge: "Fresh Daily",
  },
  {
    id: 2,
    name: "Dairy Essentials Pack",
    category: "Dairy & Bakery",
    image: vegetablesImage,
    badge: "Chilled",
  },
  {
    id: 3,
    name: "Pantry Staples Collection",
    category: "Pantry Essentials",
    image: groceriesImage,
    badge: "Best Value",
  },
  {
    id: 4,
    name: "Snacks & Beverages Mix",
    category: "Beverages & Snacks",
    image: driedFoodsImage,
    badge: "Popular",
  },
  {
    id: 5,
    name: "Household Cleaning Kit",
    category: "Household",
    image: groceriesImage,
    badge: "Essential",
  },
  {
    id: 6,
    name: "Frozen Foods Selection",
    category: "Frozen",
    image: vegetablesImage,
    badge: "Quick Meals",
  },
  {
    id: 7,
    name: "Fresh Meat & Poultry",
    category: "Meat & Seafood",
    image: fruitsImage,
    badge: "Premium",
  },
  {
    id: 8,
    name: "Bakery Fresh Bread",
    category: "Dairy & Bakery",
    image: driedFoodsImage,
    badge: "Baked Daily",
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
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Our Products
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Discover our wide selection of quality products across all departments at great prices.
            </p>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-10">
              What We Offer
            </h2>
            <div className="max-w-xl mx-auto space-y-4">
              {[
                "Premium quality products",
                "Trusted brand reliability",
                "Wide range of pantry essentials",
                "Specialty gourmet items",
                "Fresh daily produce",
                "Competitive everyday prices",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-full px-6 py-4 flex items-center gap-4 shadow-lg"
                >
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {product.name}
                    </h3>
                    <span className="text-sm text-primary font-medium">{product.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;