"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackOnboardingEvent } from "@/lib/onboarding-analytics";
import type { UserAnswers } from "@/components/onboarding-modal";

const NEXT_ACTIONS = [
  "Locate key documents (will, death certificate, bank statements)",
  "Notify banks and major organizations",
  "Gather information about assets and debts",
];

interface OnboardingStep3Props {
  onNext: (answers: {}) => void;
  onBack: () => void;
  onClose: () => void;
  answers: Partial<UserAnswers>;
}

export function OnboardingStep3({
  onNext,
  onBack,
  onClose,
  answers,
}: OnboardingStep3Props) {
  const handleSignUp = () => {
    trackOnboardingEvent("onboarding_signup_started", {
      situation: answers.startingOption,
    });
    onNext({});
  };

  const handleGuest = () => {
    trackOnboardingEvent("onboarding_guest_continued", {
      step_exited_from: 3,
      situation: answers.startingOption,
    });
    onClose();
  };

  return (
    <div className="animate-fade-up">
      <div className="flex gap-4">
        <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/25">
          <CheckCircle2 className="h-5 w-5 text-accent-foreground" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Here's what matters now
          </p>
          <h2 className="mt-2 max-w-2xl break-words font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
            You don't need to solve everything today
          </h2>
        </div>
      </div>

      <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
        Based on what you've shared, the most important thing right now is
        getting organized and starting to notify key people. Everything else
        can wait.
      </p>

      <div className="mt-8">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
          Start with these
        </p>
        <ul className="grid gap-3">
          {NEXT_ACTIONS.map((action) => (
            <li
              key={action}
              className="flex gap-3 rounded-lg bg-background/70 p-4 text-sm text-muted-foreground"
            >
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground"
                aria-hidden="true"
              />
              <span>{action}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 rounded-lg border border-border/70 bg-card p-5">
        <p className="text-sm leading-6 text-foreground">
          <span className="font-medium">Save your progress</span>
          <br />
          <span className="text-muted-foreground">
            Create a free account to track these steps and keep everything
            organized.
          </span>
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button onClick={handleSignUp}>Create free account</Button>
        <Button onClick={handleGuest} variant="ghost">
          Continue as guest
        </Button>
      </div>
    </div>
  );
}
