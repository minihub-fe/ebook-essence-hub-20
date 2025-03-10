
import { Link } from "react-router-dom";
import { ShoppingCart, User, BookOpen, Search, Download, ClipboardList } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b-2 border-retro-secondary shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-serif font-bold text-retro-secondary flex items-center">
          <BookOpen className="h-6 w-6 mr-2 text-retro-secondary" />
          <span className="retro-heading">Digital Store</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/books" className="font-mono text-retro-foreground hover:text-retro-secondary transition-colors">
            Books
          </Link>
          <Link to="/templates" className="font-mono text-retro-foreground hover:text-retro-secondary transition-colors">
            Templates
          </Link>
          <Link to="/courses" className="font-mono text-retro-foreground hover:text-retro-secondary transition-colors">
            Courses
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="retro-button-icon">
            <Search className="h-5 w-5 text-retro-secondary" />
          </button>
          <Link to="/cart">
            <button className="retro-button-icon relative">
              <ShoppingCart className="h-5 w-5 text-retro-secondary" />
              <span className="absolute -top-1 -right-1 bg-retro-secondary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </Link>
          <Link to="/downloads">
            <button className="retro-button-icon relative">
              <Download className="h-5 w-5 text-retro-secondary" />
            </button>
          </Link>
          <Link to="/purchases">
            <button className="retro-button-icon">
              <ClipboardList className="h-5 w-5 text-retro-secondary" />
            </button>
          </Link>
          <Link to="/account">
            <button className="retro-button-icon">
              <User className="h-5 w-5 text-retro-secondary" />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
