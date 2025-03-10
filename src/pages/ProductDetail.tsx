
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "sonner";
import { ChevronLeft, ShoppingCart, BookOpen, Download, Eye, Heart, Play, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
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
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="container mx-auto px-4 pt-20 pb-16">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Products
        </Link>

        {/* Product Header - Mobile First */}
        <div className="mb-8">
          <Badge variant="outline" className="mb-2">{product.category}</Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2">{product.title}</h1>
          <div className="flex items-center text-sm text-slate-600">
            By <span className="font-medium text-slate-800 ml-1">{product.author}</span>
          </div>
        </div>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Column - Product Image */}
          <div className="lg:col-span-5 space-y-4">
            <div className="aspect-[4/3] relative overflow-hidden rounded-xl border shadow-lg bg-white">
              <img
                src={product.coverImage}
                alt={product.title}
                className="object-cover w-full h-full transition-transform hover:scale-105 duration-700"
              />
              {product.videoUrl && (
                <Button 
                  className="absolute bottom-4 right-4 rounded-full bg-primary/90 hover:bg-primary text-white" 
                  size="icon"
                  onClick={() => window.open(product.videoUrl, '_blank')}
                >
                  <Play className="h-5 w-5" fill="white" />
                </Button>
              )}
            </div>
          </div>

          {/* Right Column - Product Info & Actions */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-primary">${product.price}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`rounded-full ${wishlistAdded ? 'text-red-500 hover:text-red-600' : 'text-slate-400 hover:text-slate-900'}`}
                  onClick={handleWishlist}
                >
                  <Heart className={`h-5 w-5 ${wishlistAdded ? 'fill-current' : ''}`} />
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button 
                  onClick={() => setIsPreviewOpen(true)} 
                  variant="outline"
                  className="flex-1 bg-white hover:bg-slate-50"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Button>
                <Button 
                  onClick={handleAddToCart}
                  variant="outline"
                  className="flex-1 bg-white hover:bg-slate-50"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button 
                  onClick={handleBuyNow} 
                  className="flex-1 bg-primary hover:bg-primary/90 text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Buy Now
                </Button>
              </div>
              
              <Separator className="my-6" />
              
              <div className="space-y-4">
                <h3 className="font-medium text-slate-900">About this product:</h3>
                <p className="text-slate-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-12">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="w-full bg-white border border-slate-200 p-1 rounded-lg mb-6">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              {product.videoUrl && <TabsTrigger value="video">Video</TabsTrigger>}
            </TabsList>
            
            <TabsContent value="details" className="mt-2">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Product Details</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  {product.description}
                </p>
                
                <ProductMarketing />
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="mt-2">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                {product.features ? (
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start bg-slate-50 p-3 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-500 italic text-center">No features listed for this product.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-2">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
                {product.reviews && product.reviews.length > 0 ? (
                  <div className="space-y-6">
                    {product.reviews.map((review, index) => (
                      <div key={index} className="border-b border-slate-100 pb-6 last:pb-0 last:border-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-slate-900">{review.name}</h4>
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`} 
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-2 text-slate-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <BookOpen className="h-12 w-12 mx-auto text-slate-400" />
                    <p className="mt-4 text-slate-500 italic">No reviews yet. Be the first to review this product!</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            {product.videoUrl && (
              <TabsContent value="video" className="mt-2">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl font-semibold mb-4">Product Video</h2>
                  <div className="aspect-video rounded-lg overflow-hidden bg-slate-100">
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
              </TabsContent>
            )}
          </Tabs>
        </div>

        {/* Related Products Section */}
        <RelatedProducts products={relatedProducts} />

        {/* Preview Modal */}
        {isPreviewOpen && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="font-semibold text-lg">Sample Preview: {product.title}</h2>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsPreviewOpen(false)}
                  className="rounded-full hover:bg-slate-100"
                >
                  <span className="sr-only">Close</span>
                  <span aria-hidden className="text-2xl">×</span>
                </Button>
              </div>
              <div className="flex-1 overflow-auto p-4">
                {product.pdfSampleUrl ? (
                  <div className="h-full">
                    <PdfViewer url={product.pdfSampleUrl} maxPages={3} />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center p-8">
                      <BookOpen className="h-12 w-12 mx-auto text-slate-400" />
                      <h3 className="mt-4 font-medium">No preview available</h3>
                      <p className="mt-2 text-sm text-slate-500">
                        Preview for this product is not yet available.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4 border-t flex justify-between items-center bg-slate-50 rounded-b-xl">
                <span className="text-sm text-slate-500">Limited preview of {product.title}</span>
                <div className="space-x-2">
                  <Button variant="outline" onClick={() => setIsPreviewOpen(false)}>
                    Close
                  </Button>
                  <Button onClick={handleBuyNow} className="bg-primary hover:bg-primary/90">
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
