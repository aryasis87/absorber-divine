import Link from 'next/link';
import PlateHero from '@/components/PlateHero';
import type { Bagian } from '@/lib/legal';

const ROMAWI = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

/* Halaman legal bergaya "Plate Botani": setiap pasal adalah satu pelat kecil
   bernomor Romawi. Isinya dari lib/legal.ts (khusus bisnis B2B ini). */
export default function LegalBotani({
  judul,
  updated,
  intro,
  bagian,
}: {
  judul: string;
  updated: string;
  intro: string;
  bagian: Bagian[];
}) {
  return (
    <>
      <PlateHero no="—" label="Dokumen" title={judul} lead={intro}>
        <p className="sc mt-6 text-ink-soft">Diperbarui {updated}</p>
      </PlateHero>
      <section className="laid bg-paper pb-24">
        <ol className="mx-auto max-w-3xl space-y-4 px-6">
          {bagian.map((b, i) => (
            <li key={b.h} className="border border-ink/15 bg-paper p-6 sm:p-8">
              <h2 className="flex items-baseline gap-4 font-serif text-xl font-normal text-ink">
                <span aria-hidden="true" className="w-8 shrink-0 text-brass-ink italic">{ROMAWI[i]}</span>
                {b.h}
              </h2>
              <div className="mt-3 space-y-3 pl-12 text-sm leading-relaxed text-ink-soft">
                {b.p && <p>{b.p}</p>}
                {b.daftar && (
                  <ul className="space-y-2">
                    {b.daftar.map((d) => (
                      <li key={d} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-brass" />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-8 max-w-3xl px-6 text-center font-serif text-sm text-ink-soft italic">
          Draf untuk purwarupa desain — perlu ditinjau bagian legal PT Dickson Synergy sebelum dipakai.{' '}
          <Link href="/kontak" className="text-leaf not-italic underline underline-offset-4">Tanyakan kepada kami</Link>.
        </p>
      </section>
    </>
  );
}
