import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/works", label: "Works" },
  { to: "/connect", label: "Connect" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-xl font-semibold tracking-tight text-slate-100"
        >
          TS<span className="text-accent-400">.</span>
        </Link>
        <nav className="hidden items-center gap-1 text-sm font-medium text-slate-300 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 transition hover:text-white ${
                  isActive
                    ? "bg-white/10 text-white shadow-glow"
                    : "text-slate-300"
                }`
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-slate-200 transition hover:border-white/30 hover:bg-white/10"
            aria-label="Toggle navigation"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="border-t border-white/5 bg-slate-950/90 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-2 text-sm font-medium text-slate-300">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 transition hover:text-white ${
                    isActive
                      ? "bg-white/10 text-white shadow-glow"
                      : "text-slate-300"
                  }`
                }
                end={link.to === "/"}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
