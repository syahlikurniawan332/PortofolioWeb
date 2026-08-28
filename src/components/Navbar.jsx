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
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-40 border-b border-[#d8d2c5] bg-[#f3efe6]/90 backdrop-blur-md dark:border-[#344238] dark:bg-[#172019]/90">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-[72px] items-center justify-between">
          <a
            href="#"
            onClick={closeMenu}
            className="text-base font-semibold tracking-[-0.02em] text-[#263128] transition-colors hover:text-[#a85f3c] dark:text-[#ebe8df] dark:hover:text-[#d99167]"
          >
            Syahli Kurniawan
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#667066] transition-colors hover:text-[#405a45] dark:text-[#aeb8af] dark:hover:text-[#d99167]"
              >
                {item.label}
              </a>
            ))}

            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4cec1] text-sm text-[#405a45] transition-colors hover:border-[#405a45] hover:bg-[#e8e2d5] dark:border-[#3b4a3e] dark:text-[#d8ddd7] dark:hover:border-[#738675] dark:hover:bg-[#243027]"
              aria-label="Toggle theme"
            >
              {theme === "light" ? "☾" : "☀"}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4cec1] text-sm text-[#405a45] dark:border-[#3b4a3e] dark:text-[#d8ddd7]"
              aria-label="Toggle theme"
            >
              {theme === "light" ? "☾" : "☀"}
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-9 min-w-9 items-center justify-center rounded-full border border-[#d4cec1] px-3 text-xs font-medium uppercase tracking-[0.12em] text-[#405a45] dark:border-[#3b4a3e] dark:text-[#d8ddd7]"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMenuOpen
              ? "max-h-96 border-t border-[#d8d2c5] dark:border-[#344238]"
              : "max-h-0"
          }`}
        >
          <div className="py-4">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-[#ddd7cb] py-4 text-sm text-[#4c594e] transition-colors last:border-none hover:text-[#a85f3c] dark:border-[#2d3a30] dark:text-[#b7c0b8] dark:hover:text-[#d99167]"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[#9b958a]">
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