'use client'

import { Box, Heading, Text, VStack, Link as ChakraLink } from '@chakra-ui/react'
import { brandColors } from '@/theme'
import type { ReactNode } from 'react'

// Hardcoded French content for now; to be moved into the translation system later.

type ConditionsSection = {
  heading: string
  body: ReactNode[]
}

const sections: ConditionsSection[] = [
  {
    heading: '1. Objet du site',
    body: [
      "Ce site est un site d'information indépendant consacré à l'élection présidentielle française de 2027. Il propose notamment un compte à rebours vers les prochaines échéances électorales, des informations sur l'inscription sur les listes électorales et des contenus pédagogiques sur le vote et le rôle du président de la République.",
      "Les présentes conditions générales d'utilisation (CGU) définissent les règles d'accès et d'utilisation du site. En naviguant sur le site, vous acceptez ces conditions dans leur intégralité.",
    ],
  },
  {
    heading: '2. Éditeur du site',
    body: [
      <>
        Le site est édité par Julien Béranger. Vous pouvez le contacter via{' '}
        <ChakraLink
          href="https://julienberanger.com/contact"
          color={brandColors.accent}
          target="_blank"
          rel="noopener noreferrer"
        >
          julienberanger.com/contact
        </ChakraLink>
        .
      </>,
      <>
        Le site est un projet open source publié sous licence GPL-3.0. Son code source est
        disponible sur{' '}
        <ChakraLink
          href="https://github.com/julienbrg/presidentielle"
          color={brandColors.accent}
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/julienbrg/presidentielle
        </ChakraLink>
        .
      </>,
    ],
  },
  {
    heading: '3. Accès au site',
    body: [
      "L'accès au site est libre et gratuit, sans création de compte. L'éditeur s'efforce de maintenir le site accessible en permanence, mais ne peut garantir une disponibilité sans interruption : le site peut être suspendu ou modifié à tout moment, notamment pour des raisons de maintenance, sans préavis ni indemnité.",
    ],
  },
  {
    heading: '4. Nature des informations publiées',
    body: [
      "Les contenus publiés sur le site ont une vocation purement informative et pédagogique. Ils ne constituent ni un conseil juridique, ni une communication officielle. Malgré le soin apporté à leur exactitude, des erreurs ou des informations obsolètes peuvent subsister : seules les informations publiées par les autorités compétentes (notamment service-public.fr et le ministère de l'Intérieur) font foi, en particulier concernant les dates et les modalités d'inscription et de vote.",
      "Le site est indépendant : il n'est affilié à aucun parti politique, à aucun candidat ni à aucune institution publique, et ne promeut aucune candidature.",
    ],
  },
  {
    heading: '5. Données personnelles',
    body: [
      "Le site ne collecte pas de données personnelles à des fins publicitaires et n'utilise pas de traceurs tiers à des fins de profilage. Les préférences éventuellement enregistrées (comme la langue d'affichage) sont stockées localement dans votre navigateur et ne sont pas transmises à l'éditeur.",
      'Si des fonctionnalités de compte (par exemple via des passkeys) sont proposées, les identifiants correspondants sont créés et conservés sur votre appareil. Vous êtes responsable de la garde de votre appareil et de vos éventuelles sauvegardes.',
    ],
  },
  {
    heading: '6. Liens externes',
    body: [
      "Le site contient des liens vers des sites tiers, notamment des sites officiels de l'administration française. Ces liens sont fournis à titre de commodité : l'éditeur n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leur disponibilité.",
    ],
  },
  {
    heading: '7. Propriété intellectuelle',
    body: [
      'Le code source du site est publié sous licence GPL-3.0 : vous pouvez le consulter, le modifier et le redistribuer dans les conditions prévues par cette licence. Sauf mention contraire, les contenus éditoriaux du site peuvent être librement partagés à des fins non commerciales, sous réserve de citer la source.',
    ],
  },
  {
    heading: '8. Responsabilité',
    body: [
      "L'utilisation du site se fait sous votre seule responsabilité. L'éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site, de l'impossibilité d'y accéder, ou de l'usage d'informations qui y sont publiées.",
    ],
  },
  {
    heading: '9. Modification des conditions',
    body: [
      "L'éditeur peut modifier les présentes CGU à tout moment. La version applicable est celle publiée sur cette page à la date de votre consultation. En cas de modification substantielle, la date de mise à jour ci-dessous sera actualisée.",
    ],
  },
  {
    heading: '10. Droit applicable',
    body: [
      'Les présentes CGU sont soumises au droit français. Tout litige relatif à leur interprétation ou à leur exécution relève des juridictions françaises compétentes.',
    ],
  },
]

export default function Conditions() {
  return (
    <VStack gap={10} align="stretch" pt={8} pb={24} maxW="3xl" mx="auto">
      <VStack gap={3} textAlign="center">
        <Heading as="h1" size="2xl">
          Conditions d&apos;utilisation
        </Heading>
        <Text fontSize="lg" color="gray.400">
          Les règles d&apos;utilisation du site, en clair.
        </Text>
      </VStack>

      {sections.map(section => (
        <VStack key={section.heading} gap={3} align="stretch">
          <Heading as="h2" size="lg" color={brandColors.accent}>
            {section.heading}
          </Heading>
          {section.body.map((paragraph, paragraphIndex) => (
            <Box key={paragraphIndex}>
              <Text color="gray.400">{paragraph}</Text>
            </Box>
          ))}
        </VStack>
      ))}

      <Text fontSize="sm" color="gray.500" textAlign="center">
        Dernière mise à jour : 22 août 2026
      </Text>
    </VStack>
  )
}
