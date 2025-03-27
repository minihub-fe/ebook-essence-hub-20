
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NavbarLinks = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { title: "Books", path: "/books" },
    { title: "Templates", path: "/templates" },
    { title: "Courses", path: "/courses" },
    { title: "Resources", path: "/resources" },
    { title: "Sell", path: "/sell" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  if (isMobile) {
    return (
      <div className="relative">
        <button 
          onClick={toggleMobileMenu}
          className="relative flex items-center justify-center h-10 w-10 rounded-lg bg-white border-2 border-retro-secondary hover:bg-retro-secondary/10 transition-all duration-300"
          aria-label="Menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-retro-secondary" />
          ) : (
            <Menu className="h-5 w-5 text-retro-secondary" />
          )}
        </button>
        
        {mobileMenuOpen && (
          <div className="absolute top-12 right-0 bg-white border-2 border-retro-secondary rounded-lg shadow-retro-md shadow-retro-secondary/20 p-4 w-48 z-50 animate-scale-in">
            <div className="flex flex-col space-y-3">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-mono text-retro-foreground px-3 py-2 rounded-lg hover:bg-retro-secondary/10 hover:text-retro-secondary transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center space-x-4">
      {links.map((link) => (
        <Link 
          key={link.path}
          to={link.path} 
          className="font-mono text-retro-foreground px-3 py-2 rounded-lg hover:bg-retro-secondary/10 hover:text-retro-secondary transition-all duration-300 relative group"
        >
          {link.title}
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-retro-secondary group-hover:w-4/5 transition-all duration-300"></span>
        </Link>
      ))}
    </div>
  );
};

export default NavbarLinks;
