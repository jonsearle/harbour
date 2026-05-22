"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const situations = [
  "Currently handling probate",
  "Recently completed probate",
  "Planning ahead",
  "Supporting family member",
];

export function EarlyAccessForm() {
  const [submitted, setSubmitted] = useState(false);
  const [situation, setSituation] = useState(situations[0]);

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
          Thank you. Your interest has been registered.
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          We will be in touch as we invite the next small group to try Harbour.
        </p>
      </div>
    );
  }

  return (
    <form
      className="mx-auto grid max-w-xl gap-4"
      onSubmit={handleSubmit}
      aria-label="Register interest in Harbour early access"
    >
      <input name="situation" type="hidden" value={situation} />
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
      <fieldset className="grid gap-3 text-left">
        <legend className="text-sm font-medium text-foreground">
          What best describes you?
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {situations.map((option) => (
            <button
              className={cn(
                "rounded-md bg-card px-4 py-3 text-left text-sm text-muted-foreground shadow-fine transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                situation === option &&
                  "bg-accent/55 text-accent-foreground",
              )}
              key={option}
              onClick={() => setSituation(option)}
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>
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
          placeholder="Tell us a little about your situation."
        />
      </div>
      <Button type="submit" size="lg" className="mt-2 w-full">
        Register interest
      </Button>
    </form>
  );
}
