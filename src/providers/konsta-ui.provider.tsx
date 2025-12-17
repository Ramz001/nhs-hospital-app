'use client'

import { App } from 'konsta/react'

export default function KonstaProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <App safeAreas theme="ios">
      {children}
    </App>
  )
}
