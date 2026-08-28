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
      value: "github.com/syahlikurniawan",
      href: "https://github.com/syahlikurniawan",
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
      <div className="rounded-[2rem] bg-[#405a45] px-7 py-10 md:px-12 md:py-14 dark:bg-[#263229]">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d5ddcf] dark:text-[#91a894]">
              Contact
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white md:text-6xl">
              Have an opportunity
              <span className="block text-[#e6b493]">
                worth discussing?
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-[#d7ded7]">
              I am open to software development opportunities, collaborative
              projects, and conversations around building practical digital
              products.
            </p>
          </div>

          <div className="flex items-end">
            <a
              href="mailto:syahlikurniawan332@gmail.com"
              className="group inline-flex items-center gap-4 rounded-full bg-[#f3efe6] px-6 py-3 text-sm font-semibold text-[#263128] transition-transform hover:-translate-y-0.5"
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
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white">
                    {contact.label}
                  </p>

                  <p className="mt-1 text-xs text-[#c4cec5]">
                    {contact.description}
                  </p>

                  <p className="mt-4 break-all text-sm text-[#e6b493]">
                    {contact.value}
                  </p>
                </div>

                <span className="text-[#e6b493] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
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