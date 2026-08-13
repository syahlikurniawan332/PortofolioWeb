const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Building responsive and interactive web interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend",
    description: "Developing web applications and application logic.",
    skills: ["PHP", "Laravel"],
  },
  {
    number: "03",
    title: "Database & Tools",
    description: "Managing data and software development workflow.",
    skills: ["MySQL", "Git", "GitHub"],
  },
  {
    number: "04",
    title: "Other Experience",
    description: "Technologies used in academic and project work.",
    skills: ["Python", "Machine Learning", "NLP"],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -right-40 top-20 -z-10 h-80 w-80 rounded-full bg-violet-500/5 blur-3xl dark:bg-violet-500/10" />

      {/* Header */}
      <div className="max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-violet-500" />

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            Skills
          </p>
        </div>

        <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl dark:text-slate-100">
          Technologies I{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
            work with.
          </span>
        </h2>

        <p className="mt-4 text-slate-600 dark:text-slate-400">
          A selection of technologies and tools I have used across
          professional, academic, and personal projects.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/5 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-violet-500/30"
          >
            {/* Hover accent */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-violet-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Card Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-violet-500 dark:text-violet-400">
                  {group.number}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {group.title}
                </h3>
              </div>

              <span className="text-xl text-slate-300 transition-colors duration-300 group-hover:text-violet-500 dark:text-slate-700">
                ↗
              </span>
            </div>

            {/* Description */}
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
              {group.description}
            </p>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/10 dark:hover:text-violet-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="mt-10 flex items-center gap-4 border-t border-slate-200 pt-6 dark:border-slate-800">
        <span className="h-2 w-2 rounded-full bg-violet-500" />

        <p className="text-sm text-slate-500 dark:text-slate-400">
          Always learning, experimenting, and improving through real-world
          projects.
        </p>
      </div>
    </section>
  );
}

export default Skills;