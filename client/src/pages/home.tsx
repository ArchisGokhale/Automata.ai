import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeSection from "@/sections/HomeSection";
import FeaturesSection from "@/sections/FeaturesSection";
import PricingSection from "@/sections/PricingSection";
import AboutSection from "@/sections/AboutSection";
import InternshipsSection from "@/sections/InternshipsSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar />
      <main>
        <HomeSection />
        <FeaturesSection />
        <PricingSection />
        <AboutSection />
        <InternshipsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
