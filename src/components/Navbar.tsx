
import { Link } from "react-router-dom";
import { ShoppingCart, User, BookOpen } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-retro-background/90 backdrop-blur-lg z-50 border-b-2 border-retro-primary">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-serif font-bold text-retro-primary flex items-center">
          <BookOpen className="h-6 w-6 mr-2 text-retro-secondary" />
          <span className="retro-heading">Digital Store</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/cart">
            <button className="retro-button retro-button-primary h-10 w-10 p-0 flex items-center justify-center">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </Link>
          <Link to="/account">
            <button className="retro-button retro-button-secondary h-10 w-10 p-0 flex items-center justify-center">
              <User className="h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
