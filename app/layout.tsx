import "./globals.css"
import { Fraunces } from "next/font/google"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", weight: ["500","600","700"] })

const __jsonld = {"@context":"https://schema.org","@type":"CreativeWork","name":"EthyleneAbsorber — Konsep Divine","description":"Landing page produk ethylene absorber","url":"https://absorber-divine.pintuweb.com"};

export const metadata = {
  metadataBase: new URL("https://absorber-divine.pintuweb.com"),
  title: "EthyleneAbsorber — Konsep Divine | Dickson Synergy",
  description: "Landing page EthyleneAbsorber konsep \"Divine\": elegan dengan sentuhan italic, \"freshness reimagined\" untuk kesan eksklusif.",
  applicationName: "EthyleneAbsorber",
  keywords: ["ethylene absorber", "kesegaran buah", "landing page elegan", "desain web"],
  authors: [{ name: "EthyleneAbsorber" }],
  creator: "EthyleneAbsorber",
  publisher: "EthyleneAbsorber",
  alternates: { canonical: "https://absorber-divine.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://absorber-divine.pintuweb.com",
    siteName: "EthyleneAbsorber",
    title: "EthyleneAbsorber — Konsep Divine | Dickson Synergy",
    description: "Landing page EthyleneAbsorber konsep \"Divine\": elegan dengan sentuhan italic, \"freshness reimagined\" untuk kesan eksklusif.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "EthyleneAbsorber — Konsep Divine | Dickson Synergy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EthyleneAbsorber — Konsep Divine | Dickson Synergy",
    description: "Landing page EthyleneAbsorber konsep \"Divine\": elegan dengan sentuhan italic, \"freshness reimagined\" untuk kesan eksklusif.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${display.variable} antialiased bg-white text-gray-800 selection:bg-lime-200 selection:text-black overflow-x-hidden max-w-[100vw]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  )
}
