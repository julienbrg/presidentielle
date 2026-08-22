'use client'

import { type ReactNode, memo } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeProvider } from '@/components/ui/color-mode'
import { system } from '@/theme/system'
// W3pkProvider renders children on the server too, so pages stay
// crawlable by bots; w3pk itself only initializes in the browser.
import { W3pkProvider } from './W3PK'

const ContextProvider = memo(function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <ColorModeProvider defaultTheme="dark">
      <ChakraProvider value={system}>
        <W3pkProvider>{children}</W3pkProvider>
      </ChakraProvider>
    </ColorModeProvider>
  )
})

export default ContextProvider
