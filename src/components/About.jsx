function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-violet-500/5 blur-3xl dark:bg-violet-500/10" />

      <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-72 w-72 rounded-full bg-indigo-400/5 blur-3xl dark:bg-indigo-500/10" />

      {/* Section heading */}
      <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-violet-500" />

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
              About Me
            </p>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-4xl lg:text-5xl dark:text-slate-100">
            Building practical web applications with a{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
              continuous learning mindset.
            </span>
          </h2>

          {/* Academic highlight */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-200 bg-violet-50 dark:border-violet-500/20 dark:bg-violet-500/10">
              <span className="text-xl font-bold text-violet-600 dark:text-violet-400">
                3.53
              </span>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                Academic Achievement
              </p>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                GPA · D4 Teknik Informatika
              </p>
            </div>
          </div>
        </div>

        {/* Right - Description */}
        <div className="space-y-5 text-base leading-7 text-slate-600 dark:text-slate-400">
          <p>
            Saya merupakan lulusan D4 Teknik Informatika dari Politeknik
            Negeri Lhokseumawe dengan IPK 3,53. Saya memiliki pengalaman
            dalam pengembangan aplikasi web, administrasi data, dukungan
            operasional, serta pelayanan pengguna.
          </p>

          <p>
            Saat ini saya bekerja sebagai Programmer di Balai Diklat Industri
            Medan, dengan fokus pada pengembangan dan pemeliharaan aplikasi web.
            Saya menggunakan teknologi seperti PHP, Laravel, JavaScript, MySQL,
            dan Git dalam proses pengembangan.
          </p>

          <p>
            Saat ini saya berfokus memperdalam kemampuan di bidang web
            development, sekaligus mulai mempelajari Linux dan DevOps untuk
            memahami proses pengembangan dan deployment aplikasi secara lebih
            menyeluruh.
          </p>
        </div>
      </div>

      {/* Profile snapshot */}
      <div className="mt-16">
        <div className="mb-5 flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
            Profile Snapshot
          </p>

          <span className="hidden h-px flex-1 bg-slate-200 sm:ml-6 sm:block dark:bg-slate-800" />
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {/* Education */}
          <div className="group rounded-2xl border border-slate-200 bg-white/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/5 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-violet-500/30">
            <div className="flex items-start justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-sm font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                01
              </span>

              <span className="text-xl text-slate-300 transition-colors group-hover:text-violet-500 dark:text-slate-700">
                ↗
              </span>
            </div>

            <p className="mt-6 text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Education
            </p>

            <p className="mt-2 font-semibold text-slate-900 dark:text-slate-100">
              D4 Teknik Informatika
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Politeknik Negeri Lhokseumawe
            </p>
          </div>

          {/* Current Role */}
          <div className="group rounded-2xl border border-slate-200 bg-white/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/5 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-violet-500/30">
            <div className="flex items-start justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-sm font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                02
              </span>

              <span className="text-xl text-slate-300 transition-colors group-hover:text-violet-500 dark:text-slate-700">
                ↗
              </span>
            </div>

            <p className="mt-6 text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Current Role
            </p>

            <p className="mt-2 font-semibold text-slate-900 dark:text-slate-100">
              Programmer
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Balai Diklat Industri Medan
            </p>
          </div>

          {/* Current Focus */}
          <div className="group rounded-2xl border border-slate-200 bg-white/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/5 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-violet-500/30">
            <div className="flex items-start justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-sm font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                03
              </span>

              <span className="text-xl text-slate-300 transition-colors group-hover:text-violet-500 dark:text-slate-700">
                ↗
              </span>
            </div>

            <p className="mt-6 text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Current Focus
            </p>

            <p className="mt-2 font-semibold text-slate-900 dark:text-slate-100">
              Web Development
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Exploring Linux &amp; DevOps
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;