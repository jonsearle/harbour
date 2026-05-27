"use client";

interface OnboardingStep2Props {
  onNext: (answers: { questions: Record<string, string> }) => void;
  onBack: () => void;
  answers: any;
  isLoading: boolean;
}

export function OnboardingStep2({
  onNext,
  onBack,
  answers,
  isLoading,
}: OnboardingStep2Props) {
  return <div>Step 2 - Coming soon</div>;
}
