
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Clock, Verified, Users } from "lucide-react";
import { Product } from "@/lib/products";

interface ProductHeaderProps {
  product: Product;
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
  return (
    <div className="mb-4">
      <Badge className="retro-badge retro-badge-secondary mb-4">{product.category}</Badge>
      <h1 className="retro-heading text-3xl md:text-4xl mb-2">{product.title}</h1>
      <div className="flex items-center text-sm mb-4">
        <span className="retro-body">By <span className="font-bold text-retro-secondary">{product.author}</span></span>
      </div>
      
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="flex items-center bg-white text-retro-primary rounded-full px-4 py-1 border border-retro-primary">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm retro-body">Instant Access</span>
        </div>
        <div className="flex items-center bg-white text-retro-secondary rounded-full px-4 py-1 border border-retro-secondary">
          <Verified className="w-4 h-4 mr-2" />
          <span className="text-sm retro-body">Verified Quality</span>
        </div>
        <div className="flex items-center bg-white text-retro-primary rounded-full px-4 py-1 border border-retro-primary">
          <Users className="w-4 h-4 mr-2" />
          <span className="text-sm retro-body">1000+ Users</span>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
