
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SellHero = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-lg bg-retro-secondary/10 rotate-12 animate-float hidden md:block"></div>
      <div className="absolute -bottom-20 left-10 w-40 h-40 rounded-lg bg-retro-primary/10 -rotate-12 animate-float hidden md:block" style={{animationDelay: "1.5s"}}></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 bg-white/80 px-4 py-2 rounded-full border-2 border-retro-primary/30 shadow-retro-sm">
            <span className="font-mono text-retro-primary font-semibold">✨ Digital Creator Platform</span>
          </div>
          
          <h1 className="retro-heading text-4xl md:text-6xl mb-6 bg-gradient-to-r from-retro-primary to-retro-secondary bg-clip-text text-transparent">
            Your Digital Products,<br />Your Way
          </h1>
          
          <p className="text-xl mb-10 text-retro-muted-foreground max-w-2xl mx-auto">
            Join thousands of creators earning income by selling digital products directly to their audience — no technical skills required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              to="/signup" 
              className="retro-button inline-flex items-center justify-center gap-2 px-8 py-3 bg-retro-primary text-white border-retro-primary hover:bg-retro-primary/90 hover:-translate-y-1 shadow-retro-md transition-all duration-200 text-lg font-mono"
            >
              Start Selling <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              to="#how-it-works" 
              className="retro-button bg-white border-retro-secondary text-retro-secondary hover:bg-retro-secondary/10 px-8 py-3 shadow-retro-md transition-all duration-200 text-lg font-mono"
            >
              Learn More
            </Link>
          </div>
          
          {/* Featured Offer Card */}
          <div className="mt-8 p-8 bg-white border-4 border-retro-accent rounded-xl shadow-retro-lg max-w-3xl mx-auto transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-3 text-left">
                <div className="flex items-center gap-2">
                  <span className="retro-badge bg-retro-tertiary text-white px-3 py-1 rounded-full">LIMITED TIME</span>
                  <h3 className="font-mono text-lg font-bold">0% Commission Until 2023</h3>
                </div>
                <p className="text-retro-muted-foreground">
                  For a limited time, sell your first 5 products with zero platform fees. Keep 100% of what you earn.
                </p>
              </div>
              <Link 
                to="/signup" 
                className="shrink-0 retro-button bg-retro-quaternary border-retro-quaternary text-retro-quaternary-foreground hover:bg-retro-quaternary/90 font-bold px-8 py-3 shadow-retro-md"
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
