function ProjectDetail({ project, onClose }) {
  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 px-4 py-8 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="mx-auto max-w-4xl rounded-2xl border border-zinc-800 bg-zinc-950"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-6 border-b border-zinc-800 p-6 md:p-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
              {project.category}
            </p>

            <h2 className="mt-2 text-2xl font-bold text-zinc-100 md:text-3xl">
              {project.title}
            </h2>

            <p className="mt-1 text-zinc-500">
              {project.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-zinc-800 px-3 py-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
            aria-label="Close project details"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="space-y-10 p-6 md:p-8">
          {/* Overview */}
          <section>
            <h3 className="text-lg font-semibold text-zinc-100">
              Overview
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              {project.description}
            </p>
          </section>

          {/* Contribution */}
          <section>
            <h3 className="text-lg font-semibold text-zinc-100">
              My Contribution
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              {project.contribution}
            </p>
          </section>

          {/* Features */}
          <section>
            <h3 className="text-lg font-semibold text-zinc-100">
              Key Features
            </h3>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 text-sm text-zinc-400"
                >
                  {feature}
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section>
            <h3 className="text-lg font-semibold text-zinc-100">
              Technologies
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md bg-zinc-800 px-3 py-1.5 text-sm text-zinc-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>

          {/* Screenshots */}
          <section>
            <h3 className="text-lg font-semibold text-zinc-100">
              Screenshots
            </h3>

            <div className="mt-4 grid gap-4">
              {project.screenshots.map((screenshot, index) => (
                <img
                  key={screenshot}
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full rounded-xl border border-zinc-800"
                />
              ))}
            </div>
          </section>

          {/* Status */}
          <section className="border-t border-zinc-800 pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-zinc-500">
                  Project Status
                </p>

                <p className="mt-1 font-medium text-zinc-200">
                  {project.status}
                </p>
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:bg-zinc-800"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail