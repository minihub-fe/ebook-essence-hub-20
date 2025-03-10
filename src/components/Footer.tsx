
import { Link } from "react-router-dom";
import { BookOpen, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-retro-muted border-t-2 border-retro-secondary mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-retro-secondary" />
              <span className="text-xl font-serif font-bold retro-heading">Digital Store</span>
            </Link>
            <p className="text-sm font-mono text-retro-muted-foreground">
              Your one-stop destination for premium digital content and resources.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Facebook" className="text-retro-secondary hover:text-retro-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-retro-secondary hover:text-retro-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-retro-secondary hover:text-retro-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 retro-heading">Quick Links</h3>
            <ul className="space-y-2">
              {['Books', 'Templates', 'Courses', 'About Us', 'Contact', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-mono hover:text-retro-secondary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 retro-heading">Categories</h3>
            <ul className="space-y-2">
              {['Business', 'Design', 'Programming', 'Marketing', 'Self Help', 'Education'].map((item) => (
                <li key={item}>
                  <Link to={`/category/${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-mono hover:text-retro-secondary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 retro-heading">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm font-mono">
                <Mail className="h-4 w-4 mr-2 text-retro-secondary" /> 
                support@digitalstore.com
              </li>
              <li className="flex items-center text-sm font-mono">
                <Phone className="h-4 w-4 mr-2 text-retro-secondary" /> 
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-sm font-mono">
                <MapPin className="h-4 w-4 mr-2 text-retro-secondary" /> 
                123 Digital Lane, Web City
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-dashed border-retro-secondary/50 text-center text-sm font-mono text-retro-muted-foreground">
          <p>© {year} Digital Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
