import { Outlet, useLocation } from "react-router-dom";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

export default function Layout({ onToggleTheme }) {
  const { pathname } = useLocation();
  useRevealOnScroll(pathname);

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark font-sans transition-colors duration-300 min-h-screen flex flex-col">
      <SiteHeader onToggleTheme={onToggleTheme} />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
