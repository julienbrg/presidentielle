'use client'

import { Box, Heading, Text, VStack, Link as ChakraLink } from '@chakra-ui/react'
import { brandColors } from '@/theme'
import type { ReactNode } from 'react'

// Hardcoded French content for now; to be moved into the translation system later.

// Per-article pages of the Constitution du 4 octobre 1958 on Légifrance
const ARTICLE_URLS = {
  '5': 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006527459',
  '8': 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006527467',
  '9': 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006527468',
  '10': 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006527469',
  '11': 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000019241004',
  '12': 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006527474',
  '13': 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000019241006',
  '14': 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006527477',
  '15': 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006527478',
  '16': 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000019241008',
  '17': 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000019241010',
  '18': 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000019241012',
  '30': 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006527498',
  '52': 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006527533',
  '54': 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006527540',
  '56': 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000019241071',
  '61': 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000019241074',
  '64': 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006527555',
  '67': 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006527561',
  '68': 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006527564',
  '89': 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000019240655',
} as const

// Link to an article of the Constitution; renders "art. {n}" unless children are given
function Art({ n, children }: { n: keyof typeof ARTICLE_URLS; children?: ReactNode }) {
  return (
    <ChakraLink
      href={ARTICLE_URLS[n]}
      color={brandColors.accent}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children ?? `art. ${n}`}
    </ChakraLink>
  )
}

type RoleSection = {
  heading: string
  items: { title: ReactNode; body: ReactNode }[]
}

