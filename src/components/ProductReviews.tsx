
import React from "react";
import { Star, BookOpen } from "lucide-react";
import { Product } from "@/lib/products";

interface ProductReviewsProps {
  product: Product;
}

const ProductReviews = ({ product }: ProductReviewsProps) => {
  return (
    <div className="retro-card border-retro-secondary shadow-retro-secondary p-6 mb-8 animate-fade-in">
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
  );
};

export default ProductReviews;
