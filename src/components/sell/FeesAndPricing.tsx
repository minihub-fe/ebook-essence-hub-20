
import React from "react";
import { Check, X } from "lucide-react";

const FeesAndPricing = () => {
  const tiers = [
    {
      name: "Basic",
      fee: "12%",
      description: "Perfect for beginners just starting out",
      features: [
        "Unlimited product listings",
        "Basic analytics",
        "Standard payment processing",
        "Email support"
      ],
      limitations: [
        "No promotional features",
        "No custom domain"
      ]
    },
    {
      name: "Pro",
      fee: "8%",
      description: "For established creators with growing audiences",
      features: [
        "Unlimited product listings",
        "Advanced analytics",
        "Priority payment processing",
        "Priority support",
        "Promotional features",
        "Custom checkout experience"
      ],
      limitations: []
    },
    {
      name: "Enterprise",
      fee: "5%",
      description: "For high-volume sellers and businesses",
      features: [
        "Unlimited product listings",
        "Enterprise analytics",
        "Dedicated account manager",
        "Custom integration options",
        "Promotional features",
        "Custom domain & branding",
        "API access"
      ],
      limitations: []
    }
  ];

  return (
    <section className="py-16 bg-retro-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="retro-heading text-2xl md:text-4xl mb-4">Simple, Transparent Pricing</h2>
          <p className="text-retro-muted-foreground max-w-2xl mx-auto">
            No hidden fees, just straightforward commission rates based on your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`bg-white border-2 ${index === 1 ? 'border-retro-primary' : 'border-retro-secondary'} rounded-xl p-6 shadow-retro-sm relative ${index === 1 ? 'transform md:-translate-y-4' : ''}`}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-retro-primary text-white px-4 py-1 rounded-full text-sm font-mono">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="font-mono font-bold text-xl mb-2">{tier.name}</h3>
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className="text-3xl font-bold">{tier.fee}</span>
                  <span className="text-sm text-retro-muted-foreground">commission per sale</span>
                </div>
                <p className="text-sm text-retro-muted-foreground">{tier.description}</p>
              </div>
              
              <div className="space-y-3 mb-6">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-retro-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                
                {tier.limitations.map((limitation, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <X className="h-5 w-5 text-retro-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-retro-muted-foreground">{limitation}</span>
                  </div>
                ))}
              </div>
              
              <button 
                className={`w-full retro-button ${index === 1 ? 'retro-button-primary' : 'retro-button-secondary'}`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white border-2 border-retro-secondary rounded-xl p-6 max-w-3xl mx-auto">
          <h3 className="font-mono font-bold text-lg mb-4 text-center">Payment Processing</h3>
          <p className="text-retro-muted-foreground text-center mb-4">
            In addition to platform fees, a standard payment processing fee of 2.9% + $0.30 applies to all transactions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-retro-muted rounded-lg">
              <p className="font-mono font-bold mb-1">Example: $20 Product (Basic Plan)</p>
              <p className="text-sm text-retro-muted-foreground">
                Platform Fee: $2.40 (12%)<br />
                Payment Processing: $0.88<br />
                You Receive: $16.72
              </p>
            </div>
            <div className="text-center p-4 bg-retro-muted rounded-lg">
              <p className="font-mono font-bold mb-1">Example: $20 Product (Pro Plan)</p>
              <p className="text-sm text-retro-muted-foreground">
                Platform Fee: $1.60 (8%)<br />
                Payment Processing: $0.88<br />
                You Receive: $17.52
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeesAndPricing;
