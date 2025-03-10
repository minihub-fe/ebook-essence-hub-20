
import React from "react";
import { Product } from "@/lib/products";
import ProductCard from "./ProductCard";

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  if (!products.length) return null;
  
  return (
    <div className="mt-16 border-t pt-12">
      <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
