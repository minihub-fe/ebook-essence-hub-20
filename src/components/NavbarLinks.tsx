
import { Link } from "react-router-dom";

const NavbarLinks = () => {
  const links = [
    { title: "Books", path: "/books" },
    { title: "Templates", path: "/templates" },
    { title: "Courses", path: "/courses" },
  ];

  return (
    <div className="hidden md:flex items-center space-x-6">
      {links.map((link) => (
        <Link 
          key={link.path}
          to={link.path} 
          className="font-mono text-retro-foreground hover:text-retro-secondary transition-colors relative group"
        >
          {link.title}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-retro-secondary group-hover:w-full transition-all duration-300"></span>
        </Link>
      ))}
    </div>
  );
};

export default NavbarLinks;
