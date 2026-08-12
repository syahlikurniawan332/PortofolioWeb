function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-12">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
            Let's connect
          </h2>

          <p className="mt-4 leading-7 text-zinc-400">
            Jika kamu ingin berdiskusi mengenai project, peluang kerja,
            atau sekadar ingin terhubung, silakan hubungi saya melalui
            salah satu platform berikut.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:emailkamu@example.com"
            className="rounded-lg bg-violet-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-400"
          >
            Email Me
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-800"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-800"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact