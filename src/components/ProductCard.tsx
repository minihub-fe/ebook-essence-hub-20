
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  category: string;
  coverImage: string;
  author: string;
}

const ProductCard = ({ id, title, price, category, coverImage, author }: ProductCardProps) => {
  return (
    <div className="retro-card retro-card-primary group overflow-hidden transition-all duration-300 hover:-translate-y-2">
      <Link to={`/product/${id}`}>
        <div className="aspect-[3/4] relative overflow-hidden border-b-2 border-retro-primary">
          <img
            src={coverImage}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="retro-badge retro-badge-secondary absolute top-4 right-4">{category}</Badge>
        </div>
        <div className="p-4">
          <h3 className="retro-heading text-lg font-bold line-clamp-1">{title}</h3>
          <p className="text-sm retro-body text-retro-muted-foreground">{author}</p>
        </div>
        <div className="flex justify-between items-center p-4 pt-0 border-t border-dashed border-retro-primary/50">
          <span className="text-lg font-bold text-retro-primary retro-heading">${price}</span>
          <button className="retro-button retro-button-secondary px-3 py-1 text-sm flex items-center">
            <Eye className="h-4 w-4 mr-1" /> View
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
