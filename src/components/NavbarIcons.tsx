
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
    <div className="flex items-center gap-3">
      {icons.map((item) => (
        <Link key={item.title} to={item.path}>
          <button 
            className={cn(
              "retro-button-icon relative", 
              "hover:scale-105 transition-transform duration-300",
              "tooltip-trigger"
            )}
            aria-label={item.title}
          >
            <item.icon className="h-5 w-5 text-retro-secondary" />
            {item.hasBadge && (
              <span className="absolute -top-1 -right-1 bg-retro-secondary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
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
