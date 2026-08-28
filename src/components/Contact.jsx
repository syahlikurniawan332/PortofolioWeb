function Contact() {
  const contacts = [
    {
      label: "Email",
      description: "Send me a message",
      value: "syahlikurniawan332@gmail.com",
      href: "mailto:syahlikurniawan332@gmail.com",
    },
    {
      label: "GitHub",
      description: "Explore my repositories",
      value: "github.com/syahlikurniawan332",
      href: "https://github.com/syahlikurniawan332",
    },
    {
      label: "LinkedIn",
      description: "Connect professionally",
      value: "linkedin.com/in/syahlikurniawan",
      href: "https://www.linkedin.com/in/syahlikurniawan",
    },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="overflow-hidden rounded-[2rem] bg-[#52624F] px-7 py-10 md:px-12 md:py-14 dark:bg-[#252A25]">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#E0A27D]" />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E7EBE4]">
                Contact
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] text-white md:text-6xl dark:text-[#EFECE4]">
              Let&apos;s build something
              <span className="block text-[#E0A27D]">
                useful together.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-[#E2E7E1] dark:text-[#A7ADA5]">
              I&apos;m open to software development opportunities,
              collaborative projects, and conversations about practical web
              applications.
            </p>
          </div>

          <div className="flex items-end md:justify-end">
            <a
              href="mailto:syahlikurniawan332@gmail.com"
              className="group inline-flex items-center gap-4 rounded-full bg-[#F6F3EC] px-6 py-3 text-sm font-semibold text-[#252A24]"
            >
              Start a conversation
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="mt-12 grid border-t border-white/20 md:grid-cols-3">
          {contacts.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.label === "Email" ? undefined : "_blank"}
              rel={contact.label === "Email" ? undefined : "noreferrer"}
              className={`group py-6 md:px-6 ${
                index !== contacts.length - 1
                  ? "border-b border-white/20 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <div className="flex justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white">
                    {contact.label}
                  </p>

                  <p className="mt-1 text-xs text-[#D4DDD4]">
                    {contact.description}
                  </p>

                  <p className="mt-4 break-all text-sm text-[#E8B18E]">
                    {contact.value}
                  </p>
                </div>

                <span className="text-[#E8B18E] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;