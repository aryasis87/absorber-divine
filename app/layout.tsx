import "./globals.css"
import { Fraunces } from "next/font/google"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", weight: ["500","600","700"] })

export const metadata = {
  title: 'EthyleneAbsorber — Konsep Divine | Dickson Synergy',
  description: 'Jaga kesegaran buah lebih lama dengan teknologi ethylene absorber berkualitas tinggi.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${display.variable} antialiased bg-white text-gray-800 selection:bg-lime-200 selection:text-black overflow-x-hidden max-w-[100vw]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
