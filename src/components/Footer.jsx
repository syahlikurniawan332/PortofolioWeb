function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#DDD8CC] dark:border-[#3A403A]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-[#6F746C] dark:text-[#A7ADA5]">
          © {currentYear} Syahli Kurniawan
        </p>

        <p className="text-xs text-[#8E8A82] dark:text-[#7E867F]">
          Built with React, Vite & Tailwind CSS
        </p>

        <a
          href="#"
          className="group inline-flex items-center gap-2 text-sm font-medium text-[#52624F] hover:text-[#B56F4D] dark:text-[#A6B39F] dark:hover:text-[#D39570]"
        >
          Back to top
          <span className="transition-transform group-hover:-translate-y-1">
            ↑
          </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;