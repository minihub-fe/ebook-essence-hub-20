
import ProductGrid from "./ProductGrid";
import { BookOpen } from "lucide-react";

const FeaturedProductsSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8 border-b-2 border-dashed border-retro-secondary pb-4">
          <BookOpen className="h-6 w-6 text-retro-secondary mr-3" />
          <h2 className="retro-heading text-2xl">Browse Our Collection</h2>
        </div>
        <ProductGrid />
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
