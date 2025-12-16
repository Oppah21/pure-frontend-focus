import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import groceriesImage from "@/assets/groceries-category.jpg";

const WoolworthsSelection = () => {
  const categories = [
    "Fresh Produce",
    "Packaged Groceries",
    "Frozen Items",
    "Bakery & Bread",
    "Dairy & Chilled",
    "Household Essentials",
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={groceriesImage}
                alt="Woolworths Selection at The Fresh Company"
                className="w-full h-[450px] object-cover"
              />
            </div>
            {/* Premium Badge */}
            <div className="absolute -top-4 -right-4 bg-fresh-gold rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-fresh-brown fill-fresh-brown" />
                <span className="font-display font-bold text-fresh-brown">Premium</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="text-fresh-gold font-semibold tracking-wider uppercase text-sm">
              Premium Quality
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Woolworths Selection
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Experience premium quality with our exclusive Woolworths range. 
              From fresh produce to packaged goods, we bring you trusted products 
              that meet the highest standards of quality.
            </p>

            {/* Categories Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {categories.map((category) => (
                <div
                  key={category}
                  className="flex items-center gap-2 p-3 rounded-xl bg-secondary border border-border"
                >
                  <div className="w-2 h-2 rounded-full bg-fresh-gold" />
                  <span className="text-foreground text-sm font-medium">{category}</span>
                </div>
              ))}
            </div>

            <Link to="/products">
              <Button variant="fresh" size="xl" className="group">
                Shop Woolworths Range
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WoolworthsSelection;
