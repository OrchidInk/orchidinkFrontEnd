'use client'

import { ChakraProvider } from '@chakra-ui/react'
import SettingsProvider from './contexts/SettingsContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SettingsProvider>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </SettingsProvider>
  )
}
