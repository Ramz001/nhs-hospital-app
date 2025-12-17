import { cn } from "@/lib/utils";
import { List, ListItem, Badge } from "konsta/react";
import { Stethoscope, School, Smile, Eye } from "lucide-react";

const serviceCategories = [
  {
    type: "gp",
    label: "General Practitioner",
    icon: Stethoscope,
    description: "Find your local GP surgery",
    color: "text-primary",
  },
  {
    type: "school",
    label: "School",
    icon: School,
    description: "Register for school services",
    color: "text-green-600",
  },
  {
    type: "dentist",
    label: "Dentist",
    icon: Smile,
    description: "Find dental care providers",
    color: "text-blue-600",
  },
  {
    type: "optician",
    label: "Optician",
    icon: Eye,
    description: "Find eye care services",
    color: "text-purple-600",
  },
];

const ServiceCategories = () => {
  return (
    <List strongIos outlineIos>
      {serviceCategories.map((service) => {
        const Icon = service.icon;

        return (
          <ListItem
            key={service.type}
            link
            media={
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <Icon className={cn("w-5 h-5", service.color)} />
              </div>
            }
            title={service.label}
            subtitle={service.description}
          />
        );
      })}
    </List>
  );
};

export default ServiceCategories;
