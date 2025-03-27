
import React from "react";
import { Book, FileText, Video, Lightbulb, Calendar, Code, Headphones, Brush } from "lucide-react";

const WhatYouCanSell = () => {
  const productCategories = [
    {
      icon: <Book className="h-6 w-6" />,
      title: "E-Books & Guides",
      description: "Share your expertise through digital books, guides, and PDFs."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Templates & Resources",
      description: "Sell ready-to-use templates, spreadsheets, and digital assets."
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Online Courses",
      description: "Create and sell educational courses, workshops, and tutorials."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Software & Digital Tools",
      description: "Distribute software, plugins, apps, or digital tools."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Consultations",
      description: "Offer one-on-one consultations, coaching, or advisory services."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Service Packages",
      description: "Sell packaged digital services or technical assistance."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Audio & Music",
      description: "Distribute sound effects, music tracks, or audio content."
    },
    {
      icon: <Brush className="h-6 w-6" />,
      title: "Digital Art & Graphics",
      description: "Sell illustrations, designs, photos, or visual content."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="retro-heading text-2xl md:text-4xl mb-4">What You Can Sell</h2>
          <p className="text-retro-muted-foreground max-w-2xl mx-auto">
            Our platform supports a wide variety of digital products. If it's digital, you can probably sell it here.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {productCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-retro-tertiary rounded-xl p-6 shadow-retro-sm hover:shadow-retro-md transition-all hover:-translate-y-1"
            >
              <div className="text-retro-tertiary mb-4">{category.icon}</div>
              <h3 className="font-mono font-bold text-lg mb-2">{category.title}</h3>
              <p className="text-sm text-retro-muted-foreground">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-retro-muted-foreground italic max-w-2xl mx-auto">
            Don't see your product type? Contact us—we're constantly expanding our supported formats!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanSell;
