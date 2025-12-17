import { ArrowRight, Apple, Package, Snowflake, Croissant, Milk, Home } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import groceriesImage from "@/assets/groceries-category.jpg";
import fruitsImage from "@/assets/fruits-category.jpg";

const categories = [
  {
    title: "Fresh Produce",
    description: "Premium Woolworths fresh fruits and vegetables",
    icon: Apple,
    image: fruitsImage,
    items: "50+ Items"
  },
  {
    title: "Packaged Groceries",
    description: "Quality packaged foods and pantry essentials",
    icon: Package,
    image: groceriesImage,
    items: "100+ Items"
  },
  {
    title: "Frozen Items",
    description: "Convenient frozen meals and ingredients",
    icon: Snowflake,
    image: null,
    items: "40+ Items"
  },
  {
    title: "Bakery & Bread",
    description: "Fresh baked goods and artisan breads",
    icon: Croissant,
    image: null,
    items: "30+ Items"
  },
  {
    title: "Dairy & Chilled",
    description: "Fresh dairy products and chilled goods",
    icon: Milk,
    image: null,
    items: "60+ Items"
  },
  {
    title: "Household Essentials",
    description: "Everyday household items and supplies",
    icon: Home,
    image: null,
    items: "80+ Items"
  }
];

const WoolworthsRange = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              Woolworths Partnership
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Woolworths Range
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover our curated selection of premium Woolworths products. 
              Quality you can trust, delivered fresh to your door.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Image or Gradient Background */}
                  <div className="h-48 relative overflow-hidden">
                    {category.image ? (
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <IconComponent className="w-20 h-20 text-primary/40" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">
                        {category.items}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {category.description}
                    </p>
                    <button className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      View Products
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              The Woolworths Quality Promise
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Every Woolworths product in our range meets strict quality standards. 
              From farm to table, we ensure freshness and excellence in every item we deliver.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-xl">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Apple className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">Hand-selected products meeting the highest standards</p>
              </div>
              <div className="p-6 bg-background rounded-xl">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Fresh Delivery</h3>
                <p className="text-sm text-muted-foreground">Temperature-controlled delivery to your door</p>
              </div>
              <div className="p-6 bg-background rounded-xl">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Trusted Brand</h3>
                <p className="text-sm text-muted-foreground">Backed by Woolworths' commitment to excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Shop?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contact us to place your order or learn more about our Woolworths range.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WoolworthsRange;
