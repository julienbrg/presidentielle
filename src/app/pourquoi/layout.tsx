import { Metadata } from 'next'

const title = 'Pourquoi voter ? | presidentielle'
const description =
  "Pourquoi il est important de voter à l'élection présidentielle : ce qu'un bulletin peut changer."

export const metadata: Metadata = {
  title,
  description,

  openGraph: {
    title,
    description,
    siteName: 'presidentielle',
    images: [
      {
        url: '/huangshan.png',
        width: 1200,
        height: 630,
        alt: description,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/huangshan.png'],
    creator: '@julienbrg',
  },
}

export default function PourquoiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
