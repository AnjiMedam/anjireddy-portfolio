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
  ChevronLeft,
  ChevronRight,
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
  // Controls whether the sidebar displays names or icons only
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
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
        ${isOpen ? "w-72" : "w-20"}
      `}
    >
      {/* Profile information and sidebar toggle */}
      <div
        className={`
          h-20
          flex
          items-center
          border-b
          border-slate-800
          shrink-0
          ${isOpen ? "px-5 justify-between" : "px-3 justify-between"}
        `}
      >
        {/* Developer name and professional title */}
        {isOpen ? (
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

        {/* Sidebar collapse and expand button */}
        <button
          type="button"
          onClick={() => setIsOpen((previousState) => !previousState)}
          title={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          className="
            w-9
            h-9
            flex
            items-center
            justify-center
            rounded-lg
            text-slate-400
            hover:text-white
            hover:bg-slate-800
            transition-colors
            duration-200
            shrink-0
          "
        >
          {isOpen ? (
            <ChevronLeft size={19} />
          ) : (
            <ChevronRight size={19} />
          )}
        </button>
      </div>

      {/* Main sidebar navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              title={!isOpen ? item.name : undefined}
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
                  isOpen
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

              {/* Menu name is hidden when sidebar is collapsed */}
              {isOpen && (
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