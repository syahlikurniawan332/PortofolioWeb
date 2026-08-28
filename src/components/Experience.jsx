import experiences from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#a85f3c] dark:bg-[#d99167]" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#667066] dark:text-[#aeb8af]">
              Experience
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#263128] md:text-5xl dark:text-[#ebe8df]">
            Experience across
            <span className="block text-[#405a45] dark:text-[#91a894]">
              technology and operations.
            </span>
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-[#667066] dark:text-[#aeb8af]">
            A journey through software development, networking, administration,
            customer support, and organizational collaboration.
          </p>
        </div>
      </div>

      <div className="mt-14 border-t border-[#d8d2c5] dark:border-[#344238]">
        {experiences.map((item, index) => (
          <article
            key={`${item.company}-${item.role}`}
            className="grid gap-5 border-b border-[#d8d2c5] py-9 md:grid-cols-[100px_1fr_2fr] md:gap-8 dark:border-[#344238]"
          >
            <span className="font-mono text-xs text-[#a85f3c] dark:text-[#d99167]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-[#89887f] dark:text-[#78847a]">
                {item.period}
              </p>

              <h3 className="mt-3 text-lg font-semibold text-[#263128] dark:text-[#ebe8df]">
                {item.role}
              </h3>

              <p className="mt-1 text-sm font-medium text-[#405a45] dark:text-[#91a894]">
                {item.company}
              </p>
            </div>

            <div>
              <p className="max-w-2xl leading-7 text-[#667066] dark:text-[#aeb8af]">
                {item.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-[#7a817a] dark:text-[#9ba59d]"
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