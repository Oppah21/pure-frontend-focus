import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sparkles, Wine, GlassWater } from "lucide-react";
import { Link } from "react-router-dom";
import liquorHero from "@/assets/liquor-hero.jpg";
import whiskeyCategory from "@/assets/whiskey-category.jpg";
import wineCategory from "@/assets/wine-category.jpg";
import ginCategory from "@/assets/gin-category.jpg";
import vodkaCategory from "@/assets/vodka-category.jpg";

const Liquor = () => {
  const categories = [
    {
      name: "Whiskey",
      description: "Premium single malts, blends, and bourbon selections from around the world.",
      image: whiskeyCategory,
    },
    {
      name: "Gin",
      description: "Artisanal gins infused with botanicals for the perfect cocktail.",
      image: ginCategory,
    },
    {
      name: "Vodka",
      description: "Crystal-clear premium vodkas, distilled to perfection.",
      image: vodkaCategory,
    },
    {
      name: "Wine",
      description: "Exquisite reds, whites, and rosés from renowned vineyards globally.",
      image: wineCategory,
    },
    {
      name: "Liqueurs",
      description: "Rich, sweet spirits perfect for sipping or crafting signature cocktails.",
      image: wineCategory,
    },
    {
      name: "Cocktail Spirits",
      description: "Essential mixers and specialty spirits for the home bartender.",
      image: ginCategory,
    },
  ];

  const signatureCocktails = [
    {
      name: "Old Fashioned",
      ingredients: "Whiskey • Bitters • Sugar",
      icon: Sparkles,
    },
    {
      name: "French 75",
      ingredients: "Gin • Champagne • Lemon",
      icon: Sparkles,
    },
    {
      name: "Wine Spritzer",
      ingredients: "White Wine • Soda • Citrus",
      icon: GlassWater,
    },
    {
      name: "Moscow Mule",
      ingredients: "Vodka • Ginger Beer • Lime",
      icon: Wine,
    },
  ];

  return (
    <div className="min-h-screen bg-liquor-charcoal">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${liquorHero})` }}
        >
          <div className="absolute inset-0 bg-liquor-brown/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <p className="text-liquor-gold font-medium tracking-widest uppercase mb-4 animate-fade-up">
            The Fresh Company
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-up">
            Company Liquor
          </h1>

          <div className="max-w-2xl mx-auto bg-liquor-brown/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 animate-fade-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Premium & Curated
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              We offer a carefully selected range of premium whiskeys, wines, gins, vodkas
              and cocktail spirits. Each bottle is chosen for quality, character, and the
              exceptional experience it delivers.
            </p>
            <Button
              variant="outline"
              size="xl"
              className="border-liquor-gold text-liquor-gold hover:bg-liquor-gold hover:text-liquor-charcoal rounded-full font-semibold"
            >
              Explore Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Our Collection Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-liquor-charcoal text-center mb-16">
            Our Collection
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="group cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-liquor-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-display text-xl font-semibold text-liquor-charcoal mb-2">
                  {category.name}
                </h3>
                <p className="text-liquor-brown/70 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Cocktails Section */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-liquor-charcoal text-center mb-4">
            Signature Cocktails
          </h2>
          <p className="text-liquor-brown/70 text-center max-w-2xl mx-auto mb-16">
            Classic recipes made with our premium spirits
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {signatureCocktails.map((cocktail, index) => (
              <div
                key={cocktail.name}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-liquor-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <cocktail.icon className="w-8 h-8 text-liquor-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-liquor-charcoal mb-3">
                  {cocktail.name}
                </h3>
                <p className="text-liquor-brown/70 text-sm">
                  {cocktail.ingredients}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-liquor-brown">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Visit Our Liquor Store
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Experience our curated selection in person. Our knowledgeable staff is ready to help you find the perfect bottle.
          </p>
          <Button
            variant="outline"
            size="xl"
            className="border-liquor-gold text-liquor-gold hover:bg-liquor-gold hover:text-liquor-charcoal rounded-full font-semibold"
          >
            Get Directions
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Liquor;
