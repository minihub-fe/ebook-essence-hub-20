
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "sonner";
import { ChevronLeft, Gift, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import RelatedProducts from "@/components/RelatedProducts";
import { findProductById, getRelatedProducts } from "@/lib/products";

// Import new component files
import ProductHeader from "@/components/ProductHeader";
import ProductActions from "@/components/ProductActions";
import ProductDescription from "@/components/ProductDescription";
import ProductFeatures from "@/components/ProductFeatures";
import ProductMarketing from "@/components/ProductMarketing";
import ProductReviews from "@/components/ProductReviews";
import ProductVideo from "@/components/ProductVideo";
import ProductPreviewModal from "@/components/ProductPreviewModal";

const ProductDetail = () => {
  const { id } = useParams();
  const product = findProductById(id || "");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-retro-background">
        <h1 className="retro-heading text-2xl mb-4">Product not found</h1>
        <Link to="/" className="retro-button retro-button-primary">
          Go back to home
        </Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, product.category);
  
  const handleBuyNow = () => {
    toast.success(`Proceeding to checkout for ${product.title}`);
  };

  return (
    <div className="min-h-screen bg-retro-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <Link to="/" className="inline-flex items-center text-sm text-retro-secondary hover:text-retro-secondary/80 retro-body mb-6 border-b-2 border-dashed border-retro-secondary">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Products
        </Link>

        {/* Product Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-retro-primary shadow-retro-md shadow-retro-primary bg-white">
            <img
              src={product.coverImage}
              alt={product.title}
              className="object-cover w-full h-full transition-transform hover:scale-105 duration-700"
            />
            {product.videoUrl && (
              <a 
                href="#video-section" 
                className="absolute bottom-4 right-4 rounded-full bg-retro-primary hover:bg-retro-primary/90 text-white w-10 h-10 flex items-center justify-center shadow-retro-sm shadow-retro-secondary" 
              >
                <Play className="h-5 w-5" fill="white" />
              </a>
            )}
          </div>
          
          {/* Product Info */}
          <div className="flex flex-col">
            <ProductHeader product={product} />
            <ProductActions 
              product={product} 
              onPreviewOpen={() => setIsPreviewOpen(true)} 
            />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="grid grid-cols-1 gap-4 mb-12">
          <ProductDescription product={product} />
          
          <ProductFeatures product={product} />
          
          <div className="retro-card border-retro-secondary shadow-retro-secondary p-6 mb-8 animate-fade-in">
            <h2 className="retro-heading text-xl mb-6">What You'll Learn</h2>
            <ProductMarketing />
          </div>
          
          {product.videoUrl && (
            <div id="video-section">
              <ProductVideo product={product} />
            </div>
          )}
          
          <ProductReviews product={product} />
        </div>

        {/* Related Products Section */}
        <div className="pt-8 border-t-2 border-dashed border-retro-secondary">
          <div className="flex items-center mb-8">
            <Gift className="h-6 w-6 text-retro-secondary mr-3" />
            <h2 className="retro-heading text-2xl">You Might Also Like</h2>
          </div>
          <RelatedProducts products={relatedProducts} />
        </div>

        {/* Preview Modal */}
        <ProductPreviewModal
          isOpen={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
          product={product}
          onBuyNow={handleBuyNow}
        />
      </main>
    </div>
  );
};

export default ProductDetail;
