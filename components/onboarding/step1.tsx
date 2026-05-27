"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { trackOnboardingEvent } from "@/lib/onboarding-analytics";
import type { UserAnswers } from "@/components/onboarding-modal";

const OPTIONS = [
  { label: "Someone died recently", value: "someone_died_recently" },
  { label: "I've been named executor", value: "named_executor" },
  { label: "I think probate is required", value: "probate_required" },
  { label: "I'm dealing with paperwork", value: "dealing_with_paperwork" },
  { label: "I'm not sure what to do next", value: "not_sure" },
];

interface OnboardingStep1Props {
  onNext: (answers: { startingOption?: string; freeTextInput?: string }) => void;
  answers: Partial<UserAnswers>;
  isLoading: boolean;
}

export function OnboardingStep1({
  onNext,
  answers,
  isLoading,
}: OnboardingStep1Props) {
  const [showFreeText, setShowFreeText] = useState(false);
  const [freeTextValue, setFreeTextValue] = useState("");

  const handleOptionClick = (value: string) => {
    const option = OPTIONS.find((o) => o.value === value);
    trackOnboardingEvent("onboarding_option_selected", {
      option_label: option?.label,
      option_value: value,
    });
    onNext({ startingOption: value });
  };

  const handleFreeTextClick = () => {
    setShowFreeText(true);
  };

  const handleFreeTextSubmit = () => {
    trackOnboardingEvent("onboarding_free_text_submitted", {
      text_length: freeTextValue.length,
    });
    onNext({ freeTextInput: freeTextValue });
  };

  if (showFreeText) {
    return (
      <div className="animate-fade-up">
        <h1 className="font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
          Tell us more
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Describe your situation in your own words. This helps us understand
          what you're dealing with.
        </p>
        <Textarea
          value={freeTextValue}
          onChange={(e) => setFreeTextValue(e.target.value)}
          placeholder="Describe your situation..."
          className="mt-6"
          rows={6}
        />
        <div className="mt-6 flex gap-3">
          <Button
            onClick={handleFreeTextSubmit}
            disabled={!freeTextValue.trim() || isLoading}
          >
            Continue
          </Button>
          <Button
            variant="ghost"
            onClick={() => setShowFreeText(false)}
            disabled={isLoading}
          >
            Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-up">
      <h1 className="font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
        Tell Harbour what's happening
      </h1>
      <p className="mt-6 text-base leading-7 text-muted-foreground">
        We'll help you understand what matters next and guide you through the
        process step by step.
      </p>

      <div className="mt-8 grid gap-3">
        {OPTIONS.map((option) => (
          <button
            key={option.value}
            onClick={() => handleOptionClick(option.value)}
            className="flex min-h-16 items-center rounded-lg border border-border/70 bg-card px-5 py-4 text-left text-base text-foreground shadow-fine transition-colors hover:bg-background/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
            disabled={isLoading}
          >
            {option.label}
          </button>
        ))}

        <button
          onClick={handleFreeTextClick}
          className="flex min-h-16 items-center rounded-lg border border-border/70 bg-card px-5 py-4 text-left text-base text-foreground shadow-fine transition-colors hover:bg-background/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
          disabled={isLoading}
        >
          Or describe your situation in your own words
        </button>
      </div>
    </div>
  );
}
