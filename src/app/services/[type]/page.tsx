import { Page, Navbar, Link, ListItem, Block } from 'konsta/react'
import { ArrowLeft, List } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'
interface ServiceCategoryPageProps {
  type: string
}

const ServiceCategoryPage = ({ type }: ServiceCategoryPageProps) => {
  // const [servicesQuery, setServicesQuery] = useQueryState(
  //   'services',
  //   parseAsArrayOf(parseAsString)
  // )

  const { data: { data: services = [] } = {} } = useQuery({
    queryKey: ['service-category', type],
    queryFn: async () =>
      await supabase.from('service').select('*').eq('type', type),
  })

  return (
    <Page>
      <Navbar
        title={`Choose ${type} Services`}
        left={
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        }
      />
      <Block>
        <List>
          {services?.map((service) => (
            <ListItem
              key={service.id}
              link
              title={service.name}
              subtitle={service.address}
            />
          ))}
        </List>
      </Block>
    </Page>
  )
}

export default ServiceCategoryPage
