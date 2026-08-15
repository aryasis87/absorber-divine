import Hero from '@/components/Hero'
import Ripening from '@/components/Ripening'
import FreshnessCurve from '@/components/FreshnessCurve'
import Ritual from '@/components/Ritual'
import Specimens from '@/components/Specimens'
import Assurance from '@/components/Assurance'
import Testimonials from '@/components/Testimonials'
import Closing from '@/components/Closing'

/* Halaman disusun sebagai kumpulan pelat bernomor Romawi:
   I pernyataan · II anatomi pematangan · III kurva kesegaran · IV cara kerja
   V spesimen · VI jaminan · VII catatan lapangan · VIII tanya jawab. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Ripening />
      <FreshnessCurve />
      <Ritual />
      <Specimens />
      <Assurance />
      <Testimonials />
      <Closing />
    </>
  )
}
