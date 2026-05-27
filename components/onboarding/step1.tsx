"use client";

interface OnboardingStep1Props {
  onNext: (answers: { startingOption?: string; freeTextInput?: string }) => void;
  answers: any;
  isLoading: boolean;
}

export function OnboardingStep1({
  onNext,
  answers,
  isLoading,
}: OnboardingStep1Props) {
  return <div>Step 1 - Coming soon</div>;
}
