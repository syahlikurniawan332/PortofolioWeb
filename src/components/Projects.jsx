import { useState } from "react";
import projects from "../data/projects";
import ProjectDetail from "./ProjectDetail";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <div className="grid gap-8 border-b border-[#DDD8CC] pb-10 md:grid-cols-[0.8fr_1.2fr] dark:border-[#3A403A]">
        <div className="flex items-start gap-3">
          <span className="mt-2 h-px w-8 bg-[#B56F4D] dark:bg-[#D39570]" />

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6F746C] dark:text-[#A7ADA5]">
            Selected Work
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#252A24] md:text-5xl dark:text-[#EFECE4]">
            Projects built around
            <span className="block text-[#52624F] dark:text-[#A6B39F]">
              real problems and practical needs.
            </span>
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-[#6F746C] dark:text-[#A7ADA5]">
            A selection of individual, academic, and collaborative projects
            covering web development, backend systems, and applied machine
            learning.
          </p>
        </div>
      </div>

      {projects.map((project) => (
        <article
          key={project.id}
          className="group grid gap-7 border-b border-[#DDD8CC] py-10 md:grid-cols-[0.75fr_1.25fr] md:items-center md:py-14 dark:border-[#3A403A]"
        >
          <div className="relative overflow-hidden rounded-[1.5rem] bg-[#E5DFD3] dark:bg-[#252A25]">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />

            <div className="absolute left-4 top-4 flex gap-2">
              <span className="rounded-full bg-[#1D211D]/85 px-3 py-1.5 font-mono text-xs text-white">
                {String(project.id).padStart(2, "0")}
              </span>

              <span className="rounded-full bg-[#F6F3EC]/90 px-3 py-1.5 text-xs font-medium text-[#52624F]">
                {project.category}
              </span>
            </div>
          </div>

          <div className="md:pl-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#252A24] md:text-3xl dark:text-[#EFECE4]">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-[#747A73] dark:text-[#969F97]">
                  {project.subtitle}
                </p>
              </div>

              <span className="rounded-full border border-[#D2CCBF] px-3 py-1.5 text-xs text-[#586159] dark:border-[#3A403A] dark:text-[#A7ADA5]">
                {project.type}
              </span>
            </div>

            <p className="mt-6 leading-7 text-[#6F746C] dark:text-[#A7ADA5]">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="text-xs font-medium text-[#6F746C] dark:text-[#A7ADA5]"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${
                    project.status === "Live"
                      ? "bg-[#52624F] dark:bg-[#A6B39F]"
                      : "bg-[#B56F4D] dark:bg-[#D39570]"
                  }`}
                />

                <span className="text-xs text-[#6F746C] dark:text-[#A7ADA5]">
                  {project.status}
                </span>
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="group/button flex items-center gap-3 text-sm font-semibold text-[#52624F] hover:text-[#B56F4D] dark:text-[#A6B39F] dark:hover:text-[#D39570]"
              >
                View case study
                <span className="transition-transform group-hover/button:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </article>
      ))}

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