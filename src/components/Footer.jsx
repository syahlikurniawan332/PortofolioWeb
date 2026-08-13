function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
        {/* Copyright */}
        <div>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
            © {currentYear} Syahli Kurniawan
          </p>

          <p className="mt-1 text-xs text-slate-400">
            All rights reserved.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>Built with</span>

          <span className="font-medium text-slate-600 dark:text-slate-300">
            React
          </span>

          <span>·</span>

          <span className="font-medium text-slate-600 dark:text-slate-300">
            Vite
          </span>

          <span>·</span>

          <span className="font-medium text-slate-600 dark:text-slate-300">
            Tailwind CSS
          </span>
        </div>

        {/* Back to top */}
        <a
          href="#"
          className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
        >
          Back to top
          <span className="transition-transform duration-300 group-hover:-translate-y-1">
            ↑
          </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;