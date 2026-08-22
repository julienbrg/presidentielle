import { Metadata } from 'next'

const title = 'Le rôle du président | presidentielle'
const description =
  'Ce que la Constitution de la Ve République permet au président de la République de faire.'

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

export default function RoleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
