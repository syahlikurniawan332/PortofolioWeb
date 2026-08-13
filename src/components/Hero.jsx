function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center overflow-hidden px-6 py-16">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/10" />

        <div className="absolute right-[8%] top-[15%] h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl dark:bg-indigo-500/10" />

        <div className="absolute bottom-[5%] left-[35%] h-64 w-64 rounded-full bg-fuchsia-400/5 blur-3xl dark:bg-fuchsia-500/5" />
      </div>

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          color: "rgb(148 163 184)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
        }}
      />

      <div className="grid w-full items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT */}
        <div className="order-2 md:order-1">
          {/* Code label */}
          <p className="mb-5 font-mono text-sm text-violet-600 dark:text-violet-400">
            <span className="text-slate-400 dark:text-slate-500">const</span>{" "}
            developer{" "}
            <span className="text-slate-400 dark:text-slate-500">=</span> {"{"}
          </p>

          {/* Main heading */}
          <h1 className="pl-4 text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-950 sm:text-6xl md:text-7xl dark:text-white">
            Syahli
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Kurniawan
            </span>
          </h1>

          {/* Role */}
          <h2 className="mt-6 pl-4 text-xl font-semibold leading-snug text-slate-700 md:text-2xl dark:text-slate-300">
            <span className="text-violet-600 dark:text-violet-400">role:</span>{" "}
            Junior Programmer
            <span className="mx-2 text-slate-300 dark:text-slate-600">/</span>
            Web Developer
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl pl-4 text-base leading-7 text-slate-600 md:text-lg dark:text-slate-400">
            Saya membangun aplikasi web dengan fokus pada pengembangan yang
            fungsional, terstruktur, dan sesuai dengan kebutuhan pengguna.
          </p>

          {/* Closing code */}
          <p className="mt-3 pl-4 font-mono text-sm text-slate-400 dark:text-slate-500">
            {"}"}
            <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-violet-500 align-middle" />
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 pl-4">
            <a
              href="#projects"
              className="group rounded-lg bg-violet-600 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-violet-500 hover:shadow-xl hover:shadow-violet-500/20"
            >
              View My Projects
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/cv.pdf"
              download="CV-Syahli-Kurniawan.pdf"
              className="rounded-lg border border-slate-300 bg-white/60 px-5 py-3 text-sm font-medium text-slate-700 backdrop-blur transition-all hover:border-violet-300 hover:bg-white dark:border-slate-600 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:border-violet-500/50 dark:hover:bg-slate-800"
            >
              Download CV
            </a>
          </div>

          {/* Tech stack */}
          <div className="mt-10 border-t border-slate-200 pt-5 dark:border-slate-800">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
              Currently working with
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-slate-500 dark:text-slate-400">
              <span>React</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span>Laravel</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span>JavaScript</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span>MySQL</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span>Git</span>
            </div>
          </div>
        </div>

        {/* RIGHT / PHOTO */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative">
            {/* Ambient glow */}
            <div className="absolute -inset-8 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/10" />

            {/* Floating tech badge - top */}
            <div className="absolute -right-5 -top-6 z-20 animate-[float_5s_ease-in-out_infinite] rounded-xl border border-slate-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-800/90">
              <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                Stack
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-100">
                React + Laravel
              </p>
            </div>

            {/* Floating status card - left */}
            <div className="absolute -left-8 top-1/2 z-20 hidden -translate-y-1/2 animate-[floatReverse_6s_ease-in-out_infinite] rounded-xl border border-slate-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:block dark:border-slate-700 dark:bg-slate-800/90">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-500" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                  Building for web
                </span>
              </div>
            </div>

            {/* Corner brackets */}
            <span className="absolute -left-4 -top-4 z-10 h-10 w-10 rounded-tl-2xl border-l-2 border-t-2 border-violet-500/70" />

            <span className="absolute -bottom-4 -right-4 z-10 h-10 w-10 rounded-br-2xl border-b-2 border-r-2 border-violet-500/70" />

            {/* Photo */}
            <div className="relative">
              <img
                src="/images/profile/profile.jpg"
                alt="Syahli Kurniawan"
                className="relative h-64 w-64 rounded-3xl border border-slate-200 object-cover shadow-2xl sm:h-72 sm:w-72 md:h-80 md:w-80 dark:border-slate-700"
              />

              {/* Status */}
              <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <span className="h-2 w-2 rounded-full bg-violet-500" />
                Available for work
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 transition-colors hover:text-violet-500 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>

        <span className="h-8 w-px bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-600" />
      </a>
    </section>
  );
}

export default Hero;
