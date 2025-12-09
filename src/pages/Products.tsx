import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Leaf, Apple, Carrot } from "lucide-react";

import fruitsImage from "@/assets/fruits-category.jpg";
import vegetablesImage from "@/assets/vegetables-category.jpg";
import groceriesImage from "@/assets/groceries-category.jpg";
import driedFoodsImage from "@/assets/dried-foods-category.jpg";

const products = [
  {
    id: 1,
    name: "Fresh Organic Apples",
    category: "Fruits",
    price: 4.99,
    unit: "per kg",
    image: fruitsImage,
    badge: "Organic",
  },
  {
    id: 2,
    name: "Farm Fresh Carrots",
    category: "Vegetables",
    price: 2.49,
    unit: "per kg",
    image: vegetablesImage,
    badge: "Local",
  },
  {
    id: 3,
    name: "Premium Mixed Nuts",
    category: "Dried Foods",
    price: 12.99,
    unit: "per 500g",
    image: driedFoodsImage,
    badge: "Best Seller",
  },
  {
    id: 4,
    name: "Organic Grocery Bundle",
    category: "Groceries",
    price: 29.99,
    unit: "per bundle",
    image: groceriesImage,
    badge: "Value Pack",
  },
  {
    id: 5,
    name: "Seasonal Fruit Box",
    category: "Fruits",
    price: 24.99,
    unit: "per box",
    image: fruitsImage,
    badge: "Seasonal",
  },
  {
    id: 6,
    name: "Garden Vegetables Mix",
    category: "Vegetables",
    price: 8.99,
    unit: "per kg",
    image: vegetablesImage,
    badge: "Fresh",
  },
];

const categories = [
  { name: "All", icon: Leaf },
  { name: "Fruits", icon: Apple },
  { name: "Vegetables", icon: Carrot },
  { name: "Dried Foods", icon: Leaf },
  { name: "Groceries", icon: Leaf },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Products</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our wide selection of fresh, organic produce sourced directly from local farms.
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={category.name === "All" ? "fresh" : "outline"}
                  className="gap-2"
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </Button>
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
