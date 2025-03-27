
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SellHero = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="retro-heading text-3xl md:text-5xl mb-6 bg-gradient-to-r from-retro-primary to-retro-secondary bg-clip-text text-transparent">
            Start Selling Your Digital Products Today
          </h1>
          <p className="text-lg md:text-xl mb-8 text-retro-muted-foreground">
            Join thousands of creators earning income by selling digital products on our platform. 
            No technical skills required—just your expertise and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="retro-button retro-button-secondary flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              to="#how-it-works" 
              className="retro-button bg-white border-retro-muted text-retro-muted-foreground hover:bg-retro-muted/10"
            >
              Learn More
            </Link>
          </div>
          
          <div className="mt-16 p-6 bg-white border-2 border-retro-secondary rounded-xl shadow-retro-md max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <span className="retro-badge retro-badge-primary">NEW</span>
                  <h3 className="font-mono text-sm font-semibold">0% Commission for New Sellers</h3>
                </div>
                <p className="text-sm text-retro-muted-foreground">
                  For a limited time, sell your first 5 products with zero platform fees.
                </p>
              </div>
              <Link 
                to="/signup" 
                className="shrink-0 retro-button retro-button-primary"
              >
                Claim Offer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellHero;
