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
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#a85f3c] dark:bg-[#d99167]" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#667066] dark:text-[#aeb8af]">
              Skills
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#263128] md:text-5xl dark:text-[#ebe8df]">
            Tools I use to turn
            <span className="block text-[#405a45] dark:text-[#91a894]">
              ideas into working software.
            </span>
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-[#667066] dark:text-[#aeb8af]">
            Technologies I have worked with across professional, academic, and
            personal projects.
          </p>
        </div>
      </div>

      <div className="mt-14 border-t border-[#d8d2c5] dark:border-[#344238]">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="grid gap-5 border-b border-[#d8d2c5] py-8 md:grid-cols-[100px_1fr_1.2fr] md:items-start dark:border-[#344238]"
          >
            <span className="font-mono text-xs text-[#a85f3c] dark:text-[#d99167]">
              {group.number}
            </span>

            <div>
              <h3 className="text-lg font-semibold text-[#263128] dark:text-[#ebe8df]">
                {group.title}
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-[#667066] dark:text-[#aeb8af]">
                {group.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#d2ccbf] px-3 py-1.5 text-sm text-[#566159] transition-colors hover:border-[#405a45] hover:text-[#405a45] dark:border-[#405044] dark:text-[#b7c0b8] dark:hover:border-[#91a894] dark:hover:text-[#91a894]"
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