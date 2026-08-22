'use client'

import { Heading, Text, VStack } from '@chakra-ui/react'
import { Button } from '@/components/ui/button'
import { Countdown } from '@/components/Countdown'
import { brandColors } from '@/theme'
import { useTranslation } from '@/hooks/useTranslation'
import { CHECK_REGISTRATION_URL } from '@/utils/election'

const shimmerStyles = `
  @keyframes colorWave {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .shimmer-text {
    background: linear-gradient(120deg, #3182ce 0%, #ffffff 25%, #805ad5 50%, #ffffff 75%, #3182ce 100%);
    background-size: 400% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: colorWave 10s ease-in-out infinite;
  }
`

export default function Home() {
  const t = useTranslation()

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: shimmerStyles }} />
      <VStack gap={10} align="stretch" pt={16} pb={48} textAlign="center">
        <VStack gap={3}>
          <Heading as="h1" size="2xl" className="shimmer-text">
            {t.home.countdown.heading}
          </Heading>
          <Text fontSize="lg" color="gray.400">
            {t.home.countdown.tagline}
          </Text>
        </VStack>

        <Countdown />

        <Button
          asChild
          bg={brandColors.accent}
          color={brandColors.white}
          size="lg"
          alignSelf="center"
          mb="64"
        >
          <a href={CHECK_REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
            {t.home.countdown.checkRegistration}
          </a>
        </Button>
      </VStack>
    </>
  )
}
