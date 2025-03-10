
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ChevronLeft, CreditCard, Phone, User, MapPin, CheckCircle, Shield, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import BkashPayment from "@/components/BkashPayment";
import CreditCardPayment from "@/components/CreditCardPayment";

// Mock cart items for demonstration
const cartItems = [
  { id: "1", quantity: 1 },
  { id: "2", quantity: 1 }
];

type PaymentMethod = "bkash" | "card";

const Checkout = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<'information' | 'payment' | 'confirmation'>('information');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("bkash");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Bangladesh"
  });
  
  const subtotal = 54.98; // This would be calculated from cart items in a real app
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + tax;

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleContinueToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const { fullName, email, phoneNumber } = formData;
    if (!fullName || !email || !phoneNumber) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setCurrentStep('payment');
    toast.success("Continuing to payment");
  };

  const handlePaymentMethodChange = (method: PaymentMethod) => {
    setPaymentMethod(method);
  };

  const handlePaymentComplete = () => {
    setCurrentStep('confirmation');
    // In a real app, you would process the payment and create an order here
    toast.success("Payment completed successfully!");
  };

  const handleBackToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-retro-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <button 
          onClick={handleBackToCart}
          className="inline-flex items-center text-sm text-retro-secondary hover:text-retro-secondary/80 retro-body mb-6 border-b-2 border-dashed border-retro-secondary"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Cart
        </button>

        <div className="flex items-center mb-8">
          <CreditCard className="h-8 w-8 text-retro-secondary mr-3" />
          <h1 className="retro-heading text-3xl">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {currentStep === 'information' && (
              <div className="retro-card border-retro-primary shadow-retro-primary overflow-hidden">
                <div className="bg-retro-primary/10 p-4 border-b-2 border-retro-primary">
                  <h2 className="retro-heading text-xl text-retro-primary">Customer Information</h2>
                </div>
                <div className="p-6">
                  <form onSubmit={handleContinueToPayment}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block retro-body mb-2">Full Name *</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-retro-secondary" />
                          </div>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleFormChange}
                            className="pl-10 pr-4 py-2 w-full border-2 border-retro-secondary rounded-md retro-body"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block retro-body mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          className="px-4 py-2 w-full border-2 border-retro-secondary rounded-md retro-body"
                          placeholder="example@email.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block retro-body mb-2">Phone Number *</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-retro-secondary" />
                          </div>
                          <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleFormChange}
                            className="pl-10 pr-4 py-2 w-full border-2 border-retro-secondary rounded-md retro-body"
                            placeholder="+880 1XX-XXXXXXX"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block retro-body mb-2">Country</label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="px-4 py-2 w-full border-2 border-retro-secondary rounded-md retro-body"
                        >
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="India">India</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block retro-body mb-2">Address (Optional)</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MapPin className="h-5 w-5 text-retro-secondary" />
                          </div>
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleFormChange}
                            className="pl-10 pr-4 py-2 w-full border-2 border-retro-secondary rounded-md retro-body"
                            placeholder="Street address"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block retro-body mb-2">City (Optional)</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleFormChange}
                          className="px-4 py-2 w-full border-2 border-retro-secondary rounded-md retro-body"
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <label className="block retro-body mb-2">Postal Code (Optional)</label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleFormChange}
                          className="px-4 py-2 w-full border-2 border-retro-secondary rounded-md retro-body"
                          placeholder="Postal code"
                        />
                      </div>
                    </div>
                    <button type="submit" className="retro-button retro-button-primary w-full md:w-auto">
                      Continue to Payment
                    </button>
                  </form>
                </div>
              </div>
            )}

            {currentStep === 'payment' && (
              <div className="retro-card border-retro-primary shadow-retro-primary overflow-hidden">
                <div className="bg-retro-primary/10 p-4 border-b-2 border-retro-primary">
                  <h2 className="retro-heading text-xl text-retro-primary">Payment Method</h2>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex space-x-4 mb-6">
                      <button
                        onClick={() => handlePaymentMethodChange("bkash")}
                        className={`retro-button ${paymentMethod === "bkash" ? "retro-button-primary" : "retro-button-secondary"}`}
                      >
                        bKash
                      </button>
                      <button
                        onClick={() => handlePaymentMethodChange("card")}
                        className={`retro-button ${paymentMethod === "card" ? "retro-button-primary" : "retro-button-secondary"}`}
                      >
                        Credit Card
                      </button>
                    </div>

                    {paymentMethod === "bkash" ? (
                      <BkashPayment onComplete={handlePaymentComplete} amount={total} />
                    ) : (
                      <CreditCardPayment onComplete={handlePaymentComplete} amount={total} />
                    )}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 'confirmation' && (
              <div className="retro-card border-retro-accent shadow-retro-accent overflow-hidden">
                <div className="bg-retro-accent/10 p-4 border-b-2 border-retro-accent">
                  <h2 className="retro-heading text-xl text-retro-accent">Order Confirmation</h2>
                </div>
                <div className="p-6 text-center">
                  <div className="mb-6">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="retro-heading text-2xl mb-2">Thank You For Your Purchase!</h3>
                    <p className="retro-body mb-4">Your order has been successfully placed.</p>
                    <div className="bg-retro-muted/20 p-4 rounded-md inline-block mb-4">
                      <p className="retro-body text-lg font-bold">Order #: ORD-{Math.floor(100000 + Math.random() * 900000)}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="text-left">
                      <h4 className="retro-heading mb-2">Customer Information</h4>
                      <p className="retro-body">{formData.fullName}</p>
                      <p className="retro-body">{formData.email}</p>
                      <p className="retro-body">{formData.phoneNumber}</p>
                    </div>
                    <div className="text-left">
                      <h4 className="retro-heading mb-2">Payment Information</h4>
                      <p className="retro-body">Method: {paymentMethod === 'bkash' ? 'bKash' : 'Credit Card'}</p>
                      <p className="retro-body">Total: ${total.toFixed(2)}</p>
                      <p className="retro-body">Status: Paid</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 justify-center">
                    <Link to="/downloads" className="retro-button retro-button-primary">
                      Go to Downloads
                    </Link>
                    <Link to="/" className="retro-button retro-button-secondary">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="retro-card border-retro-secondary shadow-retro-secondary p-6 mb-6 sticky top-24">
              <h2 className="retro-heading text-xl mb-6 pb-4 border-b-2 border-dashed border-retro-secondary/50">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="space-y-2">
                  {/* Mock items */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded overflow-hidden border-2 border-retro-secondary mr-3">
                        <img 
                          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2" 
                          alt="Product" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="text-sm">
                        <p className="retro-body font-bold">Modern Web Development</p>
                        <p className="retro-body text-retro-muted-foreground">Qty: 1</p>
                      </div>
                    </div>
                    <p className="retro-body">$29.99</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded overflow-hidden border-2 border-retro-secondary mr-3">
                        <img 
                          src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d" 
                          alt="Product" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="text-sm">
                        <p className="retro-body font-bold">Digital Marketing Guide</p>
                        <p className="retro-body text-retro-muted-foreground">Qty: 1</p>
                      </div>
                    </div>
                    <p className="retro-body">$24.99</p>
                  </div>
                </div>
              </div>
              
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
              
              <div className="bg-retro-muted/20 p-3 rounded-md mb-4">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-retro-secondary mr-2 mt-0.5" />
                  <p className="text-xs retro-body">
                    All transactions are secure and encrypted. Your personal information is protected.
                  </p>
                </div>
              </div>
              
              {currentStep === 'information' && (
                <div className="flex items-center justify-center text-xs retro-body text-retro-muted-foreground">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  <p>You'll select payment method in the next step</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
