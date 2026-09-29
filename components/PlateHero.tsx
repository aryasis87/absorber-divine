import React from 'react';
import { PlateMark, Rule } from '@/components/ui';

/* Kop halaman dalam "Plate Botani": kertas gading bertekstur laid, penanda
   pelat bernomor Romawi, judul serif dengan satu frasa miring, pengantar. */
export default function PlateHero({
  no,
  label,
  title,
  lead,
  children,
}: {
  no: string;
  label: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <header className="laid relative bg-paper pt-36 pb-14 md:pt-44 md:pb-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <PlateMark no={no} center>
          {label}
        </PlateMark>
        <h1 className="font-serif text-[2.4rem] leading-[1.08] font-normal text-ink md:text-[3.4rem]">{title}</h1>
        {lead && <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ink-soft">{lead}</p>}
        {children}
        <Rule className="mx-auto mt-12 max-w-xs" />
      </div>
    </header>
  );
}
