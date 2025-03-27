
import React from "react";
import { Star } from "lucide-react";

const SellerSuccess = () => {
  const successStories = [
    {
      name: "Sarah J.",
      role: "UX Designer",
      product: "Design Templates",
      quote: "I've been able to turn my design skills into a steady stream of passive income. The platform makes it incredibly easy to manage my digital products.",
      earnings: "$2,400/month",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Mark T.",
      role: "Software Developer",
      product: "Code Libraries",
      quote: "As a developer, I wanted a simple way to monetize my code libraries. This platform provided exactly that, with minimal setup time and maximum returns.",
      earnings: "$3,800/month",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Elena K.",
      role: "Content Creator",
      product: "Online Courses",
      quote: "The analytics tools have helped me understand exactly what my audience wants. My course sales have tripled since I started using this platform.",
      earnings: "$5,200/month",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="retro-heading text-2xl md:text-4xl mb-4">Success Stories</h2>
          <p className="text-retro-muted-foreground max-w-2xl mx-auto">
            See how creators like you are building successful businesses selling digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white border-2 border-retro-quaternary rounded-xl overflow-hidden shadow-retro-sm">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-retro-quaternary"
                  />
                  <div>
                    <h3 className="font-mono font-bold">{story.name}</h3>
                    <p className="text-xs text-retro-muted-foreground">{story.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-retro-quaternary text-retro-quaternary" />
                  ))}
                </div>
                
                <p className="text-sm mb-4 italic">"{story.quote}"</p>
                
                <div className="flex justify-between items-center border-t border-dashed border-retro-quaternary/30 pt-4">
                  <div className="text-xs text-retro-muted-foreground">
                    <span>Product: </span>
                    <span className="font-bold">{story.product}</span>
                  </div>
                  <div className="bg-retro-quaternary/10 px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-retro-quaternary-foreground">{story.earnings}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-retro-quaternary/10 px-6 py-3 rounded-xl">
            <div className="text-4xl font-bold text-retro-quaternary">$12M+</div>
            <p className="text-left text-sm">
              <span className="block font-bold">Paid to creators</span>
              <span className="text-retro-muted-foreground">in the last 12 months</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerSuccess;
