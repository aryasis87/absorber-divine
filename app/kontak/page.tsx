'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const saluran = [
  { label: 'Telepon', value: '+62 812 3456 7890', href: 'tel:+628123456789', note: 'Jalur tercepat pada jam kerja' },
  { label: 'Surel', value: 'support@ethyleneabsorber.com', href: 'mailto:support@ethyleneabsorber.com', note: 'Dibalas dalam 1–2 jam kerja' },
  { label: 'Kantor', value: 'Jl. Teknologi No. 123, Bandung 40234', note: 'Kunjungan dengan janji temu' },
  { label: 'Jam Kerja', value: 'Sen–Jum 08.00–17.00', note: 'Sabtu 08.00–12.00' },
]

export default function KontakPage() {
  const [form, setForm] = useState({
    nama: '', perusahaan: '', surel: '', telepon: '', komoditas: '', volume: '', rute: '', catatan: '',
  })
  const [mengirim, setMengirim] = useState(false)
  const [selesai, setSelesai] = useState(false)

  const ubah = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const kirim = (e: React.FormEvent) => {
    e.preventDefault()
    setMengirim(true)
    // Purwarupa desain — pengiriman disimulasikan, tanpa backend.
    setTimeout(() => {
      setMengirim(false)
      setSelesai(true)
    }, 1100)
  }

  return (
    <div className="bg-paper">
      <header className="relative overflow-hidden bg-ink text-paper">
        <div aria-hidden="true" className="laid absolute inset-0 opacity-40" />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-14 px-6 pt-36 pb-20 md:pt-44 md:pb-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div className="lg:pt-6">
            <p className="sc tendril mb-7 inline-block text-brass-soft">Permintaan Sample</p>
            <h1 className="font-serif text-[2.3rem] leading-[1.08] text-paper md:text-[3rem]">
              Sebutkan muatannya,
              <br />
              <em className="italic text-brass-soft">kami hitung kebutuhannya</em>
            </h1>
            <p className="mt-6 max-w-md leading-relaxed text-paper/70">
              Kami tidak menjual berdasarkan kira-kira. Isi komoditas, volume ruang, dan rute
              pengiriman Anda — jawabannya kembali berupa perhitungan, bersama sample untuk diuji
              sendiri.
            </p>

            <dl className="mt-12 grid gap-7 border-t border-paper/20 pt-8 sm:grid-cols-2">
              {saluran.map((s) => (
                <div key={s.label}>
                  <dt className="sc text-paper/40">{s.label}</dt>
                  <dd className="mt-1.5 text-sm text-paper">
                    {s.href ? (
                      <a href={s.href} className="break-all transition-colors hover:text-brass-soft">
                        {s.value}
                      </a>
                    ) : (
                      s.value
                    )}
                  </dd>
                  <dd className="mt-1 text-[0.8125rem] leading-relaxed text-paper/50">{s.note}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Kartu formulir */}
          <div className="bg-paper p-7 sm:p-10">
            <div className="mb-8 flex items-baseline justify-between border-b border-ink/15 pb-5">
              <h2 className="font-serif text-xl text-ink">Formulir Permintaan</h2>
              <span className="sc text-ink-soft/45">Lembar EG-01</span>
            </div>

            <AnimatePresence mode="wait">
              {selesai ? (
                <motion.div key="ok" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="py-10 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-brass/50">
                    <span className="font-serif text-2xl text-brass italic">✓</span>
                  </div>
                  <h3 className="font-serif text-xl text-ink">Permintaan tercatat</h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-soft/80">
                    Terima kasih. Kami meninjau data muatan Anda dan menghubungi kembali pada jam
                    kerja berikutnya.
                  </p>
                  <button
                    onClick={() => setSelesai(false)}
                    className="sc mt-8 border-b border-brass/50 pb-1 text-brass hover:border-brass"
                  >
                    Isi permintaan lain
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={kirim} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Nama lengkap" name="nama" value={form.nama} onChange={ubah} required />
                    <Field label="Perusahaan" name="perusahaan" value={form.perusahaan} onChange={ubah} required />
                    <Field label="Surel" name="surel" type="email" value={form.surel} onChange={ubah} required />
                    <Field label="Telepon" name="telepon" type="tel" value={form.telepon} onChange={ubah} required />
                  </div>

                  <div className="border-t border-ink/12 pt-6">
                    <p className="sc mb-5 text-brass">Data muatan</p>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="Komoditas" name="komoditas" value={form.komoditas} onChange={ubah} placeholder="Mis. manggis" required />
                      <Field label="Volume ruang (m³)" name="volume" type="number" min="1" value={form.volume} onChange={ubah} placeholder="Mis. 33" required />
                    </div>
                    <div className="mt-6">
                      <Field label="Rute pengiriman" name="rute" value={form.rute} onChange={ubah} placeholder="Mis. Surabaya → Yokohama, laut 3 minggu" required />
                    </div>
                  </div>

                  <div className="border-t border-ink/12 pt-6">
                    <label htmlFor="catatan" className="sc mb-3 block text-ink-soft/60">
                      Catatan tambahan
                    </label>
                    <textarea
                      id="catatan"
                      name="catatan"
                      rows={4}
                      value={form.catatan}
                      onChange={ubah}
                      className="w-full resize-y border-b border-ink/20 bg-transparent pb-2 text-sm text-ink placeholder:text-ink-soft/35 focus:border-brass focus:outline-none"
                      placeholder="Kendala yang pernah dialami atau target masa simpan Anda."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={mengirim}
                    className="w-full bg-ink py-4 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-ink-soft disabled:opacity-70"
                  >
                    {mengirim ? 'Mengirim…' : 'Kirim Permintaan'}
                  </button>

                  <p className="sc leading-[1.7] text-ink-soft/40">
                    Purwarupa desain — pengiriman formulir disimulasikan dan data tidak tersimpan.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-16 md:py-20">
        <div aria-hidden="true" className="laid absolute inset-0" />
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col gap-5 px-6 text-center">
          <p className="font-serif text-lg text-ink italic">
            Sebagian besar pertanyaan sudah terjawab lengkap di lembar tanya jawab.
          </p>
          <Link href="/faq" className="sc mx-auto border-b border-brass/50 pb-1 text-brass hover:border-brass">
            Buka Pelat VIII
          </Link>
        </div>
      </section>
    </div>
  )
}

function Field({
  label, name, value, onChange, type = 'text', required = false, placeholder, min,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  required?: boolean
  placeholder?: string
  min?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="sc mb-3 block text-ink-soft/60">
        {label}
        {required && <span className="ml-1 text-brass">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        min={min}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border-b border-ink/20 bg-transparent pb-2 text-sm text-ink placeholder:text-ink-soft/35 focus:border-brass focus:outline-none"
      />
    </div>
  )
}
