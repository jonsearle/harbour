"use client";

import type { UserAnswers } from "@/components/onboarding-modal";

interface OnboardingStep4Props {
  onNext: () => void;
  onBack: () => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export function OnboardingStep4({
  onNext,
  onBack,
  isLoading,
  setIsLoading,
}: OnboardingStep4Props) {
  return <div>Step 4 - Coming soon</div>;
}
