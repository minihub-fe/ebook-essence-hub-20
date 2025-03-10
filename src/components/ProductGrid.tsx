
import ProductCard from "./ProductCard";

// Temporary mock data - will be replaced with real data later
const mockProducts = [
  {
    id: "1",
    title: "Modern Web Development",
    price: 29.99,
    category: "Development",
    coverImage: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
    author: "John Doe"
  },
  {
    id: "2",
    title: "Digital Marketing Guide",
    price: 24.99,
    category: "Marketing",
    coverImage: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d",
    author: "Jane Smith"
  },
  {
    id: "3",
    title: "Business Strategy Templates",
    price: 39.99,
    category: "Business",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    author: "Mark Wilson"
  }
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
