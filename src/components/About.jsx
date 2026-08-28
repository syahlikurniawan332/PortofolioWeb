function About() {
  const facts = [
    {
      number: "01",
      label: "Education",
      value: "Applied Bachelor in Informatics Engineering",
      detail: "Politeknik Negeri Lhokseumawe · GPA 3.53",
    },
    {
      number: "02",
      label: "Current Role",
      value: "Programmer Intern",
      detail: "Balai Diklat Industri Medan",
    },
    {
      number: "03",
      label: "Current Focus",
      value: "Web Development",
      detail: "Learning Linux & DevOps",
    },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid gap-12 border-b border-[#DDD8CC] pb-14 md:grid-cols-[0.8fr_1.2fr] md:gap-20 dark:border-[#3A403A]">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#B56F4D] dark:bg-[#D39570]" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6F746C] dark:text-[#A7ADA5]">
              About
            </p>
          </div>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#252A24] md:text-5xl dark:text-[#EFECE4]">
            Learning by building
            <span className="block text-[#52624F] dark:text-[#A6B39F]">
              practical solutions.
            </span>
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-[#6F746C] dark:text-[#A7ADA5]">
          <p>
            I am an Applied Bachelor of Informatics Engineering graduate from
            Politeknik Negeri Lhokseumawe with a GPA of 3.53. My experience
            spans web development, data administration, operational support,
            and user-facing services.
          </p>

          <p>
            I am currently gaining professional experience as a Programmer
            Intern at Balai Diklat Industri Medan, where I contribute to web
            application development, system improvements, testing, and
            deployment.
          </p>

          <p>
            My current focus is strengthening my web development fundamentals
            while expanding my understanding of Linux, deployment workflows,
            and DevOps practices.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-3">
        {facts.map((item, index) => (
          <div
            key={item.number}
            className={`py-8 sm:px-7 ${
              index !== 2
                ? "border-b border-[#DDD8CC] sm:border-b-0 sm:border-r dark:border-[#3A403A]"
                : ""
            }`}
          >
            <span className="font-mono text-xs text-[#B56F4D] dark:text-[#D39570]">
              {item.number}
            </span>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#8E8A82] dark:text-[#7E867F]">
              {item.label}
            </p>

            <p className="mt-2 font-semibold leading-6 text-[#252A24] dark:text-[#EFECE4]">
              {item.value}
            </p>

            <p className="mt-2 text-sm leading-6 text-[#6F746C] dark:text-[#A7ADA5]">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;