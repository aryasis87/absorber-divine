import type { Tingkat } from '@/lib/herbarium';

const URUT: Tingkat[] = ['Sangat rendah', 'Rendah', 'Sedang', 'Tinggi', 'Sangat tinggi'];

/* Skala lima butir — dibaca seperti keterangan skala pada pelat botani. */
export default function Skala({ label, nilai, warna = 'bg-leaf' }: { label: string; nilai: Tingkat; warna?: string }) {
  const n = URUT.indexOf(nilai) + 1;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="sc text-ink-soft">{label}</span>
        <span className="font-serif text-sm text-ink italic">{nilai}</span>
      </div>
      <div className="mt-2 flex gap-1" aria-hidden="true">
        {URUT.map((_, i) => (
          <span key={i} className={`h-1.5 flex-1 rounded-full ${i < n ? warna : 'bg-ink/12'}`} />
        ))}
      </div>
    </div>
  );
}
