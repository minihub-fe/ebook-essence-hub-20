import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CreditCard, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  const confirmOrder = () => {
    // In a real app, you would process the payment and handle order confirmation
    setIsOrderConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-retro-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="flex items-center mb-8">
          <Link to="/cart" className="font-mono text-sm text-retro-secondary hover:underline flex items-center mr-4">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Cart
          </Link>
          <h1 className="retro-heading text-3xl">Checkout</h1>
        </div>

        {isOrderConfirmed ? (
          <div className="text-center py-12">
            <div className="retro-card border-retro-secondary p-8 max-w-md mx-auto">
              <h2 className="text-xl font-serif mb-4">Order Confirmed!</h2>
              <p className="font-mono text-retro-muted-foreground mb-6">
                Thank you for your order. You will receive an email with the order details and tracking information.
              </p>
              <Link to="/purchases" className="retro-button retro-button-secondary">
                View Purchases
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border-2 border-retro-secondary shadow-retro-sm p-6">
                <h2 className="font-serif font-bold text-xl mb-4 border-b border-dashed border-retro-secondary/50 pb-2">
                  Payment Information
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="creditCard"
                        checked={paymentMethod === "creditCard"}
                        onChange={() => handlePaymentMethodChange("creditCard")}
                        className="mr-2 h-5 w-5 text-retro-primary focus:ring-retro-primary"
                      />
                      <span className="font-mono">Credit Card</span>
                      <CreditCard className="h-4 w-4 ml-1 text-retro-secondary" />
                    </label>
                  </div>

                  <div>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="paypal"
                        checked={paymentMethod === "paypal"}
                        onChange={() => handlePaymentMethodChange("paypal")}
                        className="mr-2 h-5 w-5 text-retro-primary focus:ring-retro-primary"
                      />
                      <span className="font-mono">PayPal</span>
                    </label>
                  </div>

                  {paymentMethod === "creditCard" && (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-mono mb-1">Card Number</label>
                        <input
                          type="text"
                          placeholder="Enter card number"
                          className="w-full px-4 py-2 border-2 border-retro-secondary rounded font-mono focus:outline-none focus:ring-2 focus:ring-retro-secondary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-mono mb-1">Expiration Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-2 border-2 border-retro-secondary rounded font-mono focus:outline-none focus:ring-2 focus:ring-retro-secondary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-mono mb-1">CVV</label>
                        <input
                          type="text"
                          placeholder="CVV"
                          className="w-full px-4 py-2 border-2 border-retro-secondary rounded font-mono focus:outline-none focus:ring-2 focus:ring-retro-secondary"
                        />
                      </div>
                    </div>
                  )}
                </div>
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
                    <span>$79.98</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (10%)</span>
                    <span>$7.99</span>
                  </div>
                  <div className="border-t border-dashed border-retro-primary/50 pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-retro-primary">$87.97</span>
                    </div>
                  </div>
                </div>
                <button onClick={confirmOrder} className="retro-button retro-button-primary w-full justify-center flex items-center">
                  <Lock className="h-4 w-4 mr-2" /> Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
