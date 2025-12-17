"use client";

import { useState } from "react";
import { Button, Page, Navbar, Link, Block } from "konsta/react";
import { useQueryState } from "nuqs";
import { ArrowLeft } from "lucide-react";
import ServiceCategories from "@/components/service-categories";

export default function ServicesPage() {
  const [postcode] = useQueryState("postcode");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (serviceType: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceType)
        ? prev.filter((s) => s !== serviceType)
        : [...prev, serviceType]
    );
  };

  return (
    <Page>
      <Navbar
        title="Find Services Near You"
        subtitle={`Postcode: ${postcode || "N/A"}`}
        left={
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
          </Link>
        }
      />
      <Block>
        <h2 className="text-2xl font-bold text-primary">
          Select Service Categories
        </h2>
      </Block>

      <ServiceCategories />

      {/* Continue Button */}
      {selectedServices.length > 0 && (
        <Button large className="w-full bg-primary text-foreground">
          Continue with {selectedServices.length} service
          {selectedServices.length !== 1 ? "s" : ""}
        </Button>
      )}
    </Page>
  );
}
