
import React from "react";
import { 
  Book, 
  FileText, 
  Video, 
  Lightbulb, 
  Calendar, 
  Code, 
  Headphones, 
  Brush, 
  Dumbbell, 
  Leaf,
  Utensils,
  Camera,
  FileImage,
  BookText
} from "lucide-react";

const WhatYouCanSell = () => {
  const productCategories = [
    {
      icon: <Book className="h-6 w-6" />,
      title: "E-Books & Guides",
      description: "Share your expertise through digital books, guides, and PDFs.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Templates & Resources",
      description: "Sell ready-to-use templates, spreadsheets, and digital assets.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Online Courses",
      description: "Create and sell educational courses, workshops, and tutorials.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Software & Digital Tools",
      description: "Distribute software, plugins, apps, or digital tools.",
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      icon: <Dumbbell className="h-6 w-6" />,
      title: "Fitness Programs",
      description: "Sell workout plans, exercise routines, and fitness guides.",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Recipe Collections",
      description: "Share cookbooks, meal plans, or specialized diet guides.",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Consultations",
      description: "Offer one-on-one consultations, coaching, or advisory services.",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Service Packages",
      description: "Sell packaged digital services or technical assistance.",
      color: "bg-pink-50 text-pink-600"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Audio & Music",
      description: "Distribute sound effects, music tracks, or audio content.",
      color: "bg-teal-50 text-teal-600"
    },
    {
      icon: <Brush className="h-6 w-6" />,
      title: "Digital Art & Graphics",
      description: "Sell illustrations, designs, photos, or visual content.",
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: <BookText className="h-6 w-6" />,
      title: "Educational Resources",
      description: "Share lesson plans, study materials, and educational content.",
      color: "bg-lime-50 text-lime-600"
    },
    {
      icon: <FileImage className="h-6 w-6" />,
      title: "Presets & Filters",
      description: "Sell photo editing presets, video LUTs, and digital filters.",
      color: "bg-cyan-50 text-cyan-600"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="what-you-can-sell">
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-24 h-24 rounded-full bg-retro-dots opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-retro-dots opacity-30 animate-float" style={{animationDelay: "1s"}}></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-retro-primary/10 border border-retro-primary/20">
            <span className="font-mono text-sm text-retro-primary">Unlimited Possibilities</span>
          </div>
          <h2 className="retro-heading text-3xl md:text-4xl lg:text-5xl mb-4">What You Can Sell</h2>
          <p className="text-retro-muted-foreground max-w-2xl mx-auto text-lg">
            Our platform supports a wide variety of digital products. If it's digital, you can probably sell it here.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {productCategories.map((category, index) => (
            <div 
              key={index} 
              className={`${category.color} border-2 border-white rounded-xl p-6 shadow-retro-sm hover:shadow-retro-md transition-all hover:-translate-y-1 duration-300`}
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="font-mono font-bold text-lg mb-2">{category.title}</h3>
              <p className="text-sm text-retro-muted-foreground">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white border-2 border-retro-primary/20 rounded-xl p-8 max-w-3xl mx-auto shadow-retro-md">
            <h3 className="font-mono font-bold text-xl mb-3">Have something else in mind?</h3>
            <p className="text-retro-muted-foreground mb-4">
              Don't see your product type? We're constantly expanding our supported formats. 
              Contact our team to discuss your unique digital product ideas.
            </p>
            <button className="retro-button bg-retro-primary text-white border-retro-primary hover:bg-retro-primary/90 px-6 py-2">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanSell;
