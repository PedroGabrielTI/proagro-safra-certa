import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyGenericsSection } from "@/components/sections/WhyGenericsSection";
import { PartnerSealSection } from "@/components/sections/PartnerSealSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { HowToBuySection } from "@/components/sections/HowToBuySection";
import { MarketSection } from "@/components/sections/MarketSection";
import { ForWhoSection } from "@/components/sections/ForWhoSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <PartnerSealSection />
        <WhyGenericsSection />
        <ProductsSection />
        <HowToBuySection />
        <MarketSection />
        <ForWhoSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
