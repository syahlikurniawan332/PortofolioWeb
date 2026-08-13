function ProjectDetail({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 px-4 py-8 backdrop-blur-md dark:bg-slate-950/75"
      onClick={onClose}
    >
      <div
        className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/20 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/40"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="relative border-b border-slate-200 p-6 md:p-8 dark:border-slate-800">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative flex items-start justify-between gap-6">
            <div>
              {/* Category */}
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
                  {project.category}
                </p>

                <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />

                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {project.type}
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 md:text-4xl dark:text-slate-100">
                {project.title}
              </h2>

              <p className="mt-2 text-slate-500 dark:text-slate-400">
                {project.subtitle}
              </p>
            </div>

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-lg text-slate-500 transition-all hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-100"
              aria-label="Close project details"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12 p-6 md:p-8">
          {/* Overview & Contribution */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Overview */}
            <section>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-violet-500 dark:text-violet-400">
                  01
                </span>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Overview
                </h3>
              </div>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
            </section>

            {/* Contribution */}
            <section>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-violet-500 dark:text-violet-400">
                  02
                </span>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  My Contribution
                </h3>
              </div>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                {project.contribution}
              </p>
            </section>
          </div>

          {/* Features */}
          <section>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-violet-500 dark:text-violet-400">
                03
              </span>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Key Features
              </h3>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature, index) => (
                <div
                  key={feature}
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition-all duration-200 hover:border-violet-200 hover:bg-violet-50/50 dark:border-slate-800 dark:bg-slate-800/40 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 font-mono text-xs text-violet-600 dark:text-violet-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-violet-500 dark:text-violet-400">
                04
              </span>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Technologies
              </h3>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>

          {/* Screenshots */}
          <section>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-violet-500 dark:text-violet-400">
                  05
                </span>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Screenshots
                </h3>
              </div>

              <span className="text-xs text-slate-400">
                {project.screenshots.length} images
              </span>
            </div>

            <div className="mt-5 space-y-5">
              {project.screenshots.map((screenshot, index) => (
                <div
                  key={screenshot}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-950"
                >
                  <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-800">
                    <span className="font-mono text-xs text-slate-400">
                      screenshot_{String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs text-slate-400">
                      {index + 1} / {project.screenshots.length}
                    </span>
                  </div>

                  <img
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <section className="border-t border-slate-200 pt-6 dark:border-slate-800">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              {/* Status */}
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                  Project Status
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-500" />

                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* GitHub */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20"
                >
                  View on GitHub
                  <span>↗</span>
                </a>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;