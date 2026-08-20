'use client'

import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { useSyncExternalStore } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'
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
    return <Box minH="220px" aria-hidden="true" />
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
        fontSize="lg"
        fontWeight="semibold"
        textAlign="center"
        color={urgent ? 'red.400' : 'inherit'}
      >
        {t.home.countdown[next.id]}
      </Text>
      <HStack role="timer" gap={{ base: 2, md: 4 }} justify="center" flexWrap="wrap">
        {units.map(unit => (
          <VStack
            key={unit.label}
            gap={0}
            minW={{ base: '70px', md: '90px' }}
            p={3}
            borderWidth="1px"
            borderColor={urgent ? 'red.400' : 'gray.700'}
            borderRadius="md"
          >
            <Text
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight="bold"
              fontVariantNumeric="tabular-nums"
            >
              {unit.value}
            </Text>
            <Text fontSize="xs" color="gray.400" textTransform="uppercase">
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
