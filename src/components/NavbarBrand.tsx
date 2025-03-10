
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const NavbarBrand = () => {
  return (
    <Link to="/" className="text-xl font-serif font-bold text-retro-secondary flex items-center px-2 py-1 rounded-lg hover:bg-retro-secondary/10 transition-colors">
      <BookOpen className="h-6 w-6 mr-2 text-retro-primary" />
      <span className="retro-heading bg-gradient-to-r from-retro-primary to-retro-secondary bg-clip-text text-transparent">Digital Store</span>
    </Link>
  );
};

export default NavbarBrand;
