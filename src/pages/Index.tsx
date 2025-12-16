import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FreshProduceHighlights from "@/components/FreshProduceHighlights";
import WoolworthsSelection from "@/components/WoolworthsSelection";
import DriedFoodsPantry from "@/components/DriedFoodsPantry";
import Features from "@/components/Features";
import ServicesOverview from "@/components/ServicesOverview";
import LiquorHighlight from "@/components/LiquorHighlight";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FreshProduceHighlights />
        <WoolworthsSelection />
        <DriedFoodsPantry />
        <Features />
        <ServicesOverview />
        <LiquorHighlight />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
