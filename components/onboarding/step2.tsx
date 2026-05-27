"use client";

import { useState, useMemo } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getQuestionsForOption,
  shouldAdvanceToRelief,
} from "@/lib/onboarding-questions";
import { trackOnboardingEvent } from "@/lib/onboarding-analytics";
import { cn } from "@/lib/utils";
import type { UserAnswers } from "@/components/onboarding-modal";

interface OnboardingStep2Props {
  onNext: (answers: { questions: Record<string, string> }) => void;
  onBack: () => void;
  answers: Partial<UserAnswers>;
  isLoading: boolean;
}

export function OnboardingStep2({
  onNext,
  onBack,
  answers,
  isLoading,
}: OnboardingStep2Props) {
  const questions = useMemo(
    () => getQuestionsForOption(answers.startingOption || ""),
    [answers.startingOption]
  );

  const [questionAnswers, setQuestionAnswers] = useState<Record<string, string>>(
    answers.questions || {}
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = questionAnswers[currentQuestion?.id];
  const answeredCount = Object.keys(questionAnswers).length;
  const shouldShowNext =
    answeredCount >= currentQuestionIndex + 1 && selectedAnswer;

  const handleSelectOption = (questionId: string, optionValue: string) => {
    const newAnswers = { ...questionAnswers, [questionId]: optionValue };
    setQuestionAnswers(newAnswers);

    trackOnboardingEvent("onboarding_question_answered", {
      question_id: questionId,
      answer: optionValue,
      question_index: currentQuestionIndex + 1,
    });

    // Check if we should advance to relief
    if (
      shouldAdvanceToRelief(newAnswers, questions.length) &&
      currentQuestionIndex === questions.length - 1
    ) {
      onNext({ questions: newAnswers });
      trackOnboardingEvent("onboarding_relief_viewed", {
        situation_inferred: answers.startingOption,
      });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (shouldShowNext) {
      onNext({ questions: questionAnswers });
      trackOnboardingEvent("onboarding_relief_viewed", {
        situation_inferred: answers.startingOption,
      });
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else {
      onBack();
    }
  };

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="animate-fade-up">
      <div className="mb-8">
        <div className="mb-3 flex justify-between text-xs text-muted-foreground">
          <span>
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <span>
            {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-accent transition-all duration-500"
            style={{
              width: `${Math.max(
                ((currentQuestionIndex + 1) / questions.length) * 100,
                8
              )}%`,
            }}
          />
        </div>
      </div>

      <h2 className="font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
        {currentQuestion.title}
      </h2>

      <div className="mt-8 grid gap-3">
        {currentQuestion.options.map((option) => {
          const isSelected = selectedAnswer === option.value;

          return (
            <button
              key={option.value}
              onClick={() => handleSelectOption(currentQuestion.id, option.value)}
              className={cn(
                "flex min-h-16 items-center justify-between rounded-lg border border-border/70 bg-card px-5 py-4 text-left text-base text-foreground shadow-fine transition-colors hover:bg-background/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50",
                isSelected && "border-accent/70 bg-accent/20 text-accent-foreground"
              )}
              disabled={isLoading}
            >
              <span>{option.label}</span>
              <span
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border bg-card",
                  isSelected && "border-transparent bg-accent text-accent-foreground"
                )}
              >
                {isSelected && <CheckCircle2 className="h-4 w-4" />}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <Button
          onClick={handleBack}
          variant="ghost"
          disabled={isLoading}
        >
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={!shouldShowNext || isLoading}
        >
          {currentQuestionIndex === questions.length - 1
            ? "See result"
            : "Next"}
        </Button>
      </div>
    </div>
  );
}
