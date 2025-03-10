
import React from "react";
import { Product } from "@/lib/products";
import ProductCard from "./ProductCard";
import { BookOpen } from "lucide-react";

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  if (!products.length) return null;
  
  return (
    <div className="my-12">
      <div className="flex items-center mb-6 border-b-2 border-dashed border-retro-secondary pb-4">
        <BookOpen className="h-6 w-6 text-retro-secondary mr-3" />
        <h2 className="retro-heading text-2xl">Related Products</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
