
import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ClipboardList, Download, Eye, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { mockProducts } from "@/lib/products";

// Mock purchase history for demonstration
const purchaseHistory = [
  { 
    id: "order-123", 
    date: "2023-09-15", 
    total: 29.99,
    status: "Completed",
    items: [{ productId: "1", price: 29.99 }]
  },
  { 
    id: "order-456", 
    date: "2023-08-22", 
    total: 39.99,
    status: "Completed",
    items: [{ productId: "3", price: 39.99 }]
  },
  { 
    id: "order-789", 
    date: "2023-07-10", 
    total: 24.99,
    status: "Completed",
    items: [{ productId: "2", price: 24.99 }]
  }
];

const Purchases = () => {
  const getBadgeColor = (status: string) => {
    switch(status) {
      case "Completed": return "retro-badge-primary";
      case "Processing": return "retro-badge-secondary";
      case "Refunded": return "retro-badge-accent";
      default: return "retro-badge-secondary";
    }
  };

  const getProductById = (id: string) => {
    return mockProducts.find(p => p.id === id);
  };

  return (
    <div className="min-h-screen bg-retro-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <Link to="/" className="inline-flex items-center text-sm text-retro-secondary hover:text-retro-secondary/80 retro-body mb-6 border-b-2 border-dashed border-retro-secondary">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Store
        </Link>

        <div className="flex items-center mb-8">
          <ClipboardList className="h-8 w-8 text-retro-secondary mr-3" />
          <h1 className="retro-heading text-3xl">Purchase History</h1>
        </div>

        {purchaseHistory.length === 0 ? (
          <div className="retro-card border-retro-secondary shadow-retro-secondary p-8 text-center">
            <div className="mb-4">
              <ClipboardList className="h-12 w-12 text-retro-secondary mx-auto opacity-50" />
            </div>
            <h2 className="retro-heading text-xl mb-4">No purchase history</h2>
            <p className="retro-body mb-6">You haven't made any purchases yet.</p>
            <Link to="/" className="retro-button retro-button-primary inline-block">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {purchaseHistory.map(order => (
              <div key={order.id} className="retro-card border-retro-secondary shadow-retro-secondary overflow-hidden">
                <div className="p-4 border-b-2 border-dashed border-retro-secondary/50 bg-retro-muted flex flex-wrap justify-between items-center gap-4">
                  <div>
                    <p className="retro-heading text-sm">Order #{order.id}</p>
                    <p className="text-xs retro-body">
                      {new Date(order.date).toLocaleDateString()} at {new Date(order.date).toLocaleTimeString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={`retro-badge ${getBadgeColor(order.status)}`}>
                      {order.status}
                    </Badge>
                    <span className="retro-heading text-lg">${order.total.toFixed(2)}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="retro-heading text-md mb-4">Items Purchased</h3>
                  <div className="space-y-4">
                    {order.items.map((item, index) => {
                      const product = getProductById(item.productId);
                      return (
                        <div key={index} className="flex flex-col sm:flex-row justify-between border-b border-dashed border-retro-secondary/30 pb-4 last:border-b-0 last:pb-0">
                          <div className="flex gap-4 mb-3 sm:mb-0">
                            {product && (
                              <div className="w-16 h-16 overflow-hidden border-2 border-retro-primary rounded-md flex-shrink-0">
                                <img 
                                  src={product.coverImage} 
                                  alt={product.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <div>
                              <h4 className="retro-heading text-base">{product?.title || 'Product'}</h4>
                              <p className="text-xs retro-body text-retro-muted-foreground">{product?.author || 'Unknown'}</p>
                              <p className="text-sm retro-heading mt-1">${item.price.toFixed(2)}</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Link to={`/product/${item.productId}`}>
                              <button className="retro-button retro-button-secondary text-xs py-1 px-3">
                                <Eye className="h-3.5 w-3.5 mr-1" /> View
                              </button>
                            </Link>
                            <Link to="/downloads">
                              <button className="retro-button retro-button-primary text-xs py-1 px-3">
                                <Download className="h-3.5 w-3.5 mr-1" /> Download
                              </button>
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="bg-retro-muted p-4 border-t-2 border-dashed border-retro-secondary/50 flex justify-between items-center">
                  <div className="text-xs retro-body">Payment Method: Credit Card (•••• 4242)</div>
                  <button className="retro-button-secondary text-xs py-1 px-3">
                    <Package className="h-3.5 w-3.5 mr-1" /> Order Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Purchases;
