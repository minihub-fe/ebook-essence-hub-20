
import React from "react";
import { BookOpen } from "lucide-react";
import { Product } from "@/lib/products";

interface ProductDescriptionProps {
  product: Product;
}

const ProductDescription = ({ product }: ProductDescriptionProps) => {
  return (
    <div className="retro-card border-retro-primary shadow-retro-primary p-6 mb-8 animate-fade-in">
      <div className="flex items-center mb-4">
        <BookOpen className="h-6 w-6 text-retro-primary mr-3" />
        <h2 className="retro-heading text-xl">Product Description</h2>
      </div>
      <p className="retro-body">{product.description}</p>
    </div>
  );
};

export default ProductDescription;
