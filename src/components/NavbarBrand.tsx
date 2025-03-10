
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const NavbarBrand = () => {
  return (
    <Link to="/" className="text-xl font-serif font-bold text-retro-secondary flex items-center">
      <BookOpen className="h-6 w-6 mr-2 text-retro-secondary" />
      <span className="retro-heading">Digital Store</span>
    </Link>
  );
};

export default NavbarBrand;
