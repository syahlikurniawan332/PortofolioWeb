function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-violet-500/5 blur-3xl dark:bg-violet-500/10" />

      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-8 backdrop-blur md:p-12 dark:border-slate-800 dark:bg-slate-900/50">
        {/* Decorative grid */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-30 dark:opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(139 92 246) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage:
              "linear-gradient(to left, black, transparent)",
          }}
        />

        <div className="relative">
          {/* Header */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-violet-500" />

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
                Contact
              </p>
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl dark:text-slate-100">
              Let's build something{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                together.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 md:text-lg dark:text-slate-400">
              Jika kamu ingin berdiskusi mengenai project, peluang kerja,
              atau sekadar ingin terhubung, silakan hubungi saya melalui
              salah satu platform berikut.
            </p>
          </div>

          {/* Contact Links */}
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {/* Email */}
            <a
              href="mailto:syahlikurniawan332@gmail.com"
              className="group rounded-2xl border border-slate-200 bg-white/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/5 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-violet-500/30"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                  @
                </div>

                <span className="text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-slate-600">
                  ↗
                </span>
              </div>

              <p className="mt-5 text-sm font-semibold text-slate-900 dark:text-slate-100">
                Email
              </p>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Send me an email
              </p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/syahlikurniawan"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/5 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-violet-500/30"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-sm font-bold text-violet-600 dark:text-violet-400">
                  GH
                </div>

                <span className="text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-slate-600">
                  ↗
                </span>
              </div>

              <p className="mt-5 text-sm font-semibold text-slate-900 dark:text-slate-100">
                GitHub
              </p>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                View my repositories
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/syahlikurniawan/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/5 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-violet-500/30"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-sm font-bold text-violet-600 dark:text-violet-400">
                  in
                </div>

                <span className="text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-slate-600">
                  ↗
                </span>
              </div>

              <p className="mt-5 text-sm font-semibold text-slate-900 dark:text-slate-100">
                LinkedIn
              </p>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Connect professionally
              </p>
            </a>
          </div>

          {/* Bottom status */}
          <div className="mt-8 flex items-center gap-3 border-t border-slate-200 pt-6 dark:border-slate-800">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-500" />
            </span>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Open to opportunities and meaningful collaborations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;