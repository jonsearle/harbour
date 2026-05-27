"use client";

import type { UserAnswers } from "@/components/onboarding-modal";

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
  return <div>Step 1 - Coming soon</div>;
}
