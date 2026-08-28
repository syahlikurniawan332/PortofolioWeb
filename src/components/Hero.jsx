function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl items-center px-6 py-16 md:py-24">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <div>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[#a85f3c] dark:bg-[#d99167]" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#667066] dark:text-[#aeb8af]">
              Junior Web Developer
            </p>
          </div>

          <h1 className="max-w-4xl text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-[#263128] dark:text-[#ebe8df]">
            Building practical
            <span className="block text-[#405a45] dark:text-[#91a894]">
              web experiences.
            </span>
          </h1>

          <div className="mt-9 grid max-w-3xl gap-8 border-t border-[#d8d2c5] pt-7 sm:grid-cols-[1fr_auto] sm:items-end dark:border-[#344238]">
            <p className="max-w-xl text-base leading-7 text-[#657066] md:text-lg dark:text-[#aeb8af]">
              Applied Informatics graduate focused on developing functional,
              maintainable web applications for real-world needs.
            </p>

            <p className="text-sm font-medium text-[#405a45] dark:text-[#91a894]">
              Medan, Indonesia
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-[#405a45] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#334b38] dark:bg-[#91a894] dark:text-[#172019] dark:hover:bg-[#a6b9a8]"
            >
              View selected work
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/cv.pdf"
              download="CV-Syahli-Kurniawan.pdf"
              className="inline-flex items-center rounded-full border border-[#cfc8ba] px-6 py-3 text-sm font-medium text-[#3d493f] transition-colors hover:border-[#a85f3c] hover:text-[#a85f3c] dark:border-[#405044] dark:text-[#d8ddd7] dark:hover:border-[#d99167] dark:hover:text-[#d99167]"
            >
              Download resume
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#d8d2c5] pt-5 dark:border-[#344238]">
            <span className="text-xs uppercase tracking-[0.16em] text-[#969084] dark:text-[#78847a]">
              Working with
            </span>

            {["Laravel", "React", "JavaScript", "MySQL", "Git"].map(
              (technology) => (
                <span
                  key={technology}
                  className="text-sm text-[#525f54] dark:text-[#b8c0b9]"
                >
                  {technology}
                </span>
              )
            )}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
          <div className="absolute -left-5 top-8 hidden h-[78%] w-px bg-[#b76d46] md:block dark:bg-[#d99167]" />

          <div className="relative overflow-hidden rounded-[2rem] bg-[#ded8ca] p-3 dark:bg-[#263229]">
            <img
              src="/images/profile/profile.jpg"
              alt="Syahli Kurniawan"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center"
            />
          </div>

          <div className="mt-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-[#263128] dark:text-[#ebe8df]">
                Syahli Kurniawan
              </p>

              <p className="mt-1 text-sm text-[#69736a] dark:text-[#a6b0a8]">
                Programmer · Web Developer
              </p>
            </div>

            <span className="mt-1 h-3 w-3 rounded-full bg-[#a85f3c] dark:bg-[#d99167]" />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-6 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#8a867d] transition-colors hover:text-[#a85f3c] md:flex dark:text-[#78847a] dark:hover:text-[#d99167]"
      >
        <span className="h-px w-8 bg-current" />
        Scroll to explore
      </a>
    </section>
  );
}

export default Hero;