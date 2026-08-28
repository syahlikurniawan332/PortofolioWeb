function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#d8d2c5] dark:border-[#344238]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-[#667066] dark:text-[#aeb8af]">
          © {currentYear} Syahli Kurniawan
        </p>

        <p className="text-xs text-[#8d8b82] dark:text-[#78847a]">
          Built with React, Vite & Tailwind CSS
        </p>

        <a
          href="#"
          className="group inline-flex items-center gap-2 text-sm font-medium text-[#405a45] transition-colors hover:text-[#a85f3c] dark:text-[#91a894] dark:hover:text-[#d99167]"
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