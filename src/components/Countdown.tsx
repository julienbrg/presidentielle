'use client'

import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { useSyncExternalStore } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'
import { brandColors } from '@/theme'
import { ELECTION_MILESTONES, getNextMilestone } from '@/utils/election'

const pad = (n: number) => String(n).padStart(2, '0')

function subscribeToClock(onTick: () => void) {
  const id = setInterval(onTick, 1000)
  return () => clearInterval(id)
}

// Whole seconds, so the snapshot only changes once per tick
const getSecondsNow = () => Math.floor(Date.now() / 1000)
// The server has no clock to tick; null renders a placeholder until hydration
const getServerSecondsNow = () => null

export function Countdown() {
  const t = useTranslation()
  const { language } = useLanguage()
  const seconds = useSyncExternalStore(subscribeToClock, getSecondsNow, getServerSecondsNow)

  if (seconds === null) {
    return <Box minH="320px" aria-hidden="true" />
  }

  const now = new Date(seconds * 1000)
  const next = getNextMilestone(now)
  if (!next) {
    return (
      <Text fontSize="lg" textAlign="center" color="gray.400">
        {t.home.countdown.electionOver}
      </Text>
    )
  }

  const remaining = new Date(next.date).getTime() - now.getTime()
  const days = Math.floor(remaining / 86_400_000)
  const units = [
    { value: String(days), label: t.home.countdown.days },
    { value: pad(Math.floor((remaining % 86_400_000) / 3_600_000)), label: t.home.countdown.hours },
    { value: pad(Math.floor((remaining % 3_600_000) / 60_000)), label: t.home.countdown.minutes },
    { value: pad(Math.floor((remaining % 60_000) / 1000)), label: t.home.countdown.seconds },
  ]

  const urgent = next.id === 'registrationDeadline' && days < 30
  const dateFormatter = new Intl.DateTimeFormat(language, {
    dateStyle: 'full',
    timeZone: 'Europe/Paris',
  })

  return (
    <VStack gap={6}>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        fontWeight="bold"
        textAlign="center"
        color={urgent ? 'red.400' : brandColors.accent}
      >
        {t.home.countdown[next.id]}
      </Text>
      {/* Must stay on one line on mobile: tiles shrink and share the row instead of wrapping */}
      <HStack role="timer" gap={{ base: 2, md: 6 }} justify="center" w="full">
        {units.map(unit => (
          <VStack
            key={unit.label}
            gap={1}
            flex={{ base: '1 1 0', md: '0 0 auto' }}
            minW={{ base: 0, md: '150px' }}
            maxW={{ base: '110px', md: 'none' }}
            p={{ base: 2, md: 6 }}
            position="relative"
            borderRadius="xl"
            boxShadow={`0 0 24px ${urgent ? 'rgba(229, 62, 62, 0.35)' : 'rgba(140, 28, 132, 0.35)'}`}
            // Gradient border only (background stays transparent): a gradient-filled
            // overlay masked so only the 3px border ring remains visible
            _before={{
              content: '""',
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              padding: '3px',
              bgGradient: 'to-br',
              gradientFrom: urgent ? 'red.600' : brandColors.primary,
              gradientTo: urgent ? 'red.400' : brandColors.accent,
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              pointerEvents: 'none',
            }}
          >
            <Text
              fontSize={{ base: '2xl', sm: '3xl', md: '7xl' }}
              fontWeight="extrabold"
              lineHeight="1"
              fontVariantNumeric="tabular-nums"
            >
              {unit.value}
            </Text>
            <Text
              fontSize={{ base: '2xs', md: 'sm' }}
              fontWeight="bold"
              letterSpacing={{ base: 'wide', md: 'widest' }}
              color="gray.400"
              textTransform="uppercase"
            >
              {unit.label}
            </Text>
          </VStack>
        ))}
      </HStack>
      <VStack gap={1}>
        {ELECTION_MILESTONES.map(milestone => (
          <Text
            key={milestone.id}
            fontSize="sm"
            color={milestone.id === next.id ? 'inherit' : 'gray.500'}
          >
            {t.home.countdown[milestone.id]} · {dateFormatter.format(new Date(milestone.date))}
          </Text>
        ))}
      </VStack>
    </VStack>
  )
}
