
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "sonner";
import { 
  ChevronLeft, ShoppingCart, BookOpen, Download, 
  Eye, Heart, Play, Star, CheckCircle2, Clock, 
  Gift, Award, Verified, Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
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

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link to="/" className="mt-4 text-primary hover:underline">
          Go back to home
        </Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, product.category);

  return (
    <div className="min-h-screen bg-[#F1F0FB]">
      <Navbar />
      <main className="container mx-auto px-4 pt-12 pb-20">
        <Link to="/" className="inline-flex items-center text-sm text-[#8B5CF6] hover:text-[#6941C6] font-mono mb-6 border-b-2 border-dashed border-[#8B5CF6]">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Products
        </Link>

        {/* Hero Section */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#E5DEFF] to-[#D3E4FD] p-6 md:p-10 mb-12 border-2 border-[#8B5CF6] shadow-[8px_8px_0px_#8B5CF6]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <Badge className="bg-[#D946EF] text-white hover:bg-[#D946EF]/80 mb-4 font-mono uppercase tracking-wider px-3">{product.category}</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif">{product.title}</h1>
              <div className="flex items-center text-sm mb-6">
                <span className="font-mono text-slate-700">By <span className="font-bold text-[#8B5CF6]">{product.author}</span></span>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center bg-white/70 text-[#F97316] rounded-full px-4 py-1 border border-[#F97316]">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm font-mono">Instant Access</span>
                </div>
                <div className="flex items-center bg-white/70 text-[#8B5CF6] rounded-full px-4 py-1 border border-[#8B5CF6]">
                  <Verified className="w-4 h-4 mr-2" />
                  <span className="text-sm font-mono">Verified Quality</span>
                </div>
                <div className="flex items-center bg-white/70 text-[#0EA5E9] rounded-full px-4 py-1 border border-[#0EA5E9]">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-sm font-mono">1000+ Users</span>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-white/80 backdrop-blur-sm mb-6 border-2 border-[#F97316] shadow-[4px_4px_0px_#F97316]">
                <p className="text-slate-700 leading-relaxed font-mono">
                  {product.description}
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2 md:pl-8">
              <div className="aspect-[4/3] relative overflow-hidden rounded-xl border-4 border-[#F97316] shadow-[8px_8px_0px_#F97316] bg-white">
                <img
                  src={product.coverImage}
                  alt={product.title}
                  className="object-cover w-full h-full transition-transform hover:scale-105 duration-700"
                />
                {product.videoUrl && (
                  <Button 
                    className="absolute bottom-4 right-4 rounded-full bg-[#F97316] hover:bg-[#F97316]/90 text-white shadow-[2px_2px_0px_#8B5CF6]" 
                    size="icon"
                    onClick={() => window.open(product.videoUrl, '_blank')}
                  >
                    <Play className="h-5 w-5" fill="white" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Product Actions Panel */}
        <div className="sticky top-4 z-10 rounded-2xl bg-white border-2 border-[#8B5CF6] shadow-[6px_6px_0px_#8B5CF6] p-6 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-3xl font-bold text-[#F97316] font-serif">${product.price}</div>
              <Badge className="bg-[#D946EF] hover:bg-[#D946EF]/80">Best Value</Badge>
            </div>
            
            <div className="flex items-center gap-3">
              <Button 
                onClick={() => setIsPreviewOpen(true)} 
                variant="outline"
                className="bg-[#E5DEFF] border-2 border-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white font-mono text-[#8B5CF6] shadow-[3px_3px_0px_#8B5CF6] transform hover:translate-y-[-2px] transition-all"
              >
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
              <Button 
                onClick={handleAddToCart}
                className="bg-[#D3E4FD] border-2 border-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-white font-mono text-[#0EA5E9] shadow-[3px_3px_0px_#0EA5E9] transform hover:translate-y-[-2px] transition-all"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button 
                onClick={handleBuyNow} 
                className="bg-[#FEC6A1] border-2 border-[#F97316] hover:bg-[#F97316] hover:text-white font-mono text-[#F97316] shadow-[3px_3px_0px_#F97316] transform hover:translate-y-[-2px] transition-all"
              >
                <Download className="mr-2 h-4 w-4" />
                Buy Now
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className={`rounded-full border-2 ${wishlistAdded ? 'text-red-500 border-red-500 bg-red-50' : 'text-slate-400 border-slate-300'} hover:bg-red-50`}
                onClick={handleWishlist}
              >
                <Heart className={`h-5 w-5 ${wishlistAdded ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Features Section */}
            <section className="rounded-2xl bg-gradient-to-r from-[#FEF7CD] to-[#FEC6A1] p-8 border-2 border-[#F97316] shadow-[8px_8px_0px_#F97316]">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F97316] rounded-full text-white mr-4">
                  <Award className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-[#F97316] font-serif">Key Features</h2>
              </div>
              
              {product.features ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start p-4 bg-white/70 backdrop-blur-sm rounded-lg border-2 border-[#F97316] transform hover:translate-y-[-4px] transition-transform duration-200">
                      <CheckCircle2 className="h-5 w-5 text-[#F97316] mr-3 flex-shrink-0" />
                      <span className="text-slate-700 font-mono">{feature}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-500 italic text-center font-mono">No features listed for this product.</p>
              )}
            </section>

            {/* What You'll Learn Section */}
            <section className="rounded-2xl bg-gradient-to-r from-[#E5DEFF] to-[#FFDEE2] p-8 border-2 border-[#D946EF] shadow-[8px_8px_0px_#D946EF]">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-[#D946EF] rounded-full text-white mr-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-[#D946EF] font-serif">What You'll Learn</h2>
              </div>
              
              <ProductMarketing />
            </section>

            {/* Reviews Section */}
            <section className="rounded-2xl bg-gradient-to-r from-[#D3E4FD] to-[#E5DEFF] p-8 border-2 border-[#8B5CF6] shadow-[8px_8px_0px_#8B5CF6]">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-[#8B5CF6] rounded-full text-white mr-4">
                  <Star className="h-6 w-6" fill="white" />
                </div>
                <h2 className="text-2xl font-bold text-[#8B5CF6] font-serif">Customer Reviews</h2>
              </div>
              
              {product.reviews && product.reviews.length > 0 ? (
                <div className="space-y-6">
                  {product.reviews.map((review, index) => (
                    <div key={index} className="p-4 bg-white/70 backdrop-blur-sm rounded-lg border-2 border-[#8B5CF6] transform hover:translate-y-[-4px] transition-transform duration-200">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-[#8B5CF6] font-serif">{review.name}</h4>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mt-2 text-slate-700 font-mono">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-white/70 backdrop-blur-sm rounded-lg border-2 border-[#8B5CF6]">
                  <BookOpen className="h-12 w-12 mx-auto text-[#8B5CF6]" />
                  <p className="mt-4 text-slate-500 italic font-mono">No reviews yet. Be the first to review this product!</p>
                </div>
              )}
            </section>

            {/* Video Section */}
            {product.videoUrl && (
              <section className="rounded-2xl bg-gradient-to-r from-[#FEC6A1] to-[#FFDEE2] p-8 border-2 border-[#F97316] shadow-[8px_8px_0px_#F97316]">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#F97316] rounded-full text-white mr-4">
                    <Play className="h-6 w-6" fill="white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#F97316] font-serif">Product Video</h2>
                </div>
                
                <div className="aspect-video rounded-lg overflow-hidden bg-black border-4 border-[#F97316]">
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
              </section>
            )}
          </div>

          {/* Right Column - PDF Preview */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-24">
              <div className="rounded-2xl bg-white p-6 border-2 border-[#F97316] shadow-[6px_6px_0px_#F97316]">
                <h3 className="text-xl font-bold text-[#F97316] mb-4 font-serif">Sample Preview</h3>
                {product.pdfSampleUrl ? (
                  <div className="h-[400px] mb-4">
                    <PdfViewer 
                      url={product.pdfSampleUrl} 
                      maxPages={3} 
                      className="h-full"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-64 bg-slate-100 rounded-lg">
                    <div className="text-center p-6">
                      <BookOpen className="h-12 w-12 mx-auto text-slate-400" />
                      <h3 className="mt-4 font-medium">No preview available</h3>
                      <p className="mt-2 text-sm text-slate-500 font-mono">
                        Preview for this product is not yet available.
                      </p>
                    </div>
                  </div>
                )}
                <Button 
                  onClick={() => setIsPreviewOpen(true)} 
                  className="w-full mt-2 bg-[#F97316] hover:bg-[#F97316]/90 text-white font-mono shadow-[3px_3px_0px_#8B5CF6]"
                >
                  View Full Preview
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-24 pt-12 border-t-4 border-dashed border-[#8B5CF6]">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 flex items-center justify-center bg-[#8B5CF6] rounded-full text-white mr-4">
              <Gift className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#8B5CF6] font-serif">You Might Also Like</h2>
          </div>
          <RelatedProducts products={relatedProducts} />
        </div>

        {/* Preview Modal */}
        {isPreviewOpen && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col border-4 border-[#F97316]">
              <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-[#FEF7CD] to-[#FEC6A1]">
                <h2 className="font-bold text-xl text-[#F97316] font-serif">Sample Preview: {product.title}</h2>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsPreviewOpen(false)}
                  className="rounded-full hover:bg-[#F97316]/10"
                >
                  <span className="sr-only">Close</span>
                  <span aria-hidden className="text-2xl text-[#F97316]">×</span>
                </Button>
              </div>
              <div className="flex-1 overflow-auto p-4">
                {product.pdfSampleUrl ? (
                  <ScrollArea className="h-full">
                    <PdfViewer url={product.pdfSampleUrl} maxPages={3} />
                  </ScrollArea>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center p-8">
                      <BookOpen className="h-12 w-12 mx-auto text-slate-400" />
                      <h3 className="mt-4 font-medium font-serif">No preview available</h3>
                      <p className="mt-2 text-sm text-slate-500 font-mono">
                        Preview for this product is not yet available.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4 border-t flex justify-between items-center bg-gradient-to-r from-[#E5DEFF] to-[#D3E4FD] rounded-b-xl">
                <span className="text-sm text-[#8B5CF6] font-mono">Limited preview of {product.title}</span>
                <div className="space-x-2">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsPreviewOpen(false)}
                    className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white"
                  >
                    Close
                  </Button>
                  <Button 
                    onClick={handleBuyNow} 
                    className="bg-[#F97316] hover:bg-[#F97316]/90 text-white border-2 border-[#F97316] shadow-[3px_3px_0px_#8B5CF6]"
                  >
                    Buy Full Version
                  </Button>
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
