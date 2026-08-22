'use client'

import { Heading, Text, VStack, Link as ChakraLink } from '@chakra-ui/react'
import { brandColors } from '@/theme'

// Hardcoded French content for now; to be moved into the translation system later.

export default function Contrib() {
  return (
    <VStack gap={8} align="stretch" pt={8} pb={24} maxW="3xl" mx="auto">
      <VStack gap={3} textAlign="center">
        <Heading as="h1" size="2xl">
          Contribuer
        </Heading>
      </VStack>

      <Text>
        Ce site est maintenu par{' '}
        <ChakraLink
          href="https://julienberanger.com/contact"
          color={brandColors.accent}
          target="_blank"
          rel="noopener noreferrer"
        >
          Julien Béranger
        </ChakraLink>
        , développeur indépendant. Il a pour objectif d&apos;inciter les gens à voter.
      </Text>

      <Text>Vous êtes invités à contribuer directement au projet via GitHub : </Text>
      <Text>
        <strong>
          <ChakraLink
            href="https://github.com/julienbrg/presidentielle"
            color={brandColors.accent}
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/julienbrg/presidentielle
          </ChakraLink>
        </strong>
      </Text>
    </VStack>
  )
}
