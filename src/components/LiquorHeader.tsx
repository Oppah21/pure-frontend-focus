import { useState } from "react";
import { Menu, X, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const LiquorHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Liquor", href: "/liquor" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-liquor-charcoal/95 backdrop-blur-md border-b border-liquor-brown/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-liquor-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Wine className="w-5 h-5 text-liquor-charcoal" />
            </div>
            <span className="font-display text-xl font-semibold text-white hidden sm:block">
              The Fresh Company
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-liquor-gold after:transition-all after:duration-300 ${
                  location.pathname === link.href
                    ? "text-liquor-gold after:w-full"
                    : "text-white/70 hover:text-liquor-gold after:w-0 hover:after:w-full"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              size="lg"
              className="bg-liquor-gold text-liquor-charcoal hover:bg-liquor-gold/90 rounded-full font-semibold"
            >
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-liquor-brown/30 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-liquor-brown/30 animate-fade-up">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium transition-colors py-2 ${
                    location.pathname === link.href
                      ? "text-liquor-gold"
                      : "text-white/70 hover:text-liquor-gold"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/liquor">
                <Button className="mt-2 w-full bg-liquor-gold text-liquor-charcoal hover:bg-liquor-gold/90 rounded-full font-semibold">
                  Order Now
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default LiquorHeader;
