import type {Metadata} from 'next'
import {Header} from '@/features/shared/components/header'
import {Inter} from 'next/font/google'
import './globals.css'

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
        <Header />
        {children}
      </body>
    </html>
  )
}
