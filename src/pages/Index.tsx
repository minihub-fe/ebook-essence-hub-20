
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import TestimonialSection from "@/components/TestimonialSection";
import NewsletterSection from "@/components/NewsletterSection";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-retro-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <HeroSection />
        <FeaturedSection />
        <FeaturedProductsSection />
        <TestimonialSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
