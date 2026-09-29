/* Ilustrasi garis bunga anyelir yang dipres — untuk pelat VIII yang tidak
   punya foto. Satu warna tinta, gaya gambar herbarium. */
export default function BungaPotong({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 260" className={className} role="img" aria-label="Ilustrasi garis bunga anyelir yang dipres" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {/* batang */}
      <path d="M100 250 C 98 200, 104 160, 100 104" strokeWidth="1.6" />
      <path d="M100 196 C 84 186, 70 170, 62 150" strokeWidth="1.2" />
      <path d="M101 170 C 118 160, 130 146, 136 128" strokeWidth="1.2" />
      {/* daun sempit */}
      <path d="M62 150 C 58 162, 64 172, 74 176 C 72 166, 68 158, 62 150 Z" strokeWidth="1" />
      <path d="M136 128 C 142 140, 138 152, 128 158 C 128 146, 131 136, 136 128 Z" strokeWidth="1" />
      <path d="M99 226 C 84 222, 74 212, 70 200 C 84 204, 94 212, 99 226 Z" strokeWidth="1" />
      {/* kelopak bergerigi */}
      <path d="M100 104 C 86 102, 74 94, 70 80 C 78 82, 80 76, 76 68 C 86 70, 90 64, 88 54 C 96 60, 102 56, 104 48 C 110 56, 116 56, 122 50 C 122 60, 128 64, 136 62 C 132 70, 136 76, 144 78 C 138 92, 124 100, 110 104" strokeWidth="1.4" />
      <path d="M86 88 C 92 80, 100 76, 108 78 M94 70 C 100 66, 108 66, 114 70 M110 90 C 116 84, 124 82, 130 84" strokeWidth="0.9" />
      {/* kelopak luar */}
      <path d="M92 108 C 94 116, 106 116, 108 108" strokeWidth="1.2" />
      {/* label spesimen */}
      <path d="M40 236 L 72 236" strokeWidth="0.8" />
      <path d="M128 236 L 160 236" strokeWidth="0.8" />
    </svg>
  );
}
