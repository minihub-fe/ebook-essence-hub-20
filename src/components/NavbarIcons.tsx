
import { Link } from "react-router-dom";
import { ShoppingCart, User, Search, Download, ClipboardList } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NavbarIcons = () => {
  const [cartCount, setCartCount] = useState(2);
  
  const icons = [
    { icon: Search, title: "Search", path: "#", hasBadge: false },
    { icon: ShoppingCart, title: "Cart", path: "/cart", hasBadge: true, count: cartCount },
    { icon: Download, title: "Downloads", path: "/downloads", hasBadge: false },
    { icon: ClipboardList, title: "Purchases", path: "/purchases", hasBadge: false },
    { icon: User, title: "Account", path: "/account", hasBadge: false },
  ];

  return (
    <div className="flex items-center gap-2">
      {icons.map((item) => (
        <Link key={item.title} to={item.path} className="group">
          <button 
            className={cn(
              "relative flex items-center justify-center",
              "h-10 w-10 rounded-lg bg-white border-2 border-retro-secondary",
              "hover:bg-retro-secondary/10 transition-all duration-300",
              "tooltip-trigger"
            )}
            aria-label={item.title}
          >
            <item.icon className="h-5 w-5 text-retro-secondary group-hover:scale-110 transition-transform" />
            {item.hasBadge && (
              <span className="absolute -top-2 -right-2 bg-retro-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-mono border border-white">
                {item.count}
              </span>
            )}
            <span className="tooltip-content">{item.title}</span>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default NavbarIcons;
