
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import { BookOpen, Sparkles, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-retro-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <section className="mb-16 text-center">
          <span className="retro-badge retro-badge-secondary inline-block mb-3">Digital Library</span>
          <h1 className="retro-heading text-3xl sm:text-4xl md:text-5xl mb-4">
            Discover Premium Digital Content
          </h1>
          <p className="retro-body text-lg text-retro-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our curated collection of ebooks, templates, and educational resources designed to help you grow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="retro-card retro-card-primary p-4 flex flex-col items-center">
              <BookOpen className="h-10 w-10 text-retro-primary mb-2" />
              <h3 className="retro-heading text-lg mb-1">Premium Content</h3>
              <p className="retro-body text-sm text-center">Hand-selected resources of the highest quality</p>
            </div>
            <div className="retro-card retro-card-secondary p-4 flex flex-col items-center">
              <Sparkles className="h-10 w-10 text-retro-secondary mb-2" />
              <h3 className="retro-heading text-lg mb-1">Instant Access</h3>
              <p className="retro-body text-sm text-center">Get immediate access to all your purchases</p>
            </div>
            <div className="retro-card retro-card-accent p-4 flex flex-col items-center">
              <Award className="h-10 w-10 text-retro-accent-foreground mb-2" />
              <h3 className="retro-heading text-lg mb-1">Satisfaction Guaranteed</h3>
              <p className="retro-body text-sm text-center">Love it or get your money back</p>
            </div>
          </div>
        </section>
        
        <section>
          <div className="flex items-center mb-8 border-b-2 border-dashed border-retro-secondary pb-4">
            <BookOpen className="h-6 w-6 text-retro-secondary mr-3" />
            <h2 className="retro-heading text-2xl">Browse Our Collection</h2>
          </div>
          <ProductGrid />
        </section>
      </main>
    </div>
  );
};

export default Index;
