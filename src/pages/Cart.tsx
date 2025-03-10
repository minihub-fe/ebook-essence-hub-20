
import { useState } from "react";
import { mockProducts } from "@/lib/products";
import { Link } from "react-router-dom";
import { Trash2, ShoppingCart, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cart = () => {
  // In a real app, this would come from your cart state management
  const [cartItems, setCartItems] = useState(
    mockProducts.slice(0, 2).map(product => ({
      ...product,
      quantity: 1
    }))
  );

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems(
      cartItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-retro-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="flex items-center mb-8">
          <ShoppingCart className="h-6 w-6 text-retro-secondary mr-3" />
          <h1 className="retro-heading text-3xl">Your Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="retro-card border-retro-secondary p-8 max-w-md mx-auto">
              <h2 className="text-xl font-serif mb-4">Your cart is empty</h2>
              <p className="font-mono text-retro-muted-foreground mb-6">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link to="/" className="retro-button retro-button-secondary">
                Start Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border-2 border-retro-secondary shadow-retro-sm mb-6">
                <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b border-dashed border-retro-secondary/50 font-mono text-sm text-retro-muted-foreground">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-center">Subtotal</div>
                </div>

                {cartItems.map((item) => (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b border-dashed border-retro-secondary/50 items-center">
                    <div className="col-span-6 flex items-center">
                      <div className="w-16 h-20 bg-retro-muted rounded mr-4 overflow-hidden border border-retro-secondary">
                        <img src={item.coverImage} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-serif font-bold">{item.title}</h3>
                        <p className="text-xs font-mono text-retro-muted-foreground">{item.category}</p>
                      </div>
                    </div>
                    <div className="col-span-2 text-center font-mono">
                      ${item.price.toFixed(2)}
                    </div>
                    <div className="col-span-2 flex justify-center">
                      <div className="flex items-center border-2 border-retro-secondary rounded-md overflow-hidden">
                        <button 
                          className="px-2 py-1 bg-retro-muted hover:bg-retro-secondary hover:text-white transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="px-3 py-1 font-mono">{item.quantity}</span>
                        <button 
                          className="px-2 py-1 bg-retro-muted hover:bg-retro-secondary hover:text-white transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-span-1 md:text-center font-mono font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <div className="col-span-1 flex justify-end md:justify-center">
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-retro-secondary hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between">
                <Link to="/" className="font-mono text-sm text-retro-secondary hover:underline flex items-center">
                  <ArrowRight className="h-4 w-4 mr-1 rotate-180" /> Continue Shopping
                </Link>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border-2 border-retro-primary shadow-retro-sm shadow-retro-primary p-6">
                <h2 className="font-serif font-bold text-xl mb-4 border-b border-dashed border-retro-primary/50 pb-2">
                  Order Summary
                </h2>
                <div className="space-y-3 font-mono mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-dashed border-retro-primary/50 pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-retro-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Link to="/checkout" className="retro-button retro-button-primary w-full justify-center">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
