
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link to={`/product/${id}`}>
        <CardContent className="p-0">
          <div className="aspect-[3/4] relative overflow-hidden">
            <img
              src={coverImage}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <Badge className="absolute top-4 right-4">{category}</Badge>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{author}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-4 pt-0">
          <span className="text-lg font-semibold">${price}</span>
          <Button variant="secondary" size="sm">View Details</Button>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProductCard;
