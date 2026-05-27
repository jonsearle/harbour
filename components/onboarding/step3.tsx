"use client";

import type { UserAnswers } from "@/components/onboarding-modal";

interface OnboardingStep3Props {
  onNext: (answers: {}) => void;
  onBack: () => void;
  answers: Partial<UserAnswers>;
}

export function OnboardingStep3({
  onNext,
  onBack,
  answers,
}: OnboardingStep3Props) {
  return <div>Step 3 - Coming soon</div>;
}
