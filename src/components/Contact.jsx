const contacts = [
  {
    label: "Email",
    value: "syahlikurniawan332@gmail.com",
    href: "mailto:syahlikurniawan332@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/syahlikurniawan332",
    href: "https://github.com/syahlikurniawan332",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/syahlikurniawan",
    href: "https://www.linkedin.com/in/syahlikurniawan",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#52624F] text-white dark:bg-[#1D211D]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr_0.9fr] md:items-center md:py-20">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#E1B99F]">
            Contact
          </p>

          <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Let's build something useful together.
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-6 text-white/70">
            I'm open to software development opportunities, collaborative
            projects, and conversations about practical web applications.
          </p>

          <a
            href="mailto:syahlikurniawan332@gmail.com"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FFFCF6] px-5 py-2.5 text-sm font-semibold text-[#252A24] transition hover:-translate-y-0.5"
          >
            Start a conversation
            <span>↗</span>
          </a>
        </div>

        <div className="border-t border-white/20 md:border-l md:border-t-0 md:pl-10">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("http")
                  ? "noreferrer"
                  : undefined
              }
              className="group flex items-center justify-between gap-5 border-b border-white/20 py-5"
            >
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E1B99F]">
                  {contact.label}
                </p>

                <p className="mt-1 truncate text-sm text-white/80">
                  {contact.value}
                </p>
              </div>

              <span className="shrink-0 text-lg transition group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}