import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navigationLinks } from "../../data/navigation";
import Icon from "../Icon";

function getNavClass(isActive) {
  const baseClass =
    "text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors";
  return isActive ? `${baseClass} text-primary dark:text-primary` : baseClass;
}

export default function SiteHeader({ onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full top-0 z-50 glass-nav transition-all duration-300 sticky">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <NavLink to="/" className="w-[3.5rem]" aria-label="Mosalam Home">
            <img
              src="/images/logo.jpg"
              alt="logo"
              className="w-full h-full rounded-[4px]"
            />
          </NavLink>

          <nav className="hidden md:flex space-x-8">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => getNavClass(isActive)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              type="button"
              className="p-2 rounded-full text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={onToggleTheme}
              aria-label="Toggle dark mode"
            >
              <Icon name="brightness_4" className="text-current" size={18} />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-text-main-light dark:text-white p-2"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Open menu"
            >
              <Icon name={open ? "close" : "menu"} className="text-current" size={20} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden border-t border-slate-200/60 dark:border-slate-700/60 bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-md overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`transition-transform duration-300 ${open ? "translate-y-0" : "-translate-y-2"}`}>
          <nav className="px-4 py-4 flex flex-col gap-3">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-primary dark:text-primary"
                      : "text-text-muted-light dark:text-text-muted-dark"
                  } text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <button
              type="button"
              className="mt-2 w-fit p-2 rounded-full text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={onToggleTheme}
              aria-label="Toggle dark mode"
            >
              <Icon name="brightness_4" className="text-current" size={18} />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
