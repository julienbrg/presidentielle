import { Metadata } from 'next'

const title = 'Contribuer | presidentielle'
const description = 'Contribuer au projet via GitHub.'

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

export default function ContribLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
