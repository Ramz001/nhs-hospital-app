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

interface ServiceCategoriesProps {
  onClick: (type: string) => void;
  selectedServices: string[];
}

const ServiceCategories = ({
  onClick,
  selectedServices,
}: ServiceCategoriesProps) => {
  return (
    <List strongIos outlineIos>
      {serviceCategories.map((service) => {
        const Icon = service.icon;
        const isSelected = selectedServices.includes(service.type);

        return (
          <ListItem
            key={service.type}
            link
            chevronMaterial={false}
            onClick={() => onClick(service.type)}
            media={
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isSelected ? "bg-primary/10" : "bg-muted/50"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isSelected ? "text-primary" : service.color
                  }`}
                />
              </div>
            }
            title={service.label}
            subtitle={service.description}
            after={
              isSelected && (
                <Badge colors={{ bg: "bg-primary", text: "text-white" }}>
                  ✓
                </Badge>
              )
            }
            className={isSelected ? "bg-primary/5 dark:bg-primary/10" : ""}
          />
        );
      })}
    </List>
  );
};

export default ServiceCategories;
