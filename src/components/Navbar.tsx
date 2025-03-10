
import NavbarBrand from "./NavbarBrand";
import NavbarLinks from "./NavbarLinks";
import NavbarIcons from "./NavbarIcons";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b-2 border-retro-secondary shadow-retro-sm shadow-retro-secondary/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <NavbarBrand />
        <NavbarLinks />
        <NavbarIcons />
      </div>
    </nav>
  );
};

export default Navbar;
