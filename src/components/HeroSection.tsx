
import { ArrowRight, BookOpen, Download, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="mb-24 text-center">
      <div className="max-w-5xl mx-auto px-4">
        <span className="retro-badge retro-badge-secondary inline-block mb-4 animate-fade-in">
          Premium Digital Content
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 retro-heading retro-text-gradient animate-scale-in">
          Discover Resources that Inspire & Educate
        </h1>
        
        <p className="text-lg md:text-xl text-retro-muted-foreground max-w-3xl mx-auto mb-10 font-mono animate-fade-in">
          Explore our carefully curated collection of ebooks, templates, and courses 
          designed to help you grow personally and professionally.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link to="/books" className="retro-button retro-button-primary animate-fade-in">
            Browse Library <ArrowRight className="ml-2 h-5 w-5 inline" />
          </Link>
          <Link to="/courses" className="retro-button retro-button-secondary animate-fade-in">
            Explore Courses
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          <div className="retro-card retro-card-primary p-6 flex flex-col items-center animate-fade-in">
            <BookOpen className="h-12 w-12 text-retro-primary mb-4" />
            <h3 className="retro-heading text-lg mb-2">Curated Selection</h3>
            <p className="retro-body text-sm text-center">
              Hand-picked resources of exceptional quality to ensure you get the best content
            </p>
          </div>
          
          <div className="retro-card retro-card-secondary p-6 flex flex-col items-center animate-fade-in" style={{animationDelay: "0.2s"}}>
            <Download className="h-12 w-12 text-retro-secondary mb-4" />
            <h3 className="retro-heading text-lg mb-2">Instant Downloads</h3>
            <p className="retro-body text-sm text-center">
              Get immediate access to your purchases with our seamless delivery system
            </p>
          </div>
          
          <div className="retro-card retro-card-tertiary p-6 flex flex-col items-center animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Shield className="h-12 w-12 text-retro-tertiary mb-4" />
            <h3 className="retro-heading text-lg mb-2">100% Satisfaction</h3>
            <p className="retro-body text-sm text-center">
              Love what you buy or get your money back with our 30-day guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
