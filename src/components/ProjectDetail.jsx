import { useEffect } from "react";

function ProjectDetail({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#1D211D]/75 p-4 backdrop-blur-sm md:p-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#F6F3EC] shadow-2xl dark:bg-[#1D211D]">
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#DDD8CC] bg-[#F6F3EC]/95 px-6 py-4 backdrop-blur-md dark:border-[#3A403A] dark:bg-[#1D211D]/95">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B56F4D] dark:text-[#D39570]">
              Project {String(project.id).padStart(2, "0")}
            </p>

            <h2 className="mt-1 text-lg font-semibold text-[#252A24] dark:text-[#EFECE4]">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[#D2CCBF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#52624F] hover:border-[#B56F4D] hover:text-[#B56F4D] dark:border-[#3A403A] dark:text-[#A7ADA5]"
          >
            Close
          </button>
        </div>

        <div className="p-6 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="overflow-hidden rounded-[1.5rem] bg-[#E5DFD3] dark:bg-[#252A25]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-[#D2CCBF] px-3 py-1.5 text-xs text-[#586159] dark:border-[#3A403A] dark:text-[#A7ADA5]">
                    {project.category}
                  </span>

                  <span className="rounded-full border border-[#D2CCBF] px-3 py-1.5 text-xs text-[#586159] dark:border-[#3A403A] dark:text-[#A7ADA5]">
                    {project.type}
                  </span>

                  <span className="rounded-full border border-[#D2CCBF] px-3 py-1.5 text-xs text-[#586159] dark:border-[#3A403A] dark:text-[#A7ADA5]">
                    {project.status}
                  </span>
                </div>

                <h1 className="mt-6 text-4xl font-semibold tracking-[-0.045em] text-[#252A24] dark:text-[#EFECE4]">
                  {project.title}
                </h1>

                <p className="mt-2 text-[#52624F] dark:text-[#A6B39F]">
                  {project.subtitle}
                </p>

                <p className="mt-6 leading-7 text-[#6F746C] dark:text-[#A7ADA5]">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#52624F] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#465443] dark:bg-[#A6B39F] dark:text-[#1D211D]"
                  >
                    Live demo ↗
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#D2CCBF] px-5 py-2.5 text-sm font-semibold text-[#52624F] hover:border-[#B56F4D] hover:text-[#B56F4D] dark:border-[#3A403A] dark:text-[#A7ADA5]"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-10 border-t border-[#DDD8CC] pt-10 md:grid-cols-2 dark:border-[#3A403A]">
            <div>
              <p className="font-mono text-xs text-[#B56F4D] dark:text-[#D39570]">
                01
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#252A24] dark:text-[#EFECE4]">
                Overview
              </h3>

              <p className="mt-4 leading-7 text-[#6F746C] dark:text-[#A7ADA5]">
                {project.description}
              </p>
            </div>

            <div>
              <p className="font-mono text-xs text-[#B56F4D] dark:text-[#D39570]">
                02
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#252A24] dark:text-[#EFECE4]">
                My Contribution
              </h3>

              <p className="mt-4 leading-7 text-[#6F746C] dark:text-[#A7ADA5]">
                {project.contribution}
              </p>
            </div>
          </div>

          <div className="mt-14">
            <p className="font-mono text-xs text-[#B56F4D] dark:text-[#D39570]">
              03
            </p>

            <h3 className="mt-3 text-xl font-semibold text-[#252A24] dark:text-[#EFECE4]">
              Key Features
            </h3>

            <div className="mt-6 grid md:grid-cols-2">
              {project.features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex gap-5 border-b border-[#DDD8CC] py-5 md:odd:pr-6 md:even:pl-6 dark:border-[#3A403A]"
                >
                  <span className="font-mono text-xs text-[#B56F4D] dark:text-[#D39570]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-[#586159] dark:text-[#B6BDB6]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <p className="font-mono text-xs text-[#B56F4D] dark:text-[#D39570]">
              04
            </p>

            <h3 className="mt-3 text-xl font-semibold text-[#252A24] dark:text-[#EFECE4]">
              Technologies
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-[#D2CCBF] px-4 py-2 text-sm text-[#586159] dark:border-[#3A403A] dark:text-[#B6BDB6]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {project.screenshots?.length > 0 && (
            <div className="mt-14">
              <p className="font-mono text-xs text-[#B56F4D] dark:text-[#D39570]">
                05
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#252A24] dark:text-[#EFECE4]">
                Screenshots
              </h3>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {project.screenshots.map((screenshot, index) => (
                  <div
                    key={screenshot}
                    className="overflow-hidden rounded-[1.25rem] bg-[#E5DFD3] dark:bg-[#252A25]"
                  >
                    <img
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;