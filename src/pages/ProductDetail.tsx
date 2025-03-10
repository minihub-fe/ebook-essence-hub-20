
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
import { findProductById, getRelatedProducts } from "@/lib/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = findProductById(id || "");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [wishlistAdded, setWishlistAdded] = useState(false);
  
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Back Navigation */}
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Product Image and Preview */}
          <div className="space-y-8">
            <div className="aspect-[3/4] relative overflow-hidden rounded-xl border shadow-xl bg-white">
              <img
                src={product.coverImage}
                alt={product.title}
                className="object-cover w-full h-full transition-transform hover:scale-105 duration-700"
              />
              <Badge className="absolute top-4 right-4 bg-primary/90 hover:bg-primary text-white font-medium px-3 py-1">
                {product.category}
              </Badge>
              
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
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button 
                onClick={() => setIsPreviewOpen(true)} 
                variant="outline" 
                className="group bg-white hover:bg-slate-50 border-slate-200"
              >
                <Eye className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                Preview Sample
              </Button>
              <Button 
                onClick={handleAddToCart} 
                variant="outline"
                className="group bg-white hover:bg-slate-50 border-slate-200"
              >
                <ShoppingCart className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                Add to Cart
              </Button>
              <Button 
                onClick={handleBuyNow} 
                className="bg-primary hover:bg-primary/90 text-white shadow-lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Buy Now
              </Button>
            </div>
          </div>

          {/* Right Column - Product Info and Marketing Content */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="outline" className="bg-slate-50 text-slate-700">
                  {product.category}
                </Badge>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`rounded-full ${wishlistAdded ? 'text-red-500 hover:text-red-600' : 'text-slate-400 hover:text-slate-900'}`}
                  onClick={handleWishlist}
                >
                  <Heart className={`h-5 w-5 ${wishlistAdded ? 'fill-current' : ''}`} />
                </Button>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">{product.title}</h1>
              <div className="mt-3 flex items-center">
                <span className="text-2xl font-semibold text-primary mr-4">${product.price}</span>
                <div className="text-sm text-slate-600 flex items-center">
                  By <span className="font-medium text-slate-800 ml-1">{product.author}</span>
                </div>
              </div>
              
              <div className="mt-6 bg-slate-50 p-4 rounded-lg border border-slate-100">
                <h3 className="font-medium text-slate-900">What you'll get:</h3>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                    Instant digital download
                  </li>
                  <li className="flex items-center text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                    Full lifetime access
                  </li>
                  <li className="flex items-center text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                    Access on mobile and desktop
                  </li>
                </ul>
              </div>
            </div>

            {/* Product Tabs */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white border border-slate-200 p-1 rounded-lg">
                <TabsTrigger value="description" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Description
                </TabsTrigger>
                <TabsTrigger value="features" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Features
                </TabsTrigger>
                <TabsTrigger value="reviews" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Reviews
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="space-y-4">
                  <p className="text-slate-700">
                    {product.description}
                  </p>
                  
                  {product.videoUrl && (
                    <div className="mt-6">
                      <h3 className="font-medium text-slate-900 mb-3">Watch Product Overview</h3>
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
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="mt-6 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                {product.features ? (
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary mr-3">
                          <CheckCircle2 className="h-4 w-4" />
                        </span>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-500 italic">No features listed for this product.</p>
                )}
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
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
                    <p className="text-slate-500 italic">No reviews yet. Be the first to review this product!</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>

            {/* Marketing Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900">What You'll Learn</h3>
                <p className="text-sm mt-2 text-slate-700">
                  Master essential concepts and practical applications in {product.category}.
                </p>
              </div>
              <div className="p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900">Who This Is For</h3>
                <p className="text-sm mt-2 text-slate-700">
                  Perfect for beginners to advanced practitioners looking to enhance their skills.
                </p>
              </div>
              <div className="p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900">Instant Access</h3>
                <p className="text-sm mt-2 text-slate-700">
                  Download immediately after purchase and start learning right away.
                </p>
              </div>
              <div className="p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900">Support Included</h3>
                <p className="text-sm mt-2 text-slate-700">
                  Access to author updates and resource enhancements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <RelatedProducts products={relatedProducts} />

        {/* Sample Preview Modal */}
        {isPreviewOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
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
              <div className="flex-1 overflow-auto p-4 min-h-[50vh]">
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
