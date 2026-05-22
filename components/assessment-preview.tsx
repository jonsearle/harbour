"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const questions = [
  {
    question: "Is there a valid will?",
    helper: "A will can make the next steps clearer, though it is not always the whole picture.",
    options: ["Yes", "No", "Not sure"],
  },
  {
    question: "Does the estate include property?",
    helper: "Property can affect probate, tax and the documents needed.",
    options: ["No property", "One UK property", "More than one property"],
  },
  {
    question: "Are there overseas assets?",
    helper: "Assets outside the UK can add legal and practical complexity.",
    options: ["No", "Yes", "Not sure"],
  },
  {
    question: "Are there any disputes between beneficiaries?",
    helper: "Disputes are a common reason to involve professional support early.",
    options: ["No", "Yes", "Not sure"],
  },
  {
    question: "Approximate estate value",
    helper: "A broad estimate is enough at this stage.",
    options: ["Under £325k", "£325k-£1m", "Over £1m", "Not sure"],
  },
  {
    question: "Is inheritance tax likely to apply?",
    helper: "If you are unsure, Harbour would help you understand what to check.",
    options: ["Unlikely", "Likely", "Not sure"],
  },
];

export function AssessmentPreview() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const complete = Object.keys(answers).length === questions.length;
  const current = questions[step];

  const progress = useMemo(
    () => ((Object.keys(answers).length || 1) / questions.length) * 100,
    [answers],
  );

  function selectAnswer(answer: string) {
    setAnswers((currentAnswers) => ({ ...currentAnswers, [step]: answer }));
  }

  function nextStep() {
    if (step < questions.length - 1) {
      setStep((currentStep) => currentStep + 1);
    }
  }

  function previousStep() {
    if (step > 0) {
      setStep((currentStep) => currentStep - 1);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
      <Card className="border-border/60 bg-card/90 p-6 shadow-soft sm:p-8">
        <div className="mb-7 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Assessment preview
            </p>
            <h3 className="mt-2 text-2xl font-medium text-foreground">
              A few calm questions about the estate.
            </h3>
          </div>
          <span className="rounded-full bg-accent/60 px-3 py-1 text-xs font-medium text-accent-foreground">
            {step + 1} of {questions.length}
          </span>
        </div>

        <div className="mb-8 h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-[hsl(154_18%_34%)] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <fieldset>
          <legend className="text-xl font-medium leading-7 text-foreground">
            {current.question}
          </legend>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {current.helper}
          </p>

          <div className="mt-6 grid gap-3">
            {current.options.map((option) => {
              const selected = answers[step] === option;

              return (
                <button
                  className={cn(
                    "flex items-center justify-between rounded-lg bg-background/70 px-4 py-3.5 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    selected && "bg-accent/55 text-accent-foreground",
                  )}
                  key={option}
                  onClick={() => selectAnswer(option)}
                  type="button"
                >
                  <span>{option}</span>
                  <span
                    className={cn(
                      "h-2.5 w-2.5 rounded-full bg-muted-foreground/30",
                      selected && "bg-[hsl(154_18%_34%)]",
                    )}
                  />
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-8 flex items-center justify-between gap-3">
          <Button
            disabled={step === 0}
            onClick={previousStep}
            type="button"
            variant="ghost"
          >
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            Back
          </Button>
          <Button
            disabled={!answers[step] || step === questions.length - 1}
            onClick={nextStep}
            type="button"
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Card>

      <div className="grid gap-4">
        <div className="rounded-lg bg-accent/35 p-5">
          <div className="flex items-center gap-2">
            <CircleHelp className="h-4 w-4 text-accent-foreground" />
            <p className="text-sm font-medium text-foreground">
              What Harbour is checking
            </p>
          </div>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            The assessment looks for signs that an estate may be straightforward,
            and for areas where legal or tax advice is sensible.
          </p>
        </div>

        <div
          className={cn(
            "grid gap-4 transition-opacity duration-300",
            !complete && "opacity-70",
          )}
        >
          <OutcomeCard
            icon="check"
            title="Straightforward estate"
            body="This estate appears relatively straightforward and may be suitable for guided DIY probate."
            items={[
              "Guided probate workflow",
              "Document organisation",
              "Step-by-step support",
              "Probate form assistance",
            ]}
          />
          <OutcomeCard
            icon="scale"
            title="Professional support recommended"
            body="This estate may involve legal or tax complexity. Professional probate support is likely appropriate."
            items={[
              "Clear explanation of the concern",
              "Calm recommendation to seek advice",
              "Optional direction to probate support",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function OutcomeCard({
  icon,
  title,
  body,
  items,
}: {
  icon: "check" | "scale";
  title: string;
  body: string;
  items: string[];
}) {
  const Icon = icon === "check" ? CheckCircle2 : Scale;

  return (
    <Card className="border-border/60 bg-card/85 p-6 shadow-none">
      <div className="flex gap-4">
        <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/55">
          <Icon className="h-4 w-4 text-accent-foreground" aria-hidden="true" />
        </div>
        <div>
          <h4 className="text-lg font-medium text-foreground">{title}</h4>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
            {items.map((item) => (
              <li className="flex gap-2" key={item}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(154_18%_34%)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
