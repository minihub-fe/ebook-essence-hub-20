
export interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  coverImage: string;
  author: string;
  description?: string;
  features?: string[];
  reviews?: {
    name: string;
    rating: number;
    comment: string;
  }[];
}

// This mock data will be replaced with real data from an API or database later
export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Modern Web Development",
    price: 29.99,
    category: "Development",
    coverImage: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
    author: "John Doe",
    description: "A comprehensive guide to modern web development practices, tools, and frameworks.",
    features: [
      "In-depth coverage of React, Vue, and Angular",
      "Modern CSS techniques and best practices",
      "Responsive design implementation strategies",
      "Performance optimization techniques",
      "JavaScript best practices and patterns"
    ]
  },
  {
    id: "2",
    title: "Digital Marketing Guide",
    price: 24.99,
    category: "Marketing",
    coverImage: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d",
    author: "Jane Smith",
    description: "Learn effective digital marketing strategies to grow your business and reach new customers."
  },
  {
    id: "3",
    title: "Business Strategy Templates",
    price: 39.99,
    category: "Business",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    author: "Mark Wilson",
    description: "Premium business strategy templates and frameworks for startups and established businesses."
  }
];

export const findProductById = (id: string): Product | undefined => {
  return mockProducts.find(product => product.id === id);
};
