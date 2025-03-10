
import { useParams } from "react-router-dom";
import { mockProducts } from "@/lib/products";
import ProductHeader from "@/components/ProductHeader";
import ProductDescription from "@/components/ProductDescription";
import ProductFeatures from "@/components/ProductFeatures";
import ProductMarketing from "@/components/ProductMarketing";
import ProductActions from "@/components/ProductActions";
import ProductReviews from "@/components/ProductReviews";
import RelatedProducts from "@/components/RelatedProducts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = mockProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-retro-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-28 pb-16 text-center">
          <h1 className="retro-heading text-2xl mb-4">Product Not Found</h1>
          <p className="retro-body mb-8">Sorry, the product you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-retro-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Product image and info */}
          <div>
            <ProductHeader product={product} />
            <ProductFeatures product={product} />
          </div>
          
          {/* Right column - Purchase info and actions */}
          <div>
            <ProductActions product={product} />
            <ProductDescription product={product} />
            <ProductMarketing />
          </div>
        </div>
        
        <ProductReviews />
        <RelatedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
