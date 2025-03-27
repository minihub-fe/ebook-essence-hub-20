
import React from "react";
import { BookText, Video } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ResourcesHeader = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-retro-primary/10 border border-retro-primary/20">
          <span className="font-mono text-sm text-retro-primary">Free Learning Materials</span>
        </div>
        <h1 className="retro-heading text-3xl md:text-4xl lg:text-5xl mb-4">Creator Resources</h1>
        <p className="text-retro-muted-foreground text-lg mb-6">
          Level up your digital product skills with our curated collection of tutorials, guides, and resources.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="#video-tutorials" className="flex items-center gap-2 px-4 py-2 border-2 border-retro-secondary rounded-lg hover:bg-retro-secondary/10 transition-all">
            <Video size={18} />
            <span className="font-mono">Video Tutorials</span>
          </a>
          <a href="#guides" className="flex items-center gap-2 px-4 py-2 border-2 border-retro-secondary rounded-lg hover:bg-retro-secondary/10 transition-all">
            <BookText size={18} />
            <span className="font-mono">Written Guides</span>
          </a>
        </div>
      </div>
      
      <Separator className="my-12 max-w-3xl mx-auto border-dashed border-retro-secondary/30" />
    </section>
  );
};

export default ResourcesHeader;
