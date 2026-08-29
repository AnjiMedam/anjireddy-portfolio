import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  User,
  Code2,
  Briefcase,
  FileText,
  Mail,
  Database,
} from "lucide-react";

// Sidebar navigation configuration
const menuItems = [
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "About",
    path: "/about",
    icon: User,
  },
  {
    name: "Skills",
    path: "/skills",
    icon: Code2,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: Briefcase,
  },
  {
    name: "Blog",
    path: "/blog",
    icon: FileText,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: Mail,
  },
  {
    name: "Oracle APEX",
    path: "/apex",
    icon: Database,
  },
];

function Sidebar() {
  // Sidebar starts collapsed and expands when the mouse enters
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        sticky
        top-0
        h-screen
        max-h-screen
        flex
        flex-col
        bg-slate-900
        border-r
        border-slate-800
        transition-all
        duration-300
        ease-in-out
        shrink-0
        ${isHovered ? "w-72" : "w-20"}
      `}
    >
      {/* Profile information */}
      <div
        className={`
          h-20
          flex
          items-center
          border-b
          border-slate-800
          shrink-0
          transition-all
          duration-300
          ${
            isHovered
              ? "px-5 justify-start"
              : "px-3 justify-center"
          }
        `}
      >
        {/* Developer name and professional title */}
        {isHovered ? (
          <div className="min-w-0">
            <h1 className="text-lg font-bold tracking-wide text-white truncate">
              Anjireddy Medam
            </h1>

            <p className="text-xs text-slate-500 mt-1 truncate">
              Software Development Engineer
            </p>
          </div>
        ) : (
          <div className="text-lg font-bold text-cyan-400">
            AM
          </div>
        )}
      </div>

      {/* Main sidebar navigation */}
      <nav
        className={`
          flex-1
          p-4
          space-y-2
          transition-all
          duration-300
          ${isHovered ? "" : "px-3"}
        `}
      >
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              title={!isHovered ? item.name : undefined}
              className={({ isActive }) => `
                flex
                items-center
                gap-3
                min-h-12
                px-4
                rounded-lg
                border
                transition-all
                duration-200
                ${
                  isHovered
                    ? "justify-start"
                    : "justify-center"
                }
                ${
                  isActive
                    ? `
                      bg-cyan-400/10
                      text-cyan-400
                      border-cyan-400/20
                    `
                    : `
                      text-slate-400
                      border-transparent
                      hover:text-white
                      hover:bg-slate-800
                    `
                }
              `}
            >
              {/* Menu icon */}
              <Icon
                size={21}
                strokeWidth={1.8}
                className="shrink-0"
              />

              {/* Menu name */}
              {isHovered && (
                <span className="text-sm font-medium whitespace-nowrap">
                  {item.name}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;