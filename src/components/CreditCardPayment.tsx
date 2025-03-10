
import React, { useState } from "react";
import { toast } from "sonner";
import { CreditCard, Calendar, Lock, Loader2 } from "lucide-react";

interface CreditCardPaymentProps {
  onComplete: () => void;
  amount: number;
}

const CreditCardPayment: React.FC<CreditCardPaymentProps> = ({ onComplete, amount }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const formatCardNumber = (value: string) => {
    // Remove non-digit characters
    const digits = value.replace(/\D/g, "");
    
    // Add a space after every 4 digits
    let formatted = "";
    for (let i = 0; i < digits.length; i += 4) {
      formatted += digits.slice(i, i + 4) + " ";
    }
    
    // Trim the trailing space and limit to 19 characters (16 digits + 3 spaces)
    return formatted.trim().slice(0, 19);
  };

  const formatExpiryDate = (value: string) => {
    // Remove non-digit characters
    const digits = value.replace(/\D/g, "");
    
    // Format as MM/YY
    if (digits.length > 2) {
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
    } else {
      return digits;
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryDate(formatExpiryDate(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate fields
    if (cardNumber.replace(/\s/g, "").length !== 16) {
      toast.error("Please enter a valid card number");
      return;
    }
    
    if (!cardName.trim()) {
      toast.error("Please enter the cardholder name");
      return;
    }
    
    if (expiryDate.length !== 5) {
      toast.error("Please enter a valid expiry date (MM/YY)");
      return;
    }
    
    if (cvv.length < 3) {
      toast.error("Please enter a valid CVV code");
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onComplete();
    }, 2000);
  };

  return (
    <div className="border-2 border-retro-primary rounded-md p-4 bg-retro-primary/5">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-dashed border-retro-primary/50">
        <div className="flex items-center">
          <CreditCard className="h-6 w-6 mr-2 text-retro-primary" />
          <span className="font-bold text-retro-primary">Credit Card Payment</span>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold">Amount:</p>
          <p className="font-bold text-lg text-retro-primary">${amount.toFixed(2)}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Card Number</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CreditCard className="h-5 w-5 text-retro-primary" />
              </div>
              <input
                type="text"
                value={cardNumber}
                onChange={handleCardNumberChange}
                className="pl-10 pr-4 py-2 w-full border-2 border-retro-primary rounded-md focus:outline-none"
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm mb-2">Cardholder Name</label>
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className="px-4 py-2 w-full border-2 border-retro-primary rounded-md focus:outline-none"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">Expiry Date</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-4 w-4 text-retro-primary" />
                </div>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
                  className="pl-10 pr-4 py-2 w-full border-2 border-retro-primary rounded-md focus:outline-none"
                  placeholder="MM/YY"
                  maxLength={5}
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm mb-2">CVV</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-retro-primary" />
                </div>
                <input
                  type="password"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                  className="pl-10 pr-4 py-2 w-full border-2 border-retro-primary rounded-md focus:outline-none"
                  placeholder="123"
                  maxLength={4}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        
        <button 
          type="submit" 
          className="w-full retro-button retro-button-primary mt-6 flex items-center justify-center disabled:opacity-50"
          disabled={isProcessing}
        >
          {isProcessing ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            "Pay Now"
          )}
        </button>
      </form>

      <div className="mt-4 pt-4 border-t border-dashed border-retro-primary/50">
        <div className="flex items-center justify-center space-x-2">
          <img src="https://www.logo.wine/a/logo/Visa_Inc./Visa_Inc.-Logo.wine.svg" alt="Visa" className="h-8" />
          <img src="https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg" alt="Mastercard" className="h-8" />
          <img src="https://www.logo.wine/a/logo/American_Express/American_Express-Logo.wine.svg" alt="Amex" className="h-8" />
        </div>
        <p className="text-xs text-center text-gray-500 mt-2">
          Your card information is encrypted and securely processed.
        </p>
      </div>
    </div>
  );
};

export default CreditCardPayment;
