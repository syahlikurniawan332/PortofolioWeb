import experiences from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 top-40 -z-10 h-80 w-80 rounded-full bg-violet-500/5 blur-3xl dark:bg-violet-500/10" />

      {/* Header */}
      <div className="max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-violet-500" />

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            Experience
          </p>
        </div>

        <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl dark:text-slate-100">
          Professional{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
            journey.
          </span>
        </h2>

        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Experiences across software development, networking, administration,
          and organizational collaboration.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mt-14">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 h-[calc(100%-8px)] w-px bg-slate-200 dark:bg-slate-800" />

        <div className="space-y-12">
          {experiences.map((item, index) => (
            <article
              key={`${item.company}-${item.role}`}
              className="group relative pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-white bg-violet-500 shadow-sm shadow-violet-500/30 dark:border-slate-950">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>

              {/* Content */}
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 backdrop-blur transition-all duration-300 group-hover:-translate-y-1 group-hover:border-violet-200 group-hover:shadow-xl group-hover:shadow-violet-500/5 md:p-7 dark:border-slate-800 dark:bg-slate-900/50 dark:group-hover:border-violet-500/30">
                {/* Top */}
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-violet-500 dark:text-violet-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="h-px w-5 bg-slate-300 dark:bg-slate-700" />
                    </div>

                    <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-slate-100">
                      {item.role}
                    </h3>

                    <p className="mt-1 font-medium text-violet-600 dark:text-violet-400">
                      {item.company}
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-400">
                    {item.period}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600 md:text-base dark:text-slate-400">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/10 dark:hover:text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;