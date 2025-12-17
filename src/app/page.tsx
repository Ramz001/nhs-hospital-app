'use client'

import HomeSearchForm from '@/components/home-search-form'
import { Page, Block } from 'konsta/react'

export default function Home() {
  return (
    <Page className="flex h-full flex-col items-center justify-center px-4">
      {/* Header */}
      <div className="mb-8 w-full text-center">
        <h2 className="text-foreground mb-3 text-3xl font-bold">
          Find Healthcare Services
        </h2>
        <p className="text-secondary-foreground text-base">
          Enter the patient’s postcode to find nearby GPs, schools, dentists,
          and opticians.
        </p>
      </div>

      {/* Form */}
      <HomeSearchForm />

      {/* Tip */}
      <Block strong inset className="bg-background mt-6">
        <p className="text-muted-foreground text-sm">
          <strong>Tip:</strong> We’ll automatically show the nearest services
          for each category based on this postcode.
        </p>
      </Block>
    </Page>
  )
}
