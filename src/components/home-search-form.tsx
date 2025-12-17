"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Block, Button, List, ListInput } from "konsta/react";
import { useQueryState } from "nuqs";
import z from "zod";

const PostcodeSchema = z
  .number()
  .min(100000, "Postcode must be 6 digits")
  .max(999999, "Postcode must be 6 digits");

export default function HomeSearchForm() {
  const router = useRouter();
  const [postcode, setPostcode] = useQueryState("postcode"); // Nuqs query state
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = PostcodeSchema.safeParse(Number(postcode));

    if (!result.success) {
      return setError(result.error.issues[0].message);
    }

    setError("");

    router.push(`/services?postcode=${postcode}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <List strong inset className="mb-6">
        <ListInput
          label="Patient’s Postcode"
          type="number"
          placeholder="6-digit postcode"
          value={postcode || ""}
          onInput={(e) => setPostcode((e.target as HTMLInputElement).value)}
          clearButton
          onClear={() => setPostcode(null)}
          error={error}
        />
      </List>

      <Block>
        <Button large type="submit">
          Continue
        </Button>
      </Block>
    </form>
  );
}
