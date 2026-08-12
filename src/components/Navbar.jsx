function Navbar() {
  return (
    <nav className="border-b border-zinc-800 bg-zinc-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-semibold tracking-tight text-zinc-100"
        >
          Syahli Kurniawan
        </a>

        <div className="flex gap-6">
          <a
            href="#about"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Skills
          </a>

          <a
            href="#experience"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Experience
          </a>

          <a
            href="#projects"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar