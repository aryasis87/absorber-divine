import Link from 'next/link'

const plates = [
  { label: 'Anatomi Pematangan', href: '/#pematangan' },
  { label: 'Kurva Kesegaran', href: '/#kurva' },
  { label: 'Cara Kerja', href: '/#cara-kerja' },
  { label: 'Lembar Spesimen', href: '/#penerapan' },
  { label: 'Jaminan', href: '/#jaminan' },
  { label: 'Tanya Jawab', href: '/faq' },
  { label: 'Hubungi Kami', href: '/kontak' },
]

const standards = [
  ['BPOM RI', 'NA18191100273'],
  ['FDA', '21 CFR 175.300'],
  ['Uni Eropa', 'EU No 10/2011'],
  ['JHOSPA', 'Jepang'],
]

export default function Footer() {
  const tahun = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-ink text-paper/70">
      <div aria-hidden="true" className="laid absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.8fr)_minmax(0,1fr)]">
          <div>
            <p className="flex items-baseline gap-2.5">
              <span className="font-serif text-xl text-paper italic">Ethylene</span>
              <span className="font-serif text-xl text-brass-soft">Guard</span>
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">
              Sachet penyerap etilen untuk buah dan sayur yang harus menempuh jarak sebelum sampai
              ke meja. Dipasok oleh PT Dickson Synergy.
            </p>
            <p className="sc mt-7 text-paper/40">
              Reg. BPOM RI
              <span className="mt-1.5 block text-brass-soft">NA18191100273</span>
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <h2 className="sc mb-5 border-b border-paper/20 pb-3 text-paper">Pelat</h2>
            <ul className="space-y-3">
              {plates.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm transition-colors hover:text-brass-soft">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="sc mb-5 border-b border-paper/20 pb-3 text-paper">Standar</h2>
            <dl className="space-y-3.5">
              {standards.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-sm text-paper/75">{k}</dt>
                  <dd className="sc mt-1 text-paper/40">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="sc mb-5 border-b border-paper/20 pb-3 text-paper">Hubungi</h2>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="sc block text-paper/40">Telepon</span>
                <a href="tel:+628123456789" className="transition-colors hover:text-brass-soft">
                  +62 812 3456 7890
                </a>
              </li>
              <li>
                <span className="sc block text-paper/40">Surel</span>
                <a
                  href="mailto:support@ethyleneabsorber.com"
                  className="break-all transition-colors hover:text-brass-soft"
                >
                  support@ethyleneabsorber.com
                </a>
              </li>
              <li>
                <span className="sc block text-paper/40">Alamat</span>
                <span className="leading-relaxed">Jl. Teknologi No. 123, Bandung 40234</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="sc text-paper/40">© {tahun} EthyleneGuard · PT Dickson Synergy</p>
          <p className="sc text-paper/40">Herbarium Edisi {tahun}</p>
        </div>
      </div>
    </footer>
  )
}
