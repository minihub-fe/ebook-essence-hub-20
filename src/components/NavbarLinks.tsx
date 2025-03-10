
import { Link } from "react-router-dom";

const NavbarLinks = () => {
  const links = [
    { title: "Books", path: "/books" },
    { title: "Templates", path: "/templates" },
    { title: "Courses", path: "/courses" },
  ];

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
