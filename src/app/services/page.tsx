'use client'

import { Button, Page, Navbar, Link, Block } from 'konsta/react'
import { ArrowLeft } from 'lucide-react'
import ServiceCategories from '@/components/service-categories'
import { useAppSelector } from '@/lib/hooks'

export default function ServicesPage() {
  const { postcode, services } = useAppSelector((state) => state.app)

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

        <ServiceCategories />

        {services && services.length > 0 && (
          <Button large className="bg-primary text-foreground w-full">
            Continue with services
          </Button>
        )}
      </Block>
    </Page>
  )
}
