function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>
          © {currentYear} Syahli Kurniawan. All rights reserved.
        </p>

        <p>
          Built with React, Vite & Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}

export default Footer