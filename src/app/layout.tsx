'use client'

import './globals.css'
import { DM_Sans } from 'next/font/google'
import RootProvider from '@/providers/root.provider'
import { Suspense } from 'react'
import { Loader } from 'lucide-react'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NHS Hospital App</title>
      </head>
      <body className="antialiased">
        <main className="safe-areas mx-auto w-full max-w-lg items-center justify-center">
          <Suspense
            fallback={
              <div className="flex h-screen items-center justify-center">
                <Loader className="text-primary animate-spin" />
              </div>
            }
          >
            <RootProvider>{children}</RootProvider>
          </Suspense>
        </main>
      </body>
    </html>
  )
}
