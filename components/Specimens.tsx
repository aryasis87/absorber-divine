import Image from 'next/image';
import { PlateHead } from '@/components/ui';

const specimens = [
  {
    no: 'II',
    title: 'Buah tropis ekspor',
    image: '/images/buahsegar1.webp',
    desc: 'Manggis, pisang, dan mangga yang harus melewati tiga hingga empat minggu pelayaran sebelum sampai ke tangan pembeli.',
  },
  {
    no: 'III',
    title: 'Ritel & meja pajang',
    image: '/images/buahsegar2.webp',
    desc: 'Rak yang harus tetap tampak menggoda dari pagi sampai toko ditutup, tanpa penyortiran berulang di tengah hari.',
  },
  {
    no: 'IV',
    title: 'Olahan & minuman segar',
    image: '/images/minuman1.webp',
    desc: 'Produk turunan yang mutunya ditentukan sejak bahan bakunya — buah yang lewat matang tidak dapat diperbaiki di dapur.',
  },
];

export default function Specimens() {
  return (
    <section id="penerapan" className="relative overflow-hidden bg-paper-deep py-24 md:py-32">
      <div aria-hidden="true" className="laid absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <PlateHead
          no="V"
          label="Lembar Spesimen"
          center
          title={
            <>
              Di mana selisih hari itu <em className="italic text-leaf">paling berharga</em>
            </>
          }
          className="mb-16"
        />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {specimens.map((s) => (
            <figure key={s.title} className="group">
              <div className="arch relative overflow-hidden border border-ink/15 bg-paper p-2.5">
                <div className="arch-sm relative aspect-[3/4] overflow-hidden bg-paper-deep">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </div>
              <figcaption className="mt-5 text-center">
                <p className="sc text-brass">Spesimen {s.no}</p>
                <h3 className="mt-2 font-serif text-xl text-ink">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft/75">{s.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
