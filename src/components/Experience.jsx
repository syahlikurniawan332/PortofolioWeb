import experiences from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <div className="flex items-start gap-3">
          <span className="mt-2 h-px w-8 bg-[#B56F4D] dark:bg-[#D39570]" />

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6F746C] dark:text-[#A7ADA5]">
            Experience
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#252A24] md:text-5xl dark:text-[#EFECE4]">
            Experience across
            <span className="block text-[#52624F] dark:text-[#A6B39F]">
              technology and operations.
            </span>
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-[#6F746C] dark:text-[#A7ADA5]">
            A journey through software development, networking, administration,
            customer support, and organizational collaboration.
          </p>
        </div>
      </div>

      <div className="mt-14 border-t border-[#DDD8CC] dark:border-[#3A403A]">
        {experiences.map((item, index) => (
          <article
            key={`${item.company}-${item.role}`}
            className="grid gap-5 border-b border-[#DDD8CC] py-9 md:grid-cols-[100px_1fr_2fr] md:gap-8 dark:border-[#3A403A]"
          >
            <span className="font-mono text-xs text-[#B56F4D] dark:text-[#D39570]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-[#8E8A82] dark:text-[#7E867F]">
                {item.period}
              </p>

              <h3 className="mt-3 text-lg font-semibold text-[#252A24] dark:text-[#EFECE4]">
                {item.role}
              </h3>

              <p className="mt-1 text-sm font-medium text-[#52624F] dark:text-[#A6B39F]">
                {item.company}
              </p>
            </div>

            <div>
              <p className="leading-7 text-[#6F746C] dark:text-[#A7ADA5]">
                {item.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-[#747A73] dark:text-[#969F97]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;