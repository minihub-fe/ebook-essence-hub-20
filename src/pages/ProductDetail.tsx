
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "sonner";
import { 
  ChevronLeft, ShoppingCart, BookOpen, Download, 
  Eye, Heart, Star, CheckCircle2, Clock, 
  Gift, Award, Verified, Users, Play
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/Navbar";
import PdfViewer from "@/components/PdfViewer";
import RelatedProducts from "@/components/RelatedProducts";
import ProductMarketing from "@/components/ProductMarketing";
import { findProductById, getRelatedProducts } from "@/lib/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = findProductById(id || "");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [wishlistAdded, setWishlistAdded] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  
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

  const handleAddToCart = () => {
    toast.success(`${product.title} added to cart`);
  };

  const handleBuyNow = () => {
    toast.success(`Proceeding to checkout for ${product.title}`);
  };

  const handleWishlist = () => {
    setWishlistAdded(!wishlistAdded);
    if (!wishlistAdded) {
      toast.success(`${product.title} added to wishlist`);
    } else {
      toast.info(`${product.title} removed from wishlist`);
    }
  };

  const relatedProducts = getRelatedProducts(product.id, product.category);

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
              <button 
                className="absolute bottom-4 right-4 rounded-full bg-retro-primary hover:bg-retro-primary/90 text-white w-10 h-10 flex items-center justify-center shadow-retro-sm shadow-retro-secondary" 
                onClick={() => setActiveTab('video')}
              >
                <Play className="h-5 w-5" fill="white" />
              </button>
            )}
          </div>
          
          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-4">
              <Badge className="retro-badge retro-badge-secondary mb-4">{product.category}</Badge>
              <h1 className="retro-heading text-3xl md:text-4xl mb-2">{product.title}</h1>
              <div className="flex items-center text-sm mb-4">
                <span className="retro-body">By <span className="font-bold text-retro-secondary">{product.author}</span></span>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center bg-white text-retro-primary rounded-full px-4 py-1 border border-retro-primary">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm retro-body">Instant Access</span>
                </div>
                <div className="flex items-center bg-white text-retro-secondary rounded-full px-4 py-1 border border-retro-secondary">
                  <Verified className="w-4 h-4 mr-2" />
                  <span className="text-sm retro-body">Verified Quality</span>
                </div>
                <div className="flex items-center bg-white text-retro-primary rounded-full px-4 py-1 border border-retro-primary">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-sm retro-body">1000+ Users</span>
                </div>
              </div>
            </div>
            
            {/* Product Actions Box */}
            <div className="retro-card border-retro-primary shadow-retro-primary p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl font-bold text-retro-primary retro-heading">${product.price}</div>
                <Badge className="retro-badge retro-badge-secondary">Best Value</Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button 
                  onClick={handleAddToCart}
                  className="retro-button retro-button-secondary"
                >
                  <ShoppingCart className="mr-2 h-4 w-4 inline" />
                  Add to Cart
                </button>
                <button 
                  onClick={handleBuyNow} 
                  className="retro-button retro-button-primary"
                >
                  <Download className="mr-2 h-4 w-4 inline" />
                  Buy Now
                </button>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => setIsPreviewOpen(true)} 
                  className="retro-button retro-button-accent flex-1"
                >
                  <Eye className="mr-2 h-4 w-4 inline" />
                  Preview
                </button>
                <button 
                  onClick={handleWishlist}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
                    ${wishlistAdded 
                      ? 'text-red-500 border-red-500 bg-red-50' 
                      : 'text-slate-400 border-slate-300'} 
                    hover:bg-red-50`}
                >
                  <Heart className={`h-5 w-5 ${wishlistAdded ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>
            
            {/* Sample PDF Preview Button (not the actual preview) */}
            <div className="md:hidden retro-card border-retro-accent shadow-retro-accent p-4 mb-6">
              <h3 className="retro-heading text-lg mb-3">Sample Preview</h3>
              <div className="flex items-center justify-center h-32 bg-retro-muted rounded-lg mb-3">
                <div className="text-center p-4">
                  <BookOpen className="h-8 w-8 mx-auto text-retro-secondary" />
                  <p className="mt-2 text-sm retro-body">Click to see sample pages</p>
                </div>
              </div>
              <button 
                onClick={() => setIsPreviewOpen(true)} 
                className="retro-button retro-button-accent w-full"
              >
                View Preview
              </button>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          {/* Tab Navigation */}
          <div className="flex border-b-2 border-retro-muted overflow-x-auto scrollbar-none">
            <button 
              className={`px-4 py-2 retro-body border-b-2 -mb-0.5 ${activeTab === 'description' ? 'border-retro-primary text-retro-primary font-bold' : 'border-transparent'}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={`px-4 py-2 retro-body border-b-2 -mb-0.5 ${activeTab === 'features' ? 'border-retro-primary text-retro-primary font-bold' : 'border-transparent'}`}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
            <button 
              className={`px-4 py-2 retro-body border-b-2 -mb-0.5 ${activeTab === 'learn' ? 'border-retro-primary text-retro-primary font-bold' : 'border-transparent'}`}
              onClick={() => setActiveTab('learn')}
            >
              What You'll Learn
            </button>
            <button 
              className={`px-4 py-2 retro-body border-b-2 -mb-0.5 ${activeTab === 'reviews' ? 'border-retro-primary text-retro-primary font-bold' : 'border-transparent'}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
            {product.videoUrl && (
              <button 
                className={`px-4 py-2 retro-body border-b-2 -mb-0.5 ${activeTab === 'video' ? 'border-retro-primary text-retro-primary font-bold' : 'border-transparent'}`}
                onClick={() => setActiveTab('video')}
              >
                Video
              </button>
            )}
          </div>
          
          {/* Tab Content */}
          <div className="min-h-[400px]">
            {/* Description Tab */}
            {activeTab === 'description' && (
              <div className="retro-card border-retro-primary shadow-retro-primary p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-retro-primary mr-3" />
                  <h2 className="retro-heading text-xl">Product Description</h2>
                </div>
                <p className="retro-body">{product.description}</p>
              </div>
            )}
            
            {/* Features Tab */}
            {activeTab === 'features' && (
              <div className="retro-card border-retro-primary shadow-retro-primary p-6">
                <div className="flex items-center mb-6">
                  <Award className="h-6 w-6 text-retro-primary mr-3" />
                  <h2 className="retro-heading text-xl">Key Features</h2>
                </div>
                
                {product.features ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start p-4 bg-retro-muted rounded-lg border border-retro-primary transform hover:translate-y-[-4px] transition-transform duration-200">
                        <CheckCircle2 className="h-5 w-5 text-retro-primary mr-3 flex-shrink-0" />
                        <span className="retro-body">{feature}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center retro-body text-slate-500 italic">No features listed for this product.</p>
                )}
              </div>
            )}
            
            {/* What You'll Learn Tab */}
            {activeTab === 'learn' && (
              <div className="retro-card border-retro-secondary shadow-retro-secondary p-6">
                <div className="flex items-center mb-6">
                  <BookOpen className="h-6 w-6 text-retro-secondary mr-3" />
                  <h2 className="retro-heading text-xl">What You'll Learn</h2>
                </div>
                
                <ProductMarketing />
              </div>
            )}
            
            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="retro-card border-retro-secondary shadow-retro-secondary p-6">
                <div className="flex items-center mb-6">
                  <Star className="h-6 w-6 text-retro-secondary mr-3" />
                  <h2 className="retro-heading text-xl">Customer Reviews</h2>
                </div>
                
                {product.reviews && product.reviews.length > 0 ? (
                  <div className="space-y-6">
                    {product.reviews.map((review, index) => (
                      <div key={index} className="p-4 bg-retro-muted rounded-lg border border-retro-secondary transform hover:translate-y-[-4px] transition-transform duration-200">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-retro-secondary retro-heading">{review.name}</h4>
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`} 
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-2 retro-body">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 bg-retro-muted rounded-lg border border-retro-secondary">
                    <BookOpen className="h-12 w-12 mx-auto text-retro-secondary" />
                    <p className="mt-4 text-slate-500 italic retro-body">No reviews yet. Be the first to review this product!</p>
                  </div>
                )}
              </div>
            )}
            
            {/* Video Tab */}
            {activeTab === 'video' && product.videoUrl && (
              <div className="retro-card border-retro-primary shadow-retro-primary p-6">
                <div className="flex items-center mb-6">
                  <Play className="h-6 w-6 text-retro-primary mr-3" />
                  <h2 className="retro-heading text-xl">Product Video</h2>
                </div>
                
                <div className="aspect-video rounded-lg overflow-hidden bg-black border-2 border-retro-primary">
                  <iframe
                    width="100%"
                    height="100%"
                    src={product.videoUrl}
                    title="Product Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
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
        {isPreviewOpen && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col border-4 border-retro-primary">
              <div className="flex items-center justify-between p-4 border-b-2 border-retro-primary bg-retro-accent">
                <h2 className="retro-heading text-xl">Preview: {product.title}</h2>
                <button 
                  onClick={() => setIsPreviewOpen(false)}
                  className="rounded-full w-10 h-10 flex items-center justify-center hover:bg-retro-primary/10 border-2 border-retro-primary text-retro-primary font-mono font-bold"
                >
                  <span aria-hidden className="text-2xl">×</span>
                </button>
              </div>
              <div className="flex-1 overflow-auto p-6 bg-retro-background">
                {product.pdfSampleUrl ? (
                  <PdfViewer url={product.pdfSampleUrl} maxPages={3} isModal={true} />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center p-8 retro-card border-retro-secondary shadow-retro-secondary">
                      <BookOpen className="h-12 w-12 mx-auto text-retro-secondary" />
                      <h3 className="mt-4 retro-heading">No preview available</h3>
                      <p className="mt-2 text-sm text-retro-muted-foreground retro-body">
                        Preview for this product is not yet available.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4 border-t-2 border-retro-primary flex justify-between items-center bg-retro-muted">
                <span className="text-sm text-retro-secondary retro-body">Limited preview of {product.title}</span>
                <div className="space-x-2">
                  <button 
                    onClick={() => setIsPreviewOpen(false)}
                    className="retro-button retro-button-secondary"
                  >
                    Close
                  </button>
                  <button 
                    onClick={handleBuyNow} 
                    className="retro-button retro-button-primary"
                  >
                    Buy Full Version
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductDetail;
