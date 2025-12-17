import { cn } from '@/lib/utils'
import { List, ListItem } from 'konsta/react'
import { Stethoscope, School, Smile, Eye } from 'lucide-react'
import { ServiceTypeEnum } from '@/db/schema'

const serviceCategories = [
  {
    type: ServiceTypeEnum.enum.gp,
    label: 'General Practitioner',
    icon: Stethoscope,
    description: 'Find your local GP surgery',
    color: 'text-primary',
  },
  {
    type: ServiceTypeEnum.enum.school,
    label: 'School',
    icon: School,
    description: 'Register for school services',
    color: 'text-green-600',
  },
  {
    type: ServiceTypeEnum.enum.dentist,
    label: 'Dentist',
    icon: Smile,
    description: 'Find dental care providers',
    color: 'text-blue-600',
  },
  {
    type: ServiceTypeEnum.enum.optician,
    label: 'Optician',
    icon: Eye,
    description: 'Find eye care services',
    color: 'text-purple-600',
  },
]

const ServiceCategories = () => {
  return (
    <List strongIos outlineIos>
      {serviceCategories.map((service) => {
        const Icon = service.icon

        return (
          <ListItem
            key={service.type}
            link
            media={
              <div className="flex h-10 w-10 items-center justify-center rounded-full">
                <Icon className={cn('h-5 w-5', service.color)} />
              </div>
            }
            title={service.label}
            subtitle={service.description}
          />
        )
      })}
    </List>
  )
}

export default ServiceCategories
