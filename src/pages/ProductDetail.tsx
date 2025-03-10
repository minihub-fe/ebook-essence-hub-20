
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "sonner";
import { ChevronLeft, ShoppingCart, BookOpen, Download, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import { mockProducts, findProductById } from "@/lib/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = findProductById(id || "");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  
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

  const handleAddToCart = () => {
    toast.success(`${product.title} added to cart`);
  };

  const handleBuyNow = () => {
    toast.success(`Proceeding to checkout for ${product.title}`);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Back Navigation */}
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Product Image and Preview */}
          <div className="space-y-6">
            <div className="aspect-[3/4] relative overflow-hidden rounded-lg border shadow-lg">
              <img
                src={product.coverImage}
                alt={product.title}
                className="object-cover w-full h-full"
              />
              <Badge className="absolute top-4 right-4">{product.category}</Badge>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => setIsPreviewOpen(true)} 
                variant="outline" 
                className="flex-1"
              >
                <Eye className="mr-2 h-4 w-4" />
                Preview Sample
              </Button>
              <Button 
                onClick={handleAddToCart} 
                variant="secondary" 
                className="flex-1"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button 
                onClick={handleBuyNow} 
                className="flex-1"
              >
                <Download className="mr-2 h-4 w-4" />
                Buy Now
              </Button>
            </div>
          </div>

          {/* Right Column - Product Info and Marketing Content */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="mb-2">
                  {product.category}
                </Badge>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">{product.title}</h1>
              <div className="mt-2 flex items-center">
                <span className="text-lg font-semibold mr-4">${product.price}</span>
                <div className="text-sm text-muted-foreground">By {product.author}</div>
              </div>
            </div>

            {/* Product Tabs */}
            <Tabs defaultValue="description" className="w-full mt-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="space-y-4 mt-4">
                <p>
                  {product.title} is a comprehensive guide written by {product.author}. This digital product provides
                  in-depth knowledge and practical insights suitable for beginners and professionals alike.
                </p>
                <p>
                  Whether you're looking to enhance your skills or explore new concepts in {product.category}, 
                  this resource offers valuable content that you can access instantly after purchase.
                </p>
              </TabsContent>
              <TabsContent value="features" className="mt-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 bg-primary/10 p-1 rounded-full">✓</span>
                    <span>Instant digital download</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 bg-primary/10 p-1 rounded-full">✓</span>
                    <span>Comprehensive {product.category} guide</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 bg-primary/10 p-1 rounded-full">✓</span>
                    <span>Written by industry expert {product.author}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 bg-primary/10 p-1 rounded-full">✓</span>
                    <span>Regular updates included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 bg-primary/10 p-1 rounded-full">✓</span>
                    <span>Compatible with all devices</span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="reviews" className="mt-4">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">John D.</h4>
                      <div className="flex">
                        {"★★★★★".split("").map((star, i) => (
                          <span key={i} className="text-yellow-500">
                            {star}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="mt-2 text-sm">
                      Excellent resource! The content is well-structured and easy to follow.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Sarah M.</h4>
                      <div className="flex">
                        {"★★★★☆".split("").map((star, i) => (
                          <span key={i} className="text-yellow-500">
                            {star}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="mt-2 text-sm">
                      Very helpful content. Would highly recommend to anyone interested in this topic.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Marketing Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-primary/5 rounded-lg">
                <h3 className="font-semibold">What You'll Learn</h3>
                <p className="text-sm mt-2">
                  Master essential concepts and practical applications in {product.category}.
                </p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <h3 className="font-semibold">Who This Is For</h3>
                <p className="text-sm mt-2">
                  Perfect for beginners to advanced practitioners looking to enhance their skills.
                </p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <h3 className="font-semibold">Instant Access</h3>
                <p className="text-sm mt-2">
                  Download immediately after purchase and start learning right away.
                </p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <h3 className="font-semibold">Support Included</h3>
                <p className="text-sm mt-2">
                  Access to author updates and resource enhancements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Preview Modal */}
        {isPreviewOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="font-semibold text-lg">Sample Preview: {product.title}</h2>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsPreviewOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <span aria-hidden>×</span>
                </Button>
              </div>
              <div className="flex-1 overflow-auto p-4">
                <div className="aspect-[3/4] max-h-[70vh] mx-auto border shadow rounded">
                  <div className="bg-muted h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <BookOpen className="h-12 w-12 mx-auto text-muted-foreground" />
                      <h3 className="mt-4 font-medium">Sample Preview</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        This is a limited preview of {product.title}. Purchase the full version to access all content.
                      </p>
                      <div className="mt-8 p-4 border rounded bg-card">
                        <p className="italic">
                          "Introduction excerpt from {product.title} by {product.author}..."
                        </p>
                        <p className="mt-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="mt-4">
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                          in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Previewing 1 of 3 sample pages</span>
                <div className="space-x-2">
                  <Button variant="outline" onClick={() => setIsPreviewOpen(false)}>
                    Close
                  </Button>
                  <Button onClick={handleBuyNow}>
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
