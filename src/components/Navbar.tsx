
import { useIsMobile } from "@/hooks/use-mobile";
import NavbarBrand from "./NavbarBrand";
import NavbarLinks from "./NavbarLinks";
import NavbarIcons from "./NavbarIcons";

const Navbar = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="fixed top-0 w-full z-50 px-4 pt-4">
      <nav className="container mx-auto bg-white/80 backdrop-blur-lg border-2 border-retro-secondary rounded-2xl shadow-retro-md shadow-retro-secondary/20 overflow-hidden">
        <div className={cn(
          "px-4 sm:px-6 h-16 flex items-center",
          isMobile ? "justify-between gap-2" : "justify-between"
        )}>
          <NavbarBrand />
          {!isMobile && <NavbarLinks />}
          <div className="flex items-center gap-2">
            {isMobile && <NavbarLinks />}
            <NavbarIcons />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// Helper function to merge tailwind classes
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
