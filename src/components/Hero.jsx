function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl items-center px-6 py-16 md:py-24">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        {/* LEFT */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[#B56F4D] dark:bg-[#D39570]" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6F746C] dark:text-[#A7ADA5]">
              Junior Web Developer
            </p>
          </div>

          <h1 className="max-w-4xl text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-[#252A24] dark:text-[#EFECE4]">
            Building practical
            <span className="block text-[#52624F] dark:text-[#A6B39F]">
              web experiences.
            </span>
          </h1>

          <div className="mt-9 grid max-w-3xl gap-8 border-t border-[#DDD8CC] pt-7 sm:grid-cols-[1fr_auto] sm:items-end dark:border-[#3A403A]">
            <p className="max-w-xl text-base leading-7 text-[#6F746C] md:text-lg dark:text-[#A7ADA5]">
              Applied Informatics graduate focused on developing functional,
              maintainable web applications for real-world needs.
            </p>

            <p className="text-sm font-medium text-[#52624F] dark:text-[#A6B39F]">
              Medan, Indonesia
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-[#52624F] px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#465443] dark:bg-[#A6B39F] dark:text-[#1D211D] dark:hover:bg-[#B7C1B1]"
            >
              View selected work
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/cv.pdf"
              download="CV-Syahli-Kurniawan.pdf"
              className="inline-flex items-center rounded-full border border-[#D2CCBF] px-6 py-3 text-sm font-medium text-[#3D463E] transition-all hover:-translate-y-0.5 hover:border-[#B56F4D] hover:text-[#B56F4D] dark:border-[#3A403A] dark:text-[#D9DDD7] dark:hover:border-[#D39570] dark:hover:text-[#D39570]"
            >
              Download resume
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#DDD8CC] pt-5 dark:border-[#3A403A]">
            <span className="text-xs uppercase tracking-[0.16em] text-[#969188] dark:text-[#7E867F]">
              Working with
            </span>

            {["Laravel", "React", "JavaScript", "MySQL", "Git"].map(
              (technology) => (
                <span
                  key={technology}
                  className="text-sm text-[#586159] dark:text-[#B6BDB6]"
                >
                  {technology}
                </span>
              )
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
          <div className="absolute -left-5 top-8 hidden h-[78%] w-px bg-[#B56F4D] md:block dark:bg-[#D39570]" />

          <div className="relative overflow-hidden rounded-[2rem] bg-[#E5DFD3] p-3 dark:bg-[#252A25]">
            <img
              src="/images/profile/profile.jpg"
              alt="Syahli Kurniawan"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center saturate-[0.85] contrast-[0.95]"
            />
          </div>

          <div className="mt-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-[#252A24] dark:text-[#EFECE4]">
                Syahli Kurniawan
              </p>

              <p className="mt-1 text-sm text-[#6F746C] dark:text-[#A7ADA5]">
                Programmer · Web Developer
              </p>
            </div>

            <span className="mt-1 h-3 w-3 rounded-full bg-[#B56F4D] dark:bg-[#D39570]" />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-6 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#8E8A82] transition-colors hover:text-[#B56F4D] md:flex dark:text-[#7E867F] dark:hover:text-[#D39570]"
      >
        <span className="h-px w-8 bg-current" />
        Scroll to explore
      </a>
    </section>
  );
}

export default Hero;