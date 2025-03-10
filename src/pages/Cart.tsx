import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ChevronLeft, ShoppingCart, Trash2, CreditCard } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { mockProducts } from "@/lib/products";

// Mock cart items for demonstration
const cartItems = [
  { id: "1", quantity: 1 },
  { id: "2", quantity: 1 }
];

const Cart = () => {
  const navigate = useNavigate();
  const items = cartItems.map(item => {
    const product = mockProducts.find(p => p.id === item.id);
    return { ...item, product };
  }).filter(item => item.product);

  const subtotal = items.reduce((sum, item) => sum + (item.product?.price || 0) * item.quantity, 0);
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + tax;

  const handleRemoveItem = (id: string) => {
    toast.success("Item removed from cart");
  };

  const handleQuantityChange = (id: string, qty: number) => {
    // This would update quantity in a real app
  };

  const handleCheckout = () => {
    navigate('/checkout');
    toast.success("Proceeding to checkout");
  };

  return (
    <div className="min-h-screen bg-retro-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <Link to="/" className="inline-flex items-center text-sm text-retro-secondary hover:text-retro-secondary/80 retro-body mb-6 border-b-2 border-dashed border-retro-secondary">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Continue Shopping
        </Link>

        <div className="flex items-center mb-8">
          <ShoppingCart className="h-8 w-8 text-retro-secondary mr-3" />
          <h1 className="retro-heading text-3xl">Your Cart</h1>
        </div>

        {items.length === 0 ? (
          <div className="retro-card border-retro-secondary shadow-retro-secondary p-8 text-center">
            <div className="mb-4">
              <ShoppingCart className="h-12 w-12 text-retro-secondary mx-auto opacity-50" />
            </div>
            <h2 className="retro-heading text-xl mb-4">Your cart is empty</h2>
            <p className="retro-body mb-6">Looks like you haven't added any digital products to your cart yet.</p>
            <Link to="/" className="retro-button retro-button-primary inline-block">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="retro-card border-retro-primary shadow-retro-primary p-0 mb-6 overflow-hidden">
                <div className="bg-retro-primary/10 p-4 border-b-2 border-retro-primary">
                  <h2 className="retro-heading text-xl text-retro-primary">Cart Items ({items.length})</h2>
                </div>
                <ul className="divide-y-2 divide-dashed divide-retro-primary/30">
                  {items.map(item => (
                    <li key={item.id} className="p-4">
                      <div className="flex gap-4">
                        <div className="w-20 h-20 overflow-hidden border-2 border-retro-secondary rounded-md flex-shrink-0">
                          <img 
                            src={item.product?.coverImage} 
                            alt={item.product?.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="retro-heading text-lg">{item.product?.title}</h3>
                              <p className="text-sm retro-body text-retro-muted-foreground">{item.product?.author}</p>
                              <Badge className="retro-badge retro-badge-secondary mt-1">{item.product?.category}</Badge>
                            </div>
                            <div className="text-right">
                              <p className="retro-heading text-lg text-retro-primary">${item.product?.price}</p>
                              <div className="flex items-center mt-2">
                                <select 
                                  value={item.quantity}
                                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                  className="retro-body bg-white border-2 border-retro-secondary rounded px-2 py-1 text-sm mr-2"
                                >
                                  {[1, 2, 3, 4, 5].map(num => (
                                    <option key={num} value={num}>
                                      {num}
                                    </option>
                                  ))}
                                </select>
                                <button 
                                  onClick={() => handleRemoveItem(item.id)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="retro-card border-retro-secondary shadow-retro-secondary p-6 mb-6 sticky top-24">
                <h2 className="retro-heading text-xl mb-6 pb-4 border-b-2 border-dashed border-retro-secondary/50">Order Summary</h2>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between retro-body">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between retro-body">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t-2 border-dashed border-retro-secondary/50 pt-2 mt-2">
                    <div className="flex justify-between font-bold retro-heading text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="retro-button retro-button-primary w-full"
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Proceed to Checkout
                </button>
                <p className="text-xs text-center mt-4 retro-body text-retro-muted-foreground">
                  Secure payment processing. All transactions are encrypted.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
