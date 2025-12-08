import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding bg-fresh-gold relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-fresh-gold-dark/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-fresh-gold-dark/30 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-fresh-brown mb-6">
            Ready to Experience Fresh?
          </h2>
          <p className="text-fresh-brown/80 text-lg mb-8 max-w-xl mx-auto">
            Order now and get fresh produce delivered to your doorstep. 
            First-time customers get 10% off their first order!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="xl" className="group">
              Start Shopping
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="border-fresh-brown text-fresh-brown hover:bg-fresh-brown hover:text-fresh-gold">
              <Phone className="mr-2 w-5 h-5" />
              Call Us Now
            </Button>
          </div>

          <p className="text-fresh-brown/60 text-sm mt-6">
            No minimum order required • Free delivery on orders over $50
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
