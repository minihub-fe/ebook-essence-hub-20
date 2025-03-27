
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, BookText, Code, Lightbulb, Calendar, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ResourceCategory = "all" | "beginner" | "advanced" | "marketing" | "technical";

const ResourceContent = () => {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>("all");
  
  const categories: { value: ResourceCategory; label: string }[] = [
    { value: "all", label: "All Resources" },
    { value: "beginner", label: "Beginners" },
    { value: "advanced", label: "Advanced" },
    { value: "marketing", label: "Marketing" },
    { value: "technical", label: "Technical" }
  ];
  
  const resources = [
    {
      id: 1,
      title: "Creating Courses in Markdown",
      description: "Learn how to create professional courses using markdown formatting and convert them to sellable products.",
      type: "video",
      icon: <Video className="h-6 w-6 text-purple-600" />,
      duration: "25 min",
      videoId: "HyDPG1yzoRY", // Example YouTube video ID
      categories: ["beginner", "technical"]
    },
    {
      id: 2,
      title: "Using ChatGPT for Content Translation",
      description: "Maximize efficiency by using AI to translate your courses into multiple languages and reach a global audience.",
      type: "guide",
      icon: <BookText className="h-6 w-6 text-blue-600" />,
      duration: "15 min read",
      link: "#",
      categories: ["beginner", "technical"]
    },
    {
      id: 3,
      title: "Optimizing Product Pages for Conversions",
      description: "Design strategies and copywriting techniques to increase conversion rates on your digital products.",
      type: "video",
      icon: <Video className="h-6 w-6 text-purple-600" />,
      duration: "32 min",
      videoId: "gAkwW2tuIqE", // Example YouTube video ID
      categories: ["advanced", "marketing"]
    },
    {
      id: 4,
      title: "Creating Eye-Catching Thumbnails",
      description: "Design principles and tools to create professional thumbnails that attract customers to your products.",
      type: "guide",
      icon: <BookText className="h-6 w-6 text-blue-600" />,
      duration: "12 min read",
      link: "#",
      categories: ["beginner", "marketing"]
    },
    {
      id: 5,
      title: "Advanced Template Creation",
      description: "Learn techniques for creating professional templates that solve real problems for your customers.",
      type: "video",
      icon: <Video className="h-6 w-6 text-purple-600" />,
      duration: "45 min",
      videoId: "oeb8CdPYsuk", // Example YouTube video ID
      categories: ["advanced", "technical"]
    },
    {
      id: 6,
      title: "Email Marketing for Digital Creators",
      description: "Build and nurture your audience with effective email strategies designed for digital product creators.",
      type: "guide",
      icon: <BookText className="h-6 w-6 text-blue-600" />,
      duration: "20 min read",
      link: "#",
      categories: ["advanced", "marketing"]
    },
    {
      id: 7,
      title: "Building a Sustainable Creator Business",
      description: "Long-term strategies for creating multiple income streams from your digital products.",
      type: "video",
      icon: <Video className="h-6 w-6 text-purple-600" />,
      duration: "38 min",
      videoId: "VfGW0Qiy2I0", // Example YouTube video ID
      categories: ["advanced", "marketing"]
    },
    {
      id: 8,
      title: "Recording High-Quality Tutorial Videos",
      description: "Learn to record, edit and produce professional video tutorials with minimal equipment.",
      type: "guide",
      icon: <BookText className="h-6 w-6 text-blue-600" />,
      duration: "18 min read",
      link: "#",
      categories: ["beginner", "technical"]
    }
  ];
  
  const filteredResources = activeCategory === "all" 
    ? resources 
    : resources.filter(resource => resource.categories.includes(activeCategory));

  return (
    <div className="container mx-auto px-4 pb-24">
      {/* Category Selection */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(category => (
          <Button
            key={category.value}
            variant="outline"
            className={cn(
              "rounded-full border-2 font-mono",
              activeCategory === category.value
                ? "bg-retro-secondary text-white border-retro-secondary"
                : "bg-white border-retro-secondary/50 text-retro-secondary hover:bg-retro-secondary/10"
            )}
            onClick={() => setActiveCategory(category.value)}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Resources Grid with Alternating Layout */}
      <div className="space-y-16">
        {/* Video Tutorials Section */}
        <section id="video-tutorials" className="scroll-mt-24">
          <div className="flex items-center gap-2 mb-8">
            <Video className="h-6 w-6 text-retro-secondary" />
            <h2 className="text-2xl font-serif font-bold retro-heading">Video Tutorials</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredResources
              .filter(resource => resource.type === "video")
              .map((resource, index) => (
                <Card key={resource.id} className={cn(
                  "border-2 shadow-retro-sm hover:shadow-retro-md transition-all duration-300",
                  index % 2 === 0 ? "border-purple-200" : "border-blue-200",
                  "group hover:-translate-y-1"
                )}>
                  <CardHeader className="relative overflow-hidden">
                    <div className={cn(
                      "absolute inset-0 opacity-10",
                      index % 2 === 0 ? "bg-purple-200" : "bg-blue-200"
                    )}></div>
                    <div className="relative">
                      {resource.icon}
                      <CardTitle className="mt-2">{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between font-mono text-sm">
                      <span className="bg-retro-muted px-3 py-1 rounded-full text-retro-muted-foreground">
                        {resource.duration}
                      </span>
                    </div>
                    {/* Embedded YouTube video */}
                    <div className="aspect-video w-full overflow-hidden rounded-md">
                      <iframe 
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${resource.videoId}`} 
                        title={resource.title} 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>
        
        {/* Written Guides Section */}
        <section id="guides" className="scroll-mt-24">
          <div className="flex items-center gap-2 mb-8">
            <BookText className="h-6 w-6 text-retro-secondary" />
            <h2 className="text-2xl font-serif font-bold retro-heading">Written Guides</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredResources
              .filter(resource => resource.type === "guide")
              .map((resource, index) => (
                <Card key={resource.id} className={cn(
                  "border-2 shadow-retro-sm hover:shadow-retro-md transition-all duration-300",
                  index % 2 === 0 ? "border-blue-200" : "border-purple-200",
                  "group hover:-translate-y-1"
                )}>
                  <CardHeader className="relative overflow-hidden">
                    <div className={cn(
                      "absolute inset-0 opacity-10",
                      index % 2 === 0 ? "bg-blue-200" : "bg-purple-200"
                    )}></div>
                    <div className="relative">
                      {resource.icon}
                      <CardTitle className="mt-2">{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between font-mono text-sm">
                      <span className="bg-retro-muted px-3 py-1 rounded-full text-retro-muted-foreground">
                        {resource.duration}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full group-hover:bg-retro-secondary group-hover:text-white transition-colors"
                      variant="outline"
                    >
                      <Link className="mr-2 h-4 w-4" /> Read Guide
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </section>
        
        {/* Join Community Section */}
        <section className="mt-24">
          <div className="bg-gradient-to-r from-retro-muted to-white border-2 border-retro-secondary rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-retro-dots opacity-20 transform rotate-45"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-retro-dots opacity-20"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold retro-heading mb-4">Join Our Creator Community</h2>
              <p className="text-retro-muted-foreground mb-8">
                Connect with fellow creators, share insights, and get early access to new resources and platform features.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-retro-secondary hover:bg-retro-secondary/90 text-white">
                  <Calendar className="mr-2 h-4 w-4" /> Join Monthly Workshops
                </Button>
                <Button variant="outline" className="border-2 border-retro-secondary">
                  <Lightbulb className="mr-2 h-4 w-4" /> Request a Topic
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResourceContent;
