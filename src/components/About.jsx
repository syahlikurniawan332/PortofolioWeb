function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2">
        
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
            Building practical web applications with a continuous learning mindset.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-7 text-zinc-400">
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

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <p className="text-sm text-zinc-500">Education</p>
          <p className="mt-2 font-medium text-zinc-200">
            D4 Teknik Informatika
          </p>
          <p className="mt-1 text-sm text-zinc-400">
            Politeknik Negeri Lhokseumawe
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <p className="text-sm text-zinc-500">Current Role</p>
          <p className="mt-2 font-medium text-zinc-200">
            Programmer
          </p>
          <p className="mt-1 text-sm text-zinc-400">
            Balai Diklat Industri Medan
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <p className="text-sm text-zinc-500">Current Focus</p>
          <p className="mt-2 font-medium text-zinc-200">
            Web Development
          </p>
          <p className="mt-1 text-sm text-zinc-400">
            Exploring Linux & DevOps
          </p>
        </div>
      </div>
    </section>
  )
}

export default About