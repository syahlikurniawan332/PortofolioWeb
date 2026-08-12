import experiences from '../data/experience'

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
          Experience
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
          Professional journey
        </h2>

        <p className="mt-4 text-zinc-400">
          Experiences across software development, networking, administration,
          and organizational collaboration.
        </p>
      </div>

      <div className="mt-12 space-y-6">
        {experiences.map((item) => (
          <article
            key={item.company}
            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
          >
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
              <div>
                <h3 className="text-xl font-semibold text-zinc-100">
                  {item.role}
                </h3>
                <p className="mt-1 text-zinc-400">{item.company}</p>
              </div>

              <span className="rounded-md border border-zinc-700 px-3 py-1 text-sm text-zinc-400">
                {item.period}
              </span>
            </div>

            <p className="mt-5 leading-7 text-zinc-400">
              {item.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience