const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Building responsive and accessible web interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend",
    description: "Developing application logic and server-side workflows.",
    skills: ["PHP", "Laravel"],
  },
  {
    number: "03",
    title: "Database & Tools",
    description: "Managing data and maintaining development workflows.",
    skills: ["MySQL", "Git", "GitHub"],
  },
  {
    number: "04",
    title: "Additional Experience",
    description: "Technologies explored through academic and personal work.",
    skills: ["Python", "Machine Learning", "NLP"],
  },
];

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <div className="flex items-start gap-3">
          <span className="mt-2 h-px w-8 bg-[#B56F4D] dark:bg-[#D39570]" />

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6F746C] dark:text-[#A7ADA5]">
            Skills
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#252A24] md:text-5xl dark:text-[#EFECE4]">
            Tools I use to turn
            <span className="block text-[#52624F] dark:text-[#A6B39F]">
              ideas into working software.
            </span>
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-[#6F746C] dark:text-[#A7ADA5]">
            Technologies I have worked with across professional, academic, and
            personal projects.
          </p>
        </div>
      </div>

      <div className="mt-14 border-t border-[#DDD8CC] dark:border-[#3A403A]">
        {skillGroups.map((group) => (
          <div
            key={group.number}
            className="grid gap-5 border-b border-[#DDD8CC] py-8 md:grid-cols-[100px_1fr_1.2fr] dark:border-[#3A403A]"
          >
            <span className="font-mono text-xs text-[#B56F4D] dark:text-[#D39570]">
              {group.number}
            </span>

            <div>
              <h3 className="text-lg font-semibold text-[#252A24] dark:text-[#EFECE4]">
                {group.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#6F746C] dark:text-[#A7ADA5]">
                {group.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#D2CCBF] px-3 py-1.5 text-sm text-[#586159] dark:border-[#3A403A] dark:text-[#B6BDB6]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;