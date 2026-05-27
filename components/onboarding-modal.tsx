"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { OnboardingStep1 } from "@/components/onboarding/step1";
import { OnboardingStep2 } from "@/components/onboarding/step2";
import { OnboardingStep3 } from "@/components/onboarding/step3";
import { OnboardingStep4 } from "@/components/onboarding/step4";
import { trackOnboardingEvent } from "@/lib/onboarding-analytics";

type OnboardingStep = 1 | 2 | 3 | 4;

export type UserAnswers = {
  startingOption?: string;
  freeTextInput?: string;
  questions?: Record<string, string>;
  email?: string;
};

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(1);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasTrackedOpen, setHasTrackedOpen] = useState(false);

  useEffect(() => {
    if (isOpen && !hasTrackedOpen) {
      trackOnboardingEvent("onboarding_opened", { source: "homepage_cta" });
      setHasTrackedOpen(true);
    }
  }, [isOpen, hasTrackedOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    trackOnboardingEvent("onboarding_closed", {
      step_closed_from: currentStep,
      time_spent_seconds: 0, // TODO: calculate actual time
    });
    onClose();
  };

  const handleNext = (newAnswers: Partial<UserAnswers>) => {
    setAnswers({ ...answers, ...newAnswers });
    if (currentStep < 4) {
      setCurrentStep((prev) => (prev + 1) as OnboardingStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as OnboardingStep);
    }
  };

  const handleAccountCreated = () => {
    trackOnboardingEvent("onboarding_signup_completed", {
      email_domain: answers.email?.split("@")[1] || "unknown",
    });
    onClose();
    // TODO: Redirect to workspace
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="relative h-full w-full max-h-screen overflow-y-auto bg-background sm:h-auto sm:w-full sm:max-w-3xl sm:rounded-lg">
        <button
          onClick={handleClose}
          className="absolute right-6 top-6 p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close onboarding"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="px-6 py-8 sm:px-8">
          {currentStep === 1 && (
            <OnboardingStep1
              onNext={handleNext}
              answers={answers}
              isLoading={isLoading}
            />
          )}
          {currentStep === 2 && (
            <OnboardingStep2
              onNext={handleNext}
              onBack={handleBack}
              answers={answers}
              isLoading={isLoading}
            />
          )}
          {currentStep === 3 && (
            <OnboardingStep3
              onNext={handleNext}
              onBack={handleBack}
              onClose={handleClose}
              answers={answers}
            />
          )}
          {currentStep === 4 && (
            <OnboardingStep4
              onNext={handleAccountCreated}
              onBack={handleBack}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          )}
        </div>
      </div>
    </div>
  );
}
