'use client'

import { Box, Heading, Text, VStack, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { brandColors } from '@/theme'
import { CHECK_REGISTRATION_URL } from '@/utils/election'
import type { ReactNode } from 'react'

// Hardcoded French content for now; to be moved into the translation system later.

type PourquoiSection = {
  heading: string
  items: { title: ReactNode; body: ReactNode }[]
}

const sections: PourquoiSection[] = [
  {
    heading: 'Votre bulletin pèse vraiment',
    items: [
      {
        title: 'Vous choisissez directement, sans intermédiaire',
        body: 'Depuis 1962, le président de la République est élu au suffrage universel direct : chaque électeur vote directement pour un candidat, et chaque voix compte exactement pareil, où que vous habitiez et qui que vous soyez.',
      },
      {
        title: "C'est l'élection qui décide le plus de choses",
        body: (
          <>
            Le président nomme le Premier ministre, dirige la diplomatie, commande les armées et
            peut dissoudre l&apos;Assemblée nationale. Un seul bulletin engage cinq ans de
            décisions.{' '}
            <ChakraLink as={Link} href="/role" color={brandColors.accent}>
              Voir en détail ce que le président peut faire
            </ChakraLink>
            .
          </>
        ),
      },
    ],
  },
  {
    heading: 'Des élections se jouent à très peu de voix',
    items: [
      {
        title: '2002 : 194 600 voix',
        body: "C'est l'écart entre Lionel Jospin et Jean-Marie Le Pen au premier tour — soit environ 0,7 % des suffrages. Quelques voix par bureau de vote ont suffi à changer l'affiche du second tour.",
      },
      {
        title: '2017 : 153 000 voix',
        body: "C'est l'écart entre François Fillon et Jean-Luc Mélenchon au premier tour, sur plus de 35 millions de suffrages exprimés. La qualification pour le second tour s'est jouée à moins de 0,5 %.",
      },
      {
        title: '1974 : 425 000 voix',
        body: "Au second tour, Valéry Giscard d'Estaing l'emporte sur François Mitterrand avec 50,8 % des voix. L'élection la plus serrée de la Ve République.",
      },
    ],
  },
  {
    heading: "S'abstenir, c'est décider quand même",
    items: [
      {
        title: 'Ne pas voter, ce n’est pas être neutre',
        body: "Si vous ne votez pas, le résultat est décidé par ceux qui votent — et rien ne dit qu'ils veulent la même chose que vous. Votre abstention renforce mécaniquement le poids des électeurs qui se déplacent.",
      },
      {
        title: 'Vous êtes plus nombreux que vous ne le pensez',
        body: "En 2022, plus d'un inscrit sur quatre s'est abstenu au premier tour. Les abstentionnistes, à eux seuls, auraient largement pu changer le résultat de l'élection.",
      },
      {
        title: 'Personne ne défendra vos priorités à votre place',
        body: 'Les candidats parlent aux gens qui votent. Moins une catégorie de la population vote, moins ses préoccupations pèsent dans les programmes.',
      },
    ],
  },
  {
    heading: 'Un droit qui a été conquis',
    items: [
      {
        title: 'Le vote ne va pas de soi',
        body: "Suffrage universel masculin en 1848, droit de vote des femmes en 1944, majorité électorale à 18 ans en 1974 : chaque élargissement du droit de vote a été le résultat de longues luttes. Dans de nombreux pays, voter librement reste aujourd'hui impossible.",
      },
    ],
  },
  {
    heading: 'Et si aucun candidat ne me convainc ?',
    items: [
      {
        title: 'Le vote blanc existe',
        body: "Depuis 2014, les bulletins blancs sont comptés et annoncés à part dans les résultats. Ils ne comptent pas dans les suffrages exprimés, mais contrairement à l'abstention, un vote blanc dit clairement : « je suis venu, et aucune offre ne me convient ».",
      },
      {
        title: 'Voter, ce n’est pas adhérer à 100 %',
        body: "Un bulletin n'est pas une déclaration d'amour : c'est un choix entre les options réellement en présence. On peut voter pour le candidat le moins éloigné de ses idées — c'est déjà peser sur le résultat.",
      },
    ],
  },
]

export default function Pourquoi() {
  return (
    <VStack gap={12} align="stretch" pt={8} pb={24} maxW="3xl" mx="auto">
      <VStack gap={3} textAlign="center">
        <Heading as="h1" size="2xl">
          Pourquoi voter ?
        </Heading>
        <Text fontSize="lg" color="gray.400">
          Ce qu&apos;un bulletin de vote peut changer — et ce qui se passe quand on reste chez soi.
        </Text>
      </VStack>

      {sections.map(section => (
        <VStack key={section.heading} gap={5} align="stretch">
          <Heading as="h2" size="lg" color={brandColors.accent}>
            {section.heading}
          </Heading>
          {section.items.map((item, itemIndex) => (
            <Box key={itemIndex}>
              <Text fontWeight="bold">{item.title}</Text>
              <Text color="gray.400">{item.body}</Text>
            </Box>
          ))}
        </VStack>
      ))}

      <VStack gap={4} pt={4}>
        <Text fontWeight="bold" textAlign="center">
          Première étape : être inscrit sur les listes électorales.
        </Text>
        <Button asChild bg={brandColors.accent} color={brandColors.white} size="lg">
          <a href={CHECK_REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
            Suis-je inscrit·e ?
          </a>
        </Button>
      </VStack>
    </VStack>
  )
}
