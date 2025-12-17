"use client";

import HomeSearchForm from "@/components/home-search-form";
import { Page, Block } from "konsta/react";

export default function Home() {
  return (
    <Page className="h-full flex items-center justify-center flex-col px-4">
      {/* Header */}
      <div className="text-center mb-8 w-full">
        <h2 className="text-3xl font-bold text-foreground mb-3">
          Find Healthcare Services
        </h2>
        <p className="text-base text-secondary-foreground">
          Enter the patient’s postcode to find nearby GPs, schools, dentists,
          and opticians.
        </p>
      </div>

      {/* Form */}
      <HomeSearchForm />

      {/* Tip */}
      <Block strong inset className="mt-6 bg-background ">
        <p className="text-sm text-muted-foreground">
          <strong>Tip:</strong> We’ll automatically show the nearest services
          for each category based on this postcode.
        </p>
      </Block>
    </Page>
  );
}
