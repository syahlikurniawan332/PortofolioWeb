import { useState } from "react";
import projects from "../data/projects";
import ProjectDetail from "./ProjectDetail";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="border-y border-[#DDD8CC] bg-[#FFFCF6] dark:border-[#3A403A] dark:bg-[#252A25]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-10 grid gap-5 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#B56F4D] dark:text-[#D39570]">
                Selected Work
              </p>

              <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[#252A24] dark:text-[#EFECE4] md:text-4xl">
                Projects built around real problems and practical needs.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#6F746C] dark:text-[#A7ADA5] md:justify-self-end">
              A selection of academic, personal, and collaborative projects
              covering web development and applied machine learning.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-2xl border border-[#DDD8CC] bg-[#F6F3EC] transition duration-300 hover:-translate-y-1 hover:border-[#B8B1A3] dark:border-[#3A403A] dark:bg-[#1D211D] dark:hover:border-[#555D55]"
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="block w-full cursor-pointer text-left"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-[#E9E4D9] dark:bg-[#202520]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#52624F] dark:text-[#A6B39F]">
                        {project.category}
                      </span>

                      <div className="flex items-center gap-2 text-xs text-[#6F746C] dark:text-[#A7ADA5]">
                        <span
                          className={`h-2 w-2 rounded-full ${
                            project.status === "Live"
                              ? "bg-[#52624F] dark:bg-[#A6B39F]"
                              : "bg-[#B56F4D] dark:bg-[#D39570]"
                          }`}
                        />

                        {project.status}
                      </div>
                    </div>

                    <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#252A24] dark:text-[#EFECE4]">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-sm text-[#6F746C] dark:text-[#A7ADA5]">
                      {project.subtitle}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-[#DDD8CC] pt-4 dark:border-[#3A403A]">
                      <span className="text-xs text-[#6F746C] dark:text-[#A7ADA5]">
                        {project.type}
                      </span>

                      <span className="text-sm font-semibold text-[#B56F4D] transition group-hover:translate-x-1 dark:text-[#D39570]">
                        View case study →
                      </span>
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}