const sections: RoleSection[] = [
  {
    heading: "Ce qu'il décide seul (sans avoir besoin de la signature du Premier ministre)",
    items: [
      {
        title: (
          <>
            Il choisit le Premier ministre (<Art n="8" />)
          </>
        ),
        body: "C'est lui qui le nomme, et il accepte sa démission quand celui-ci s'en va.",
      },
      {
        title: (
          <>
            Il peut lancer un référendum (<Art n="11" />)
          </>
        ),
        body: "Demander directement aux citoyens de voter sur une loi : organisation des pouvoirs publics, réformes économiques, sociales ou environnementales, ou ratification d'un traité.",
      },
      {
        title: (
          <>
            Il peut dissoudre l&apos;Assemblée nationale (<Art n="12" />)
          </>
        ),
        body: "En gros, renvoyer tous les députés et provoquer de nouvelles élections législatives. Impossible de le refaire dans l'année qui suit.",
      },
      {
        title: (
          <>
            Il a un « bouton d&apos;urgence » (<Art n="16" />)
          </>
        ),
        body: 'Si la France est en danger grave (guerre, institutions menacées), il peut concentrer tous les pouvoirs temporairement, sous surveillance du Conseil constitutionnel.',
      },
      {
        title: (
          <>
            Il peut s&apos;adresser au Parlement (<Art n="18" />)
          </>
        ),
        body: 'Par message écrit, ou en personne devant le Congrès à Versailles (députés et sénateurs réunis), depuis 2008.',
      },
      {
        title: (
          <>
            Il peut saisir le Conseil constitutionnel (<Art n="54" /> et <Art n="61">61</Art>)
          </>
        ),
        body: (
          <>
            Pour vérifier qu&apos;une loi ou un traité respecte la Constitution. Il nomme aussi 3 de
            ses 9 membres, dont le président (<Art n="56" />
            ).
          </>
        ),
      },
    ],
  },
  {
    heading: "Ce qu'il décide avec le gouvernement (signature du Premier ministre obligatoire)",
    items: [
      {
        title: (
          <>
            Il nomme les ministres (<Art n="8" />)
          </>
        ),
        body: 'Sur proposition du Premier ministre.',
      },
      {
        title: (
          <>
            Il préside le Conseil des ministres (<Art n="9" />)
          </>
        ),
        body: (
          <>
            Chaque semaine, et il signe les ordonnances et décrets qui y sont adoptés (
            <Art n="13" />
            ).
          </>
        ),
      },
      {
        title: (
          <>
            Il nomme aux grands postes de l&apos;État (<Art n="13" />)
          </>
        ),
        body: "Préfets, ambassadeurs, recteurs, patrons d'entreprises publiques… Depuis 2008, pour certains postes, les commissions du Parlement donnent leur avis.",
      },
      {
        title: (
          <>
            Il promulgue les lois (<Art n="10" />)
          </>
        ),
        body: 'Il a 15 jours pour signer une loi votée par le Parlement et la rendre officielle. Il peut aussi demander au Parlement de la réexaminer.',
      },
      {
        title: (
          <>
            Il a le droit de grâce (<Art n="17" />)
          </>
        ),
        body: "Il peut réduire ou annuler la peine d'une personne condamnée, au cas par cas.",
      },
      {
        title: (
          <>
            Il peut convoquer le Parlement en session extraordinaire (<Art n="30" />)
          </>
        ),
        body: 'En dehors des périodes normales de session.',
      },
      {
        title: (
          <>
            Il peut lancer une révision de la Constitution (<Art n="89" />)
          </>
        ),
        body: 'Soit par vote du Congrès, soit par référendum.',
      },
    ],
  },
  {
    heading: 'Armée et relations internationales',
    items: [
      {
        title: (
          <>
            Il est le chef des armées (<Art n="15" />)
          </>
        ),
        body: "Il préside les conseils de défense, et lui seul peut décider d'utiliser l'arme nucléaire.",
      },
      {
        title: (
          <>
            Il négocie et ratifie les traités (<Art n="52" />)
          </>
        ),
        body: 'Et il doit être informé de toute négociation internationale en cours.',
      },
      {
        title: (
          <>
            Il accrédite les ambassadeurs (<Art n="14" />)
          </>
        ),
        body: "Les ambassadeurs français à l'étranger, et les ambassadeurs étrangers en France.",
      },
      {
        title: 'Il représente la France dans le monde',
        body: "Sommets de l'Union européenne, G7, ONU, etc.",
      },
    ],
  },
  {
    heading: 'Ses autres rôles',
    items: [
      {
        title: (
          <>
            Il est le garant de l&apos;indépendance de la justice (<Art n="64" />)
          </>
        ),
        body: "Avec l'aide du Conseil supérieur de la magistrature.",
      },
      {
        title: (
          <>
            Il est l&apos;« arbitre » (<Art n="5" />)
          </>
        ),
        body: "Il veille à ce que la Constitution soit respectée, que les institutions fonctionnent correctement, et que l'indépendance et le territoire de la France soient protégés.",
      },
    ],
  },
  {
    heading: 'Bon à savoir',
    items: [
      {
        title: 'Il est élu pour 5 ans',
        body: "Au suffrage universel direct (le quinquennat, depuis 2000), et il ne peut pas faire plus de 2 mandats d'affilée (depuis 2008).",
      },
      {
        title: (
          <>
            Il est protégé pendant son mandat (<Art n="67" /> et <Art n="68">68</Art>)
          </>
        ),
        body: "On ne peut pas le poursuivre en justice tant qu'il est en fonction (inviolabilité), et il n'est pas responsable des actes liés à sa fonction (irresponsabilité). Seule exception : le Parlement peut le destituer en se réunissant en Haute Cour, si son comportement est manifestement incompatible avec sa fonction.",
      },
      {
        title: 'Ses pouvoirs réels dépendent de la politique',
        body: "Si le président et la majorité à l'Assemblée sont du même bord, c'est lui qui dirige vraiment le pays. En cohabitation (président et majorité opposés), c'est le Premier ministre qui gère la politique intérieure ; le président se replie sur la défense et la diplomatie, ce qu'on appelle son « domaine réservé » — une expression courante mais qui n'existe nulle part dans la Constitution.",
      },
    ],
  },
]

// Items are numbered 1–22 continuously across sections
const sectionOffsets = sections.map((_, i) =>
  sections.slice(0, i).reduce((n, s) => n + s.items.length, 0)
)

export default function Role() {
  return (
    <VStack gap={12} align="stretch" pt={8} pb={24} maxW="3xl" mx="auto">
      <VStack gap={3} textAlign="center">
        <Heading as="h1" size="2xl">
          Le rôle du président de la République
        </Heading>
        <Text fontSize="lg" color="gray.400">
          Ce que la Constitution de la Ve République lui permet de faire.
        </Text>
      </VStack>

      {sections.map((section, sectionIndex) => (
        <VStack key={section.heading} gap={5} align="stretch">
          <Heading as="h2" size="lg" color={brandColors.accent}>
            {section.heading}
          </Heading>
          {section.items.map((item, itemIndex) => (
            <Box key={itemIndex}>
              <Text fontWeight="bold">
                {sectionOffsets[sectionIndex] + itemIndex + 1}. {item.title}
              </Text>
              <Text color="gray.400">{item.body}</Text>
            </Box>
          ))}
        </VStack>
      ))}
    </VStack>
  )
}
