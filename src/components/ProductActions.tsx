
import React, { useState } from "react";
import { toast } from "sonner";
import { ShoppingCart, Download, Eye, Heart, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/products";

interface ProductActionsProps {
  product: Product;
  onPreviewOpen: () => void;
}

const ProductActions = ({ product, onPreviewOpen }: ProductActionsProps) => {
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

  return (
    <>
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
            onClick={onPreviewOpen} 
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
      
      <div className="md:hidden retro-card border-retro-accent shadow-retro-accent p-4 mb-6">
        <h3 className="retro-heading text-lg mb-3">Sample Preview</h3>
        <div className="flex items-center justify-center h-32 bg-retro-muted rounded-lg mb-3">
          <div className="text-center p-4">
            <BookOpen className="h-8 w-8 mx-auto text-retro-secondary" />
            <p className="mt-2 text-sm retro-body">Click to see sample pages</p>
          </div>
        </div>
        <button 
          onClick={onPreviewOpen} 
          className="retro-button retro-button-accent w-full"
        >
          View Preview
        </button>
      </div>
    </>
  );
};

export default ProductActions;
