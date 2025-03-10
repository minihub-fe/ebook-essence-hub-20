
import React, { useState } from "react";
import { toast } from "sonner";
import { Phone, Loader2, AlertCircle } from "lucide-react";

interface BkashPaymentProps {
  onComplete: () => void;
  amount: number;
}

const BkashPayment: React.FC<BkashPaymentProps> = ({ onComplete, amount }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [pin, setPin] = useState("");
  const [stage, setStage] = useState<"phone" | "otp" | "pin" | "processing">("phone");
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) {
      toast.error("Please enter your bKash account number");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call to bKash
    setTimeout(() => {
      setIsLoading(false);
      setStage("otp");
      toast.success("OTP sent to your phone number");
    }, 1500);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp.trim() || otp.length < 4) {
      toast.error("Please enter a valid OTP");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call to bKash
    setTimeout(() => {
      setIsLoading(false);
      setStage("pin");
    }, 1500);
  };

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin.trim() || pin.length < 4) {
      toast.error("Please enter a valid PIN");
      return;
    }
    
    setIsLoading(true);
    setStage("processing");
    
    // Simulate API call to bKash
    setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 2000);
  };

  return (
    <div className="border-2 border-pink-500 rounded-md p-4 bg-pink-50">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-dashed border-pink-300">
        <div className="flex items-center">
          <img 
            src="https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg" 
            alt="bKash Logo" 
            className="h-10 w-10 mr-2"
          />
          <span className="font-bold text-pink-700">bKash Payment</span>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold">Amount:</p>
          <p className="font-bold text-lg text-pink-700">${amount.toFixed(2)}</p>
        </div>
      </div>

      {stage === "phone" && (
        <form onSubmit={handlePhoneSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-2">bKash Account Number</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-pink-500" />
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border-2 border-pink-300 rounded-md focus:border-pink-500 focus:outline-none"
                placeholder="01XXXXXXXXX"
                required
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">Enter the bKash account number registered with your phone</p>
          </div>
          <button 
            type="submit" 
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-md flex items-center justify-center disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              "Send OTP"
            )}
          </button>
        </form>
      )}

      {stage === "otp" && (
        <form onSubmit={handleOtpSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-2">Enter OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="px-4 py-2 w-full border-2 border-pink-300 rounded-md focus:border-pink-500 focus:outline-none text-center text-lg tracking-widest"
              placeholder="• • • •"
              maxLength={4}
              required
            />
            <p className="text-xs text-gray-500 mt-1">Enter the 4-digit OTP sent to your bKash mobile number</p>
          </div>
          <button 
            type="submit" 
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-md flex items-center justify-center disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Verifying...
              </>
            ) : (
              "Verify OTP"
            )}
          </button>
        </form>
      )}

      {stage === "pin" && (
        <form onSubmit={handlePinSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-2">Enter bKash PIN</label>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="px-4 py-2 w-full border-2 border-pink-300 rounded-md focus:border-pink-500 focus:outline-none text-center text-lg"
              placeholder="• • • •"
              maxLength={4}
              required
            />
            <div className="flex items-center mt-1">
              <AlertCircle className="h-3 w-3 text-gray-500 mr-1" />
              <p className="text-xs text-gray-500">Your PIN is secure and will not be stored</p>
            </div>
          </div>
          <button 
            type="submit" 
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-md flex items-center justify-center disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              "Confirm Payment"
            )}
          </button>
        </form>
      )}

      {stage === "processing" && (
        <div className="text-center py-8">
          <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-pink-600" />
          <h3 className="text-lg font-bold mb-2">Processing Your Payment</h3>
          <p className="text-sm text-gray-600">Please wait while we confirm your payment with bKash...</p>
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-dashed border-pink-300">
        <div className="flex items-start">
          <img 
            src="https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg" 
            alt="bKash Security" 
            className="h-5 w-5 mr-2"
          />
          <p className="text-xs text-gray-500">
            This is a secure bKash payment. Your information is encrypted and securely processed by bKash.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BkashPayment;
