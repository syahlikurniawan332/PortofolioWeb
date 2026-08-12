const skillGroups = [
  {
    title: 'Frontend',
    description: 'Building responsive and interactive web interfaces.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    description: 'Developing web applications and application logic.',
    skills: ['PHP', 'Laravel'],
  },
  {
    title: 'Database & Tools',
    description: 'Managing data and software development workflow.',
    skills: ['MySQL', 'Git', 'GitHub'],
  },
  {
    title: 'Other Experience',
    description: 'Technologies used in academic and project work.',
    skills: ['Python', 'Machine Learning', 'NLP'],
  },
]

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
          Skills
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
          Technologies I work with
        </h2>

        <p className="mt-4 text-zinc-400">
          A selection of technologies and tools I have used across
          professional, academic, and personal projects.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
          >
            <h3 className="text-lg font-semibold text-zinc-100">
              {group.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              {group.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-sm text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills