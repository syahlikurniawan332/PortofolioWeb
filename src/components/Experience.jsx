import experiences from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#F6F3EC] dark:bg-[#1D211D]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-10 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#B56F4D] dark:text-[#D39570]">
              Experience
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[#252A24] dark:text-[#EFECE4] md:text-4xl">
              Where I've worked.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-[#6F746C] dark:text-[#A7ADA5] md:justify-self-end">
            Experience across software development, networking, administration,
            customer support, and organizational collaboration.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="group rounded-2xl border border-[#DDD8CC] bg-[#FFFCF6] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B8B1A3] dark:border-[#3A403A] dark:bg-[#252A25] dark:hover:border-[#555D55]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs font-semibold tracking-[0.15em] text-[#B56F4D] dark:text-[#D39570]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-xs text-[#6F746C] dark:text-[#A7ADA5]">
                  {experience.period}
                </span>
              </div>

              <div className="mt-5">
                <h3 className="text-lg font-semibold text-[#252A24] dark:text-[#EFECE4]">
                  {experience.role}
                </h3>

                <p className="mt-1 text-sm font-medium text-[#52624F] dark:text-[#A6B39F]">
                  {experience.company}
                </p>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#6F746C] dark:text-[#A7ADA5]">
                {experience.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {experience.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#DDD8CC] px-2.5 py-1 text-[11px] text-[#6F746C] dark:border-[#3A403A] dark:text-[#A7ADA5]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}