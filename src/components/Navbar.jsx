import { useEffect, useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-40 border-b border-[#DDD8CC] bg-[#F6F3EC]/90 backdrop-blur-md dark:border-[#3A403A] dark:bg-[#1D211D]/90">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-[72px] items-center justify-between">
          <a
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="text-base font-semibold tracking-[-0.02em] text-[#252A24] transition-colors hover:text-[#B56F4D] dark:text-[#EFECE4] dark:hover:text-[#D39570]"
          >
            Syahli Kurniawan
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#6F746C] transition-colors hover:text-[#52624F] dark:text-[#A7ADA5] dark:hover:text-[#D39570]"
              >
                {item.label}
              </a>
            ))}

            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D2CCBF] text-sm text-[#52624F] transition-colors hover:border-[#52624F] dark:border-[#3A403A] dark:text-[#EFECE4] dark:hover:border-[#A6B39F]"
              aria-label="Toggle theme"
            >
              {theme === "light" ? "☾" : "☀"}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D2CCBF] text-[#52624F] dark:border-[#3A403A] dark:text-[#EFECE4]"
              aria-label="Toggle theme"
            >
              {theme === "light" ? "☾" : "☀"}
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="rounded-full border border-[#D2CCBF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#52624F] dark:border-[#3A403A] dark:text-[#EFECE4]"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMenuOpen
              ? "max-h-96 border-t border-[#DDD8CC] dark:border-[#3A403A]"
              : "max-h-0"
          }`}
        >
          <div className="py-4">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between border-b border-[#DDD8CC] py-4 text-sm text-[#52624F] last:border-none dark:border-[#3A403A] dark:text-[#A7ADA5]"
              >
                {item.label}

                <span className="font-mono text-xs text-[#969188]">
                  0{index + 1}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;