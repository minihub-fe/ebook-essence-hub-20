
import React from "react";
import { Award, CheckCircle2 } from "lucide-react";
import { Product } from "@/lib/products";

interface ProductFeaturesProps {
  product: Product;
}

const ProductFeatures = ({ product }: ProductFeaturesProps) => {
  return (
    <div className="retro-card border-retro-primary shadow-retro-primary p-6 mb-8 animate-fade-in">
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
  );
};

export default ProductFeatures;
