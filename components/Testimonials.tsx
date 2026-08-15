import Image from 'next/image';
import { PlateHead } from '@/components/ui';

const voices = [
  {
    quote:
      'Sejak memakai sachet ini, buah di toko saya bertahan lima sampai tujuh hari lebih lama. Penyortiran sore hari yang dulu rutin, kini nyaris tidak perlu.',
    name: 'Relya Nesya',
    role: 'Pemilik FreshFruit Market',
    image: '/images/pp1.png',
  },
  {
    quote:
      'Pengiriman ke luar kota tidak lagi jadi taruhan. Buah sampai dalam kondisi yang masih bisa saya banggakan di depan pembeli.',
    name: 'Ani Wijaya',
    role: 'CEO BuahSegar Distribusi',
    image: '/images/pp2.png',
  },
  {
    quote:
      'Dapur kami butuh mutu yang sama setiap hari. Sejak buah disimpan bersama sachet, selisih antar pengiriman jauh lebih kecil.',
    name: 'Rina Permata',
    role: 'Pemilik The Green Cafe',
    image: '/images/pp3.png',
  },
];

export default function Testimonials() {
  return (
    <section id="suara" className="relative overflow-hidden bg-paper-deep py-24 md:py-32">
      <div aria-hidden="true" className="laid absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <PlateHead
          no="VII"
          label="Catatan Lapangan"
          center
          title={
            <>
              Yang dicatat mereka yang <em className="italic text-leaf">menimbangnya tiap hari</em>
            </>
          }
          className="mb-16"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {voices.map((v) => (
            <figure key={v.name} className="flex flex-col border border-ink/12 bg-paper p-8">
              <blockquote className="flex-1 font-serif text-[1.05rem] leading-relaxed text-ink italic">
                {v.quote}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4 border-t border-ink/12 pt-6">
                <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-brass/35">
                  <Image src={v.image} alt="" fill sizes="44px" className="object-cover" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">{v.name}</span>
                  <span className="sc mt-1 block text-ink-soft/55">{v.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="sc mt-10 text-center leading-[1.7] text-ink-soft/45">
          Kutipan di atas adalah ilustrasi skenario penggunaan untuk keperluan purwarupa desain.
        </p>
      </div>
    </section>
  );
}
