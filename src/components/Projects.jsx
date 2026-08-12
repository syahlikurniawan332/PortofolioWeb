import { useState } from "react";
import projects from "../data/projects";
import ProjectDetail from "./ProjectDetail";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      {/* Section Header */}
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
          Projects
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
          Selected projects
        </h2>

        <p className="mt-4 text-zinc-400">
          A selection of academic, personal, and collaborative projects that
          represent my experience in web development and software engineering.
        </p>
      </div>

      {/* Project Cards */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50"
          >
            {/* Project Preview */}
            {/* Project Preview */}
            <div className="h-56 overflow-hidden border-b border-zinc-800 bg-zinc-950">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-violet-400">
                    {String(project.id).padStart(2, "0")}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-zinc-100">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    {project.subtitle}
                  </p>
                </div>

                <span className="shrink-0 rounded-md border border-zinc-700 px-2.5 py-1 text-xs text-zinc-400">
                  {project.type}
                </span>
              </div>

              <p className="mt-5 line-clamp-3 text-sm leading-6 text-zinc-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project Status */}
              <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-5">
                <span className="text-xs text-zinc-500">
                  Status: {project.status}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
                >
                  View Details →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
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
