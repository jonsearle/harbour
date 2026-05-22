"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function EarlyAccessForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="mx-auto max-w-xl rounded-lg border border-accent bg-card px-6 py-8 text-center shadow-fine"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2
          className="mx-auto mb-4 h-8 w-8 text-[hsl(154_18%_34%)]"
          aria-hidden="true"
        />
        <h3 className="text-xl font-medium text-foreground">
          Thank you. You are on the early access list.
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          We will be in touch as we open the next small group.
        </p>
      </div>
    );
  }

  return (
    <form
      className="mx-auto grid max-w-xl gap-4"
      onSubmit={handleSubmit}
      aria-label="Join the Harbour early access list"
    >
      <div className="grid gap-2 text-left">
        <label className="text-sm font-medium text-foreground" htmlFor="email">
          Email address
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.co.uk"
          required
        />
      </div>
      <div className="grid gap-2 text-left">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="experience"
        >
          Tell us about your experience{" "}
          <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <Textarea
          id="experience"
          name="experience"
          placeholder="What felt hardest to keep track of?"
        />
      </div>
      <Button type="submit" size="lg" className="mt-2 w-full">
        Join early access
      </Button>
    </form>
  );
}
