'use client'

import { Button, Page, Navbar, Link, Block } from 'konsta/react'
import { parseAsArrayOf, useQueryState, parseAsString } from 'nuqs'
import { ArrowLeft } from 'lucide-react'
import ServiceCategories from '@/components/service-categories'

export default function ServicesPage() {
  const [postcode] = useQueryState('postcode')
  const [servicesQuery, setServicesQuery] = useQueryState(
    'services',
    parseAsArrayOf(parseAsString)
  )

  return (
    <Page>
      <Navbar
        title="Find Services Near You"
        subtitle={postcode || 'N/A'}
        left={
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        }
      />
      <Block>
        <h2 className="text-primary text-2xl font-bold">
          Select Service Categories
        </h2>
      </Block>

      <ServiceCategories />

      <Block>
        <Button large className="bg-primary text-foreground w-full">
          Continue with {servicesQuery} service
        </Button>
      </Block>
    </Page>
  )
}
