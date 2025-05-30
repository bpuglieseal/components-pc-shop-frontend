import type {Metadata} from 'next'
import {Header} from '@/features/shared/components/header'
import {Navigation} from '@/features/shared/components/navigation'
import {Inter} from 'next/font/google'
import {InfoLinks} from '@/features/shared/components/info-links'
import './globals.css'
import {Footer} from '@/features/shared/components/footer'

// Providers
import {NextAuthProvider} from '@/providers/next-auth'

const inter = Inter({
  variable: '--inter-font',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'PC Components Store'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <NextAuthProvider>
          <Header />
          <Navigation />
          <main>
            {children}
            <InfoLinks />
          </main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
