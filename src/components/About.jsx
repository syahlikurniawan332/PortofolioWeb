function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid gap-12 border-b border-[#d8d2c5] pb-14 md:grid-cols-[0.8fr_1.2fr] md:gap-20 dark:border-[#344238]">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#a85f3c] dark:bg-[#d99167]" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#667066] dark:text-[#aeb8af]">
              About
            </p>
          </div>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#263128] md:text-5xl dark:text-[#ebe8df]">
            Learning by building
            <span className="block text-[#405a45] dark:text-[#91a894]">
              practical solutions.
            </span>
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-[#667066] dark:text-[#aeb8af]">
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

      <div className="grid gap-0 sm:grid-cols-3">
        {[
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
        ].map((item, index) => (
          <div
            key={item.number}
            className={`py-8 sm:px-7 ${
              index !== 2
                ? "border-b border-[#d8d2c5] sm:border-b-0 sm:border-r dark:border-[#344238]"
                : ""
            }`}
          >
            <span className="font-mono text-xs text-[#a85f3c] dark:text-[#d99167]">
              {item.number}
            </span>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#8d8b82] dark:text-[#78847a]">
              {item.label}
            </p>

            <p className="mt-2 font-semibold leading-6 text-[#263128] dark:text-[#ebe8df]">
              {item.value}
            </p>

            <p className="mt-2 text-sm leading-6 text-[#667066] dark:text-[#aeb8af]">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;