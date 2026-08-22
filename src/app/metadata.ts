import { Metadata } from 'next'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.presidentielle.fun'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: 'Présidentielle 2027',
  description: "Pour voter, il faut commencer par s'inscrire... ",

  keywords: [
    'présidentielle 2027',
    'élection présidentielle',
    'voter',
    'inscription listes électorales',
    'France',
  ],
  authors: [{ name: 'julienbrg', url: 'https://github.com/julienbrg' }],

  openGraph: {
    title: 'Présidentielle 2027',
    description: "Pour voter, il faut commencer par s'inscrire... ",
    siteName: 'Présidentielle 2027',
    images: [
      {
        url: '/huangshan.png',
        width: 1200,
        height: 630,
        alt: "Pour voter, il faut commencer par s'inscrire... ",
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'presidentielle',
    description: "Pour voter, il faut commencer par s'inscrire... ",
    images: ['/huangshan.png'],
    creator: '@julienbrg',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
