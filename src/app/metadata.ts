import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://w3pk.w3hc.org'),

  title: 'Présidentielle 2027',
  description: "Pour voter, il faut commencer par s'inscrire... ",

  keywords: ['w3pk', 'WebAuthn', 'Next.js', 'Web3', 'Ethereum'],
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
    locale: 'en_US',
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

  verification: {
    google: 'your-google-site-verification',
  },
}
