
import { BookOpen, Sparkles, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedSection = () => {
  return (
    <section className="py-16 mb-16 bg-retro-bg-dots">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Sparkles className="h-8 w-8 text-retro-secondary mr-3" />
          <h2 className="retro-heading text-3xl md:text-4xl">Featured Collections</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Collection 1 */}
          <div className="retro-card border-retro-primary p-0 overflow-hidden hover:-translate-y-2 transition-transform duration-300">
            <div className="aspect-video relative overflow-hidden border-b-2 border-retro-primary">
              <img 
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Business Collection" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <div className="retro-badge retro-badge-primary mb-2">Most Popular</div>
                  <h3 className="text-xl font-serif font-bold">Business Essentials</h3>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm font-mono mb-4">Everything you need to start and grow your business</p>
              <Link to="/category/business" className="retro-button-primary text-sm w-full flex justify-center">
                Browse Collection
              </Link>
            </div>
          </div>
          
          {/* Collection 2 */}
          <div className="retro-card border-retro-secondary p-0 overflow-hidden hover:-translate-y-2 transition-transform duration-300">
            <div className="aspect-video relative overflow-hidden border-b-2 border-retro-secondary">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Programming Collection" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <div className="retro-badge retro-badge-secondary mb-2">Best Seller</div>
                  <h3 className="text-xl font-serif font-bold">Programming Guides</h3>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm font-mono mb-4">Master coding with our comprehensive programming resources</p>
              <Link to="/category/programming" className="retro-button-secondary text-sm w-full flex justify-center">
                Browse Collection
              </Link>
            </div>
          </div>
          
          {/* Collection 3 */}
          <div className="retro-card border-retro-tertiary p-0 overflow-hidden hover:-translate-y-2 transition-transform duration-300">
            <div className="aspect-video relative overflow-hidden border-b-2 border-retro-tertiary">
              <img 
                src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Self Development Collection" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <div className="retro-badge retro-badge-tertiary mb-2">New Arrival</div>
                  <h3 className="text-xl font-serif font-bold">Self Development</h3>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm font-mono mb-4">Transform your life with our personal growth collection</p>
              <Link to="/category/self-development" className="retro-button-tertiary text-sm w-full flex justify-center">
                Browse Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
