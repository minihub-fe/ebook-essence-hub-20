
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 relative overflow-hidden">
      {/* Background with color and decorative elements */}
      <div className="absolute inset-0 bg-retro-accent/90 -z-10 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 rotate-12 border-4 border-white/20 rounded-lg"></div>
        <div className="absolute top-20 right-10 w-20 h-20 -rotate-12 border-4 border-white/20 rounded-lg"></div>
        <div className="absolute bottom-10 left-1/4 w-32 h-32 rotate-45 border-4 border-white/20 rounded-lg"></div>
        <div className="absolute -bottom-10 right-1/4 w-40 h-40 -rotate-12 border-4 border-white/20 rounded-lg"></div>
      </div>
      
      {/* Section Content */}
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="retro-heading text-3xl md:text-5xl mb-4 text-retro-foreground">Turn Your Ideas Into Income</h2>
          <p className="text-retro-foreground/80 text-lg">
            A simple path to selling your digital products. No technical skills required.
          </p>
        </div>

        {/* Process Flow */}
        <div className="bg-white/90 p-8 md:p-12 rounded-2xl max-w-5xl mx-auto shadow-retro-lg border-4 border-retro-primary/20 mb-12">
          <div className="flex flex-col items-center">
            {/* Process steps with icons and connecting lines */}
            <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between relative mb-10 mt-6">
              {/* Process Steps */}
              <div className="flex flex-col md:flex-row justify-between w-full relative z-10">
                {/* Step 1: Create Account */}
                <div className="flex flex-col items-center text-center mb-12 md:mb-0">
                  <div className="w-20 h-20 rounded-full bg-retro-primary flex items-center justify-center shadow-retro-sm mb-4">
                    <span className="font-mono text-white text-2xl font-bold">1</span>
                  </div>
                  <h3 className="font-mono font-bold text-lg mb-2">Create Account</h3>
                  <p className="text-retro-muted-foreground text-sm max-w-[180px]">Sign up in less than 2 minutes</p>
                </div>

                {/* Step 2: Upload Product */}
                <div className="flex flex-col items-center text-center mb-12 md:mb-0">
                  <div className="w-20 h-20 rounded-full bg-retro-secondary flex items-center justify-center shadow-retro-sm mb-4">
                    <span className="font-mono text-white text-2xl font-bold">2</span>
                  </div>
                  <h3 className="font-mono font-bold text-lg mb-2">Upload Product</h3>
                  <p className="text-retro-muted-foreground text-sm max-w-[180px]">Upload your files and set pricing</p>
                </div>

                {/* Step 3: Share & Sell */}
                <div className="flex flex-col items-center text-center mb-12 md:mb-0">
                  <div className="w-20 h-20 rounded-full bg-retro-tertiary flex items-center justify-center shadow-retro-sm mb-4">
                    <span className="font-mono text-white text-2xl font-bold">3</span>
                  </div>
                  <h3 className="font-mono font-bold text-lg mb-2">Share & Sell</h3>
                  <p className="text-retro-muted-foreground text-sm max-w-[180px]">Share your product link anywhere</p>
                </div>

                {/* Step 4: Get Paid */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-retro-quaternary flex items-center justify-center shadow-retro-sm mb-4">
                    <span className="font-mono text-retro-foreground text-2xl font-bold">4</span>
                  </div>
                  <h3 className="font-mono font-bold text-lg mb-2">Get Paid</h3>
                  <p className="text-retro-muted-foreground text-sm max-w-[180px]">Receive payments directly to your account</p>
                </div>
              </div>

              {/* Connecting Path (Visible on medium screens and up) */}
              <div className="absolute top-10 left-0 w-full hidden md:block">
                <svg className="w-full" height="6" viewBox="0 0 800 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3H800" stroke="url(#paint0_linear)" strokeWidth="5" strokeDasharray="10 5"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="0" y1="3" x2="800" y2="3" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#9b87f5"/>
                      <stop offset="0.33" stopColor="#D946EF"/>
                      <stop offset="0.66" stopColor="#F97316"/>
                      <stop offset="1" stopColor="#FEF7CD"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Success Callout */}
            <div className="w-full max-w-2xl bg-gradient-to-r from-retro-primary/10 to-retro-secondary/10 rounded-xl p-6 border-2 border-retro-primary/20 animate-pulse-slow">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="bg-white rounded-full p-3 shadow-retro-sm">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#9b87f5" strokeWidth="2"/>
                    <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-mono text-lg font-bold mb-1">Repeat & Scale</h4>
                  <p className="text-retro-muted-foreground text-sm">
                    Sell to customers worldwide. Add more products. Grow your digital business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            to="/signup" 
            className="retro-button retro-button-primary inline-flex items-center gap-2 px-6 py-3 text-lg"
          >
            Start Selling Today <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
