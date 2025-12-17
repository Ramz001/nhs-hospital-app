"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Page, Navbar, Link } from "konsta/react";
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
        // className="top-0 sticky bg-background"
      />

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Back button */}

        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-primary">
            Select Service Categories
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Patient postcode:{" "}
            <span className="font-semibold text-primary">{postcode}</span>
          </p>
        </div>

        {/* Service Categories List */}
        <ServiceCategories
          onClick={toggleService}
          selectedServices={selectedServices}
        />

        {/* Continue Button */}
        {selectedServices.length > 0 && (
          <Button large className="w-full bg-primary text-foreground">
            Continue with {selectedServices.length} service
            {selectedServices.length !== 1 ? "s" : ""}
          </Button>
        )}
      </div>
    </Page>
  );
}
