
import NavbarBrand from "./NavbarBrand";
import NavbarLinks from "./NavbarLinks";
import NavbarIcons from "./NavbarIcons";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-50 px-4 pt-4">
      <nav className="container mx-auto bg-white/80 backdrop-blur-lg border-2 border-retro-secondary rounded-2xl shadow-retro-md shadow-retro-secondary/20 overflow-hidden">
        <div className="px-6 h-16 flex items-center justify-between">
          <NavbarBrand />
          <NavbarLinks />
          <NavbarIcons />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
