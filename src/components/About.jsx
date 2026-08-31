const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Vue.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "Flask", "REST API"],
  },
  {
    title: "Database & Tools",
    skills: ["MySQL", "Git", "GitHub"],
  },
  {
    title: "DevOps Foundations",
    skills: ["Linux", "Deployment"],
  },
  {
    title: "Additional Experience",
    skills: ["Python", "Machine Learning", "NLP"],
  },
];

const facts = [
  {
    label: "Education",
    value: "Bachelor of Applied Science",
    detail: "Informatics Engineering · GPA 3.53",
  },
  {
    label: "Current Role",
    value: "Programmer Intern",
    detail: "Balai Diklat Industri Medan",
  },
  {
    label: "Current Focus",
    value: "Web Development",
    detail: "Building Linux & DevOps Foundations",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-y border-[#DDD8CC] bg-[#FFFCF6] dark:border-[#3A403A] dark:bg-[#252A25]"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        {/* ABOUT */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#B56F4D] dark:text-[#D39570]">
            About
          </p>

          <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[#252A24] dark:text-[#EFECE4] md:text-4xl">
            Learning by building practical solutions.
          </h2>

          <div className="mt-6 max-w-xl space-y-4 text-[15px] leading-7 text-[#6F746C] dark:text-[#A7ADA5]">
            <p>
              I am a Bachelor of Applied Science graduate in Informatics
              Engineering from Politeknik Negeri Lhokseumawe with a GPA of 3.53.
              I enjoy turning ideas and real-world requirements into functional
              web applications.
            </p>

            <p>
              Currently, I am working as a Programmer Intern at Balai Diklat
              Industri Medan, where I gain hands-on experience in web
              application development, system improvement, debugging, databases,
              Git, and deployment. Alongside web development, I am building my
              foundation in Linux and DevOps through continuous hands-on
              learning.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="border-t border-[#DDD8CC] pt-4 dark:border-[#3A403A]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#B56F4D] dark:text-[#D39570]">
                  {fact.label}
                </p>

                <p className="mt-2 text-sm font-semibold text-[#252A24] dark:text-[#EFECE4]">
                  {fact.value}
                </p>

                <p className="mt-1 text-xs leading-5 text-[#6F746C] dark:text-[#A7ADA5]">
                  {fact.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SKILLS */}
        <div
          id="skills"
          className="lg:border-l lg:border-[#DDD8CC] lg:pl-12 dark:lg:border-[#3A403A]"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#52624F] dark:text-[#A6B39F]">
            Skills
          </p>

          <h3 className="max-w-md text-2xl font-semibold leading-tight tracking-tight text-[#252A24] dark:text-[#EFECE4]">
            Tools I use to turn ideas into working software.
          </h3>

          <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold text-[#252A24] dark:text-[#EFECE4]">
                  {group.title}
                </h4>

                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#DDD8CC] bg-[#F6F3EC] px-3 py-1.5 text-xs text-[#6F746C] dark:border-[#3A403A] dark:bg-[#1D211D] dark:text-[#A7ADA5]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
