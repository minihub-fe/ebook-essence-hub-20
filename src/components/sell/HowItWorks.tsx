
import React from "react";
import { Upload, ShoppingBag, CreditCard, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-8 w-8 text-retro-primary" />,
      title: "Upload Your Product",
      description: "Create your listing and upload your digital product - ebooks, templates, courses, or software."
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-retro-primary" />,
      title: "Set Your Price",
      description: "Choose your pricing strategy - one-time purchases, subscriptions, or even pay-what-you-want."
    },
    {
      icon: <CreditCard className="h-8 w-8 text-retro-primary" />,
      title: "Get Paid",
      description: "Receive payments directly to your account when customers purchase your products."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-retro-primary" />,
      title: "Grow Your Business",
      description: "Use our analytics to track performance and optimize your product offerings."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-retro-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="retro-heading text-2xl md:text-4xl mb-4">How It Works</h2>
          <p className="text-retro-muted-foreground max-w-2xl mx-auto">
            Selling on our platform is simple and straightforward. Follow these steps to start earning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white border-2 border-retro-secondary rounded-xl p-6 h-full shadow-retro-sm flex flex-col items-center text-center relative z-10 hover:-translate-y-1 transition-transform">
                <div className="bg-retro-muted w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="font-mono font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-retro-muted-foreground">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#7E69AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
