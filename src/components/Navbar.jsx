import { useEffect, useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <nav className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <a
          href="#"
          className="font-semibold tracking-tight text-slate-900 dark:text-slate-100"
        >
          Syahli Kurniawan
        </a>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="text-sm text-slate-500 transition-colors hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm text-slate-500 transition-colors hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
          >
            Skills
          </a>

          <a
            href="#experience"
            className="text-sm text-slate-500 transition-colors hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
          >
            Experience
          </a>

          <a
            href="#projects"
            className="text-sm text-slate-500 transition-colors hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-sm text-slate-500 transition-colors hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
          >
            Contact
          </a>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            aria-label="Toggle theme"
          >
            {theme === "light" ? "☾" : "☀"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;