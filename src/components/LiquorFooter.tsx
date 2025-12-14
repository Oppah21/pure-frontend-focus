import { Link } from "react-router-dom";
import { Wine, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const LiquorFooter = () => {
  return (
    <footer className="bg-liquor-charcoal border-t border-liquor-brown/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-liquor-gold flex items-center justify-center">
                <Wine className="w-5 h-5 text-liquor-charcoal" />
              </div>
              <span className="font-display text-xl font-semibold text-white">
                The Fresh Company
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed">
              Premium spirits and fine wines, carefully curated for the discerning palate.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-liquor-brown/50 flex items-center justify-center hover:bg-liquor-gold hover:text-liquor-charcoal transition-colors text-white/70">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-liquor-brown/50 flex items-center justify-center hover:bg-liquor-gold hover:text-liquor-charcoal transition-colors text-white/70">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-liquor-brown/50 flex items-center justify-center hover:bg-liquor-gold hover:text-liquor-charcoal transition-colors text-white/70">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Products", "Liquor", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "")}`}
                    className="text-white/60 hover:text-liquor-gold transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-6">Our Spirits</h4>
            <ul className="space-y-3">
              {["Whiskey", "Wine", "Gin", "Vodka", "Rum", "Tequila"].map((category) => (
                <li key={category}>
                  <Link to="/liquor" className="text-white/60 hover:text-liquor-gold transition-colors">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-liquor-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/60">123 Market Street, Fresh City, FC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-liquor-gold flex-shrink-0" />
                <span className="text-white/60">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-liquor-gold flex-shrink-0" />
                <span className="text-white/60">liquor@freshcompany.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-liquor-brown/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2024 The Fresh Company Liquor. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-liquor-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-liquor-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LiquorFooter;
