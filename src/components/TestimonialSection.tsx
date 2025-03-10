
import { Quote } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "These resources have completely transformed how I approach my business. The templates saved me countless hours!",
      author: "Sarah Johnson",
      position: "Entrepreneur"
    },
    {
      quote: "I've purchased many ebooks in the past, but the quality of content here is simply outstanding. Very impressed!",
      author: "Michael Chen",
      position: "Software Developer"
    },
    {
      quote: "The courses are incredibly well-structured and the downloadable materials make implementation a breeze.",
      author: "Emma Rodriguez",
      position: "Marketing Director"
    }
  ];

  return (
    <section className="py-16 mb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="retro-heading text-3xl mb-4">What Our Customers Say</h2>
          <p className="text-retro-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from the people who have experienced our products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border-2 border-retro-secondary shadow-retro-sm relative hover:-translate-y-1 transition-transform duration-300"
            >
              <Quote className="h-8 w-8 text-retro-secondary/20 absolute top-4 right-4" />
              <p className="text-sm mb-6 font-mono">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-retro-secondary/20 flex items-center justify-center text-retro-secondary font-bold mr-3">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold retro-heading text-sm">{testimonial.author}</p>
                  <p className="text-xs text-retro-muted-foreground font-mono">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
