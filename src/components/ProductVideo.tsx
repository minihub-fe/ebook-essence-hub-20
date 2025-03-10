
import React from "react";
import { Play } from "lucide-react";
import { Product } from "@/lib/products";

interface ProductVideoProps {
  product: Product;
}

const ProductVideo = ({ product }: ProductVideoProps) => {
  if (!product.videoUrl) return null;
  
  return (
    <div className="retro-card border-retro-primary shadow-retro-primary p-6 mb-8 animate-fade-in">
      <div className="flex items-center mb-6">
        <Play className="h-6 w-6 text-retro-primary mr-3" />
        <h2 className="retro-heading text-xl">Product Video</h2>
      </div>
      
      <div className="aspect-video rounded-lg overflow-hidden bg-black border-2 border-retro-primary">
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
  );
};

export default ProductVideo;
