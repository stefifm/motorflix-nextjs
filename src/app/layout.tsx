import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NextAuthProvider } from './ui/NextAuthProvider'
import Footer from './ui/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MOTORFLIX',
  description: 'MOTORFLIX la plataforma de streaming de videos dedicados al deporte motor'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NextAuthProvider>
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
