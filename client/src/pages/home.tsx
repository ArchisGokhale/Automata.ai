import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeSection from "@/sections/HomeSection";
import DemoSection from "@/sections/DemoSection";
import ComparisonSection from "@/sections/ComparisonSection";
import PricingSection from "@/sections/PricingSection";
import FAQSection from "@/sections/FAQSection";



export default function Home() {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-white/20">
      <Navbar />
      <main>
        <HomeSection />
        <DemoSection />
        <ComparisonSection />
        <PricingSection />
        <FAQSection />


      </main>
      <Footer />
    </div>
  );
}
