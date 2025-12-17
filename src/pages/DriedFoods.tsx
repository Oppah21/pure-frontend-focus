import { Wheat, Leaf, Bean, Nut, Cherry, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DriedFoods = () => {
  const categories = [
    {
      name: "Dried Vegetables",
      description: "Sun-dried and preserved vegetables for traditional cooking",
      icon: Leaf,
      color: "bg-emerald-500/10 text-emerald-600",
    },
    {
      name: "Traditional Grains",
      description: "Nutritious grains passed down through generations",
      icon: Wheat,
      color: "bg-amber-500/10 text-amber-600",
    },
    {
      name: "Beans & Legumes",
      description: "Protein-rich beans and legumes for hearty meals",
      icon: Bean,
      color: "bg-orange-500/10 text-orange-600",
    },
    {
      name: "Nuts & Seeds",
      description: "Wholesome nuts and seeds for snacking and cooking",
      icon: Nut,
      color: "bg-yellow-600/10 text-yellow-700",
    },
    {
      name: "Dried Fruits",
      description: "Naturally sweet dried fruits for healthy treats",
      icon: Cherry,
      color: "bg-red-500/10 text-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-amber-50 to-background dark:from-amber-950/20 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-sm font-medium mb-4">
              Tradition & Nutrition
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Dried Foods & Pantry Essentials
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover our carefully curated selection of dried foods, traditional grains, and pantry staples 
              that bring authentic flavors and wholesome nutrition to your kitchen.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="group bg-card rounded-2xl border border-border p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {category.description}
                </p>
                <button className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Rooted in Tradition, Packed with Nutrition
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our dried foods are sourced from trusted local farmers and suppliers who share our commitment 
              to quality. Each product is carefully selected to ensure it meets our high standards for 
              freshness, flavor, and nutritional value.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Naturally Preserved</h3>
                <p className="text-sm text-muted-foreground">Traditional drying methods that retain nutrients</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Wheat className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Locally Sourced</h3>
                <p className="text-sm text-muted-foreground">Supporting local farmers and communities</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Bean className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quality Assured</h3>
                <p className="text-sm text-muted-foreground">Rigorous quality checks at every step</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Stock Your Pantry Today
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our dried foods selection and bulk ordering options for your home or business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DriedFoods;
