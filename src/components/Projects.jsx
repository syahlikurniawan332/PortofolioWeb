import { useState } from "react";
import projects from "../data/projects";
import ProjectDetail from "./ProjectDetail";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -right-40 top-20 -z-10 h-96 w-96 rounded-full bg-violet-500/5 blur-3xl dark:bg-violet-500/10" />

      {/* Section Header */}
      <div className="max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-violet-500" />

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            Projects
          </p>
        </div>

        <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl dark:text-slate-100">
          Selected{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
            projects.
          </span>
        </h2>

        <p className="mt-4 text-slate-600 dark:text-slate-400">
          A selection of academic, personal, and collaborative projects that
          represent my experience in web development and software engineering.
        </p>
      </div>

      {/* Project Cards */}
      <div className="mt-14 grid gap-7 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-2xl hover:shadow-violet-500/5 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-violet-500/30"
          >
            {/* Project Image */}
            <div className="relative h-60 overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-950">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70" />

              {/* Project number */}
              <div className="absolute left-5 top-5 flex items-center gap-2">
                <span className="rounded-lg border border-white/20 bg-slate-950/60 px-3 py-1.5 font-mono text-xs font-medium text-white backdrop-blur">
                  {String(project.id).padStart(2, "0")}
                </span>

                <span className="rounded-lg border border-white/20 bg-slate-950/60 px-3 py-1.5 text-xs text-slate-200 backdrop-blur">
                  {project.category}
                </span>
              </div>

              {/* Type */}
              <span className="absolute bottom-5 right-5 rounded-full border border-white/20 bg-slate-950/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                {project.type}
              </span>
            </div>

            {/* Project Content */}
            <div className="p-6 md:p-7">
              {/* Title */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                  {project.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="mt-5 line-clamp-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/10 dark:hover:text-violet-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Bottom */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-500" />

                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {project.status}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="group/button inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-400 dark:hover:text-violet-300"
                >
                  View Details
                  <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;