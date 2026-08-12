function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center px-6 py-16">
      <div className="grid w-full items-center gap-16 md:grid-cols-2">

        {/* Text */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Hi, I'm
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-100 md:text-6xl">
            Syahli Kurniawan
          </h1>

          <h2 className="mt-4 text-2xl font-semibold leading-tight text-zinc-300 md:text-3xl">
            Junior Programmer
            <span className="text-violet-400"> & </span>
            Web Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
            Saya membangun aplikasi web dengan fokus pada pengembangan
            yang fungsional, terstruktur, dan sesuai dengan kebutuhan
            pengguna.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-violet-500 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-violet-400 hover:shadow-lg hover:shadow-violet-500/20"
            >
              View My Projects
            </a>

            <a
              href="/cv.pdf"
              className="rounded-lg border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-800"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl bg-violet-500/10 blur-2xl" />

            <img
              src="/images/profile/profile.jpg"
              alt="Syahli Kurniawan"
              className="relative h-72 w-72 rounded-3xl border border-zinc-700 object-cover shadow-2xl md:h-96 md:w-96"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero