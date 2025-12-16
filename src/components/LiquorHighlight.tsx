import { ArrowRight, Wine } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import liquorHero from "@/assets/liquor-hero.jpg";

const LiquorHighlight = () => {
  const categories = ["Whiskey", "Gin", "Vodka", "Wine", "Liqueurs", "Cocktail Spirits"];

  return (
    <section className="section-padding bg-liquor-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-liquor-gold/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-liquor-brown/20 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-liquor-brown/30 px-4 py-2 rounded-full mb-6">
              <Wine className="w-5 h-5 text-liquor-gold" />
              <span className="text-liquor-gold font-semibold text-sm">Our Subsidiary</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              The Fresh Company<br />
              <span className="text-liquor-gold">Liquor</span>
            </h2>
            <p className="text-white/80 text-lg mb-6">
              Explore our premium selection of spirits, wines, and beverages. 
              From aged whiskeys to fine wines, we curate the finest drinks 
              for every occasion.
            </p>

            {/* Categories */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 rounded-full border border-liquor-gold/30 text-liquor-gold text-sm font-medium hover:bg-liquor-gold/10 transition-colors"
                >
                  {category}
                </span>
              ))}
            </div>

            <Link to="/liquor">
              <Button 
                size="xl" 
                className="bg-liquor-brown text-white hover:bg-liquor-brown/90 group"
              >
                Visit Freshco Liquor
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-liquor-gold/20">
              <img
                src={liquorHero}
                alt="The Fresh Company Liquor Collection"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-liquor-charcoal/60 to-transparent" />
            </div>
            {/* Premium Badge */}
            <div className="absolute -bottom-6 -right-6 bg-liquor-brown rounded-2xl p-5 shadow-xl border border-liquor-gold/30">
              <p className="font-display text-2xl font-bold text-liquor-gold">21+</p>
              <p className="text-sm text-white/80">Premium Spirits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiquorHighlight;
