
import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SellerCTA = () => {
  const benefits = [
    "No technical skills required",
    "Get set up in minutes",
    "Global audience of buyers",
    "Secure payment processing",
    "Powerful analytics tools",
    "Marketing and promotion help"
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white border-2 border-retro-primary rounded-xl overflow-hidden shadow-retro-md flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-10">
            <h2 className="retro-heading text-2xl md:text-3xl mb-6">
              Ready to Start Selling?
            </h2>
            <p className="text-retro-muted-foreground mb-6">
              Join thousands of creators who are turning their knowledge and digital assets into income streams.
            </p>
            
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-retro-primary shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Link 
              to="/signup" 
              className="retro-button retro-button-primary inline-flex items-center gap-2"
            >
              Create Your Seller Account <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="md:w-1/2 bg-retro-bg-dots p-8 md:p-10 bg-gradient-to-br from-retro-primary/5 to-retro-secondary/10">
            <div className="bg-white border-2 border-retro-secondary rounded-xl p-6 shadow-retro-sm">
              <h3 className="font-mono font-bold text-lg mb-4">Influencer Program</h3>
              <p className="text-sm text-retro-muted-foreground mb-4">
                Are you a content creator with an established audience on YouTube, Instagram, or other platforms? Join our Influencer Program for additional benefits:
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="text-sm flex items-start gap-2">
                  <span className="text-retro-primary font-bold">•</span>
                  <span>Reduced commission rates (as low as 3%)</span>
                </li>
                <li className="text-sm flex items-start gap-2">
                  <span className="text-retro-primary font-bold">•</span>
                  <span>Featured placement in marketplace</span>
                </li>
                <li className="text-sm flex items-start gap-2">
                  <span className="text-retro-primary font-bold">•</span>
                  <span>Co-marketing opportunities</span>
                </li>
                <li className="text-sm flex items-start gap-2">
                  <span className="text-retro-primary font-bold">•</span>
                  <span>Dedicated account manager</span>
                </li>
              </ul>
              
              <Link 
                to="/influencer-program" 
                className="text-sm text-retro-primary font-bold inline-flex items-center hover:underline"
              >
                Learn more about our Influencer Program <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </div>
            
            <div className="mt-6 bg-white border-2 border-retro-secondary rounded-xl p-6 shadow-retro-sm">
              <h3 className="font-mono font-bold text-lg mb-4">Consultation Services</h3>
              <p className="text-sm text-retro-muted-foreground mb-4">
                Offer consultation sessions or services alongside your digital products:
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="text-sm flex items-start gap-2">
                  <span className="text-retro-primary font-bold">•</span>
                  <span>Schedule one-on-one sessions</span>
                </li>
                <li className="text-sm flex items-start gap-2">
                  <span className="text-retro-primary font-bold">•</span>
                  <span>Set your own availability and rates</span>
                </li>
                <li className="text-sm flex items-start gap-2">
                  <span className="text-retro-primary font-bold">•</span>
                  <span>Integrated video conferencing tools</span>
                </li>
              </ul>
              
              <Link 
                to="/consultations" 
                className="text-sm text-retro-primary font-bold inline-flex items-center hover:underline"
              >
                Set up consultation services <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerCTA;
