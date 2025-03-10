
import { Mail } from "lucide-react";
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      // In a real app, you would send this to your API
      console.log("Submitted email:", email);
    }
  };
  
  return (
    <section className="py-16 bg-retro-bg-stripes">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg border-2 border-retro-primary p-8 shadow-retro-md shadow-retro-primary/30">
          <div className="text-center mb-6">
            <Mail className="h-12 w-12 mx-auto text-retro-primary mb-4" />
            <h2 className="retro-heading text-2xl mb-2">Stay Updated</h2>
            <p className="text-retro-muted-foreground text-sm">
              Subscribe to our newsletter for special deals, new releases, and digital resources tips.
            </p>
          </div>
          
          {isSubmitted ? (
            <div className="bg-retro-secondary/10 rounded p-4 text-center border border-retro-secondary">
              <p className="font-mono text-retro-secondary">Thanks for subscribing! Check your inbox soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border-2 border-retro-secondary rounded font-mono focus:outline-none focus:ring-2 focus:ring-retro-secondary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="retro-button retro-button-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
          
          <p className="text-xs text-center mt-4 text-retro-muted-foreground font-mono">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
