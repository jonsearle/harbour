"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  HelpCircle,
  Mail,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HarbourMockup } from "@/components/harbour-mockup";
import { Input } from "@/components/ui/input";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type QuestionId = "will" | "estateValue" | "property" | "overseas" | "disputes";
type ResultType = "can_help" | "too_complex" | "more_info";
type Screen = "questions" | "result" | "email" | "thanks";

type Option = {
  label: string;
  value: string;
};

type Question = {
  id: QuestionId;
  title: string;
  options: Option[];
};

type AssessmentEvent =
  | "assessment_started"
  | "assessment_question_answered"
  | "assessment_completed"
  | "assessment_result_viewed"
  | "assessment_restart_clicked"
  | "assessment_continue_clicked"
  | "assessment_email_submitted";

const questions: Question[] = [
  {
    id: "will",
    title: "Did the person leave a will?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
      { label: "I'm not sure", value: "unknown" },
    ],
  },
  {
    id: "estateValue",
    title: "Approximately how much was the estate worth?",
    options: [
      { label: "Under £325,000", value: "under_325k" },
      { label: "Over £325,000", value: "over_325k" },
      { label: "I'm not sure", value: "unknown" },
    ],
  },
  {
    id: "property",
    title: "Did they own property?",
    options: [
      { label: "No", value: "no" },
      { label: "Yes - one property", value: "one_property" },
      { label: "Yes - more than one property", value: "multiple_properties" },
      { label: "I'm not sure", value: "unknown" },
    ],
  },
  {
    id: "overseas",
    title: "Were any assets held outside the UK?",
    options: [
      { label: "No", value: "no" },
      { label: "Yes", value: "yes" },
      { label: "I'm not sure", value: "unknown" },
    ],
  },
  {
    id: "disputes",
    title: "Is anyone likely to dispute the estate or inheritance?",
    options: [
      { label: "No", value: "no" },
      { label: "Yes", value: "yes" },
      { label: "I'm not sure", value: "unknown" },
    ],
  },
];

const unknownChecklist: Record<QuestionId, string> = {
  will: "Find out whether a will exists",
  estateValue: "Estimate the total value of assets, savings, and property",
  property: "Confirm whether the person owned any property",
  overseas: "Check whether any accounts, property, or investments were held outside the UK",
  disputes: "Understand whether anyone may challenge the estate or inheritance",
};

const estateValueChecklist =
  "Check whether inheritance tax, allowances, or property details may affect the application";

export function ProbateAssessmentFlow() {
  const [screen, setScreen] = useState<Screen>("questions");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<QuestionId, string>>>({});
  const [started, setStarted] = useState(false);
  const [email, setEmail] = useState("");

  const currentQuestion = questions[step];
  const answeredCount = Object.keys(answers).length;
  const completionPercent = Math.round((answeredCount / questions.length) * 100);
  const result = useMemo(() => getAssessmentResult(answers), [answers]);
  const selectedAnswer = answers[currentQuestion.id];
  const showProductPreview = screen === "result" && result.type === "can_help";

  function chooseAnswer(question: Question, option: Option) {
    if (!started) {
      setStarted(true);
      trackAssessmentEvent("assessment_started", {
        total_questions: questions.length,
      });
    }

    const nextAnswers = { ...answers, [question.id]: option.value };
    setAnswers(nextAnswers);
    trackAssessmentEvent("assessment_question_answered", {
      question_id: question.id,
      question_index: step + 1,
      answer: option.value,
      completion_percent: Math.round(
        (Object.keys(nextAnswers).length / questions.length) * 100,
      ),
    });
  }

  function goNext() {
    if (!selectedAnswer) {
      return;
    }

    if (step < questions.length - 1) {
      setStep((currentStep) => currentStep + 1);
      return;
    }

    const finalResult = getAssessmentResult(answers);
    setScreen("result");
    trackAssessmentEvent("assessment_completed", {
      result_type: finalResult.type,
      completion_percent: 100,
    });
    trackAssessmentEvent("assessment_result_viewed", {
      result_type: finalResult.type,
    });
  }

  function goBack() {
    if (step > 0) {
      setStep((currentStep) => currentStep - 1);
    }
  }

  function restartAssessment() {
    setScreen("questions");
    setStep(0);
    setAnswers({});
    setStarted(false);
    setEmail("");
    trackAssessmentEvent("assessment_restart_clicked", {
      previous_result_type: result.type,
    });
  }

  function continueToEmail() {
    setScreen("email");
    trackAssessmentEvent("assessment_continue_clicked", {
      result_type: result.type,
    });
  }

  function submitEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setScreen("thanks");
    trackAssessmentEvent("assessment_email_submitted", {
      result_type: result.type,
      email_domain: email.split("@")[1] ?? "unknown",
    });
  }

  return (
    <div
      className={cn(
        "mx-auto w-full transition-all duration-500 ease-out",
        showProductPreview ? "max-w-5xl" : "max-w-3xl",
      )}
    >
      <div className="mb-8">
        <div className="mb-3 flex justify-between text-xs text-muted-foreground">
          <span>
            {screen === "questions"
              ? `Question ${step + 1} of ${questions.length}`
              : "Almost done"}
          </span>
          <span>{completionPercent}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-accent transition-all duration-500 ease-out"
            style={{ width: `${Math.max(completionPercent, 8)}%` }}
          />
        </div>
      </div>

      {screen === "questions" && (
        <QuestionScreen
          currentQuestion={currentQuestion}
          onBack={goBack}
          onNext={goNext}
          onSelect={chooseAnswer}
          selectedAnswer={selectedAnswer}
          step={step}
        />
      )}

      {screen === "result" && (
        <ResultScreen
          answers={answers}
          onContinue={continueToEmail}
          onRestart={restartAssessment}
          result={result}
        />
      )}

      {screen === "email" && (
        <EmailScreen
          email={email}
          onBack={() => setScreen("result")}
          onEmailChange={setEmail}
          onSubmit={submitEmail}
        />
      )}

      {screen === "thanks" && <ThanksScreen onRestart={restartAssessment} />}
    </div>
  );
}

function QuestionScreen({
  currentQuestion,
  onBack,
  onNext,
  onSelect,
  selectedAnswer,
  step,
}: {
  currentQuestion: Question;
  onBack: () => void;
  onNext: () => void;
  onSelect: (question: Question, option: Option) => void;
  selectedAnswer?: string;
  step: number;
}) {
  return (
    <div
      className="animate-fade-up"
      key={currentQuestion.id}
    >
      <h3 className="break-words font-serif text-3xl font-medium leading-tight text-foreground sm:text-5xl">
        {currentQuestion.title}
      </h3>

      <div className="mt-8 grid gap-3">
        {currentQuestion.options.map((option) => {
          const selected = selectedAnswer === option.value;

          return (
            <button
              className={cn(
                "flex min-h-16 items-center justify-between rounded-lg border border-border/70 bg-card px-5 py-4 text-left text-base text-foreground shadow-fine transition-colors duration-200 hover:bg-background/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                selected &&
                  "border-accent/70 bg-accent/20 text-accent-foreground",
              )}
              key={option.value}
              onClick={() => onSelect(currentQuestion, option)}
              type="button"
            >
              <span>{option.label}</span>
              <span
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border bg-card",
                  selected &&
                    "border-transparent bg-accent text-accent-foreground",
                )}
              >
                {selected && <CheckCircle2 className="h-4 w-4" />}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <Button disabled={step === 0} onClick={onBack} type="button" variant="ghost">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Back
        </Button>
        <Button disabled={!selectedAnswer} onClick={onNext} type="button">
          {step === questions.length - 1 ? "See result" : "Next"}
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}

function ResultScreen({
  answers,
  onContinue,
  onRestart,
  result,
}: {
  answers: Partial<Record<QuestionId, string>>;
  onContinue: () => void;
  onRestart: () => void;
  result: AssessmentResult;
}) {
  if (result.type === "too_complex") {
    return (
      <div className="animate-fade-up">
        <ResultHeader icon="shield" label="Result" title="This estate may require additional legal or specialist support." />
        <div className="mt-5 max-w-2xl space-y-4 text-base leading-7 text-muted-foreground">
          <p>
            Based on your answers, your estate may involve legal or tax
            complexities that Harbour may not be able to support on its own.
          </p>
          <p>
            A probate solicitor, specialist service or professional review may
            be helpful before you continue.
          </p>
        </div>
        <div className="mt-7 rounded-lg border border-accent/35 bg-accent/15 p-5">
          <p className="text-sm font-medium text-foreground">
            A calm next step:
          </p>
          <p className="mt-2 text-base text-muted-foreground">
            Get a professional review before relying on guided support.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a
              href="https://www.co-oplegalservices.co.uk/probate-solicitors/probate-advice-and-support/"
              rel="noreferrer"
              target="_blank"
            >
              Review professional support
              <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <Button onClick={onRestart} type="button" variant="ghost">
            <RefreshCcw className="mr-2 h-4 w-4" aria-hidden="true" />
            Restart assessment
          </Button>
        </div>
        <p className="mt-7 text-sm leading-6 text-muted-foreground">
          You can still use Harbour to keep documents and communication
          organised while you decide what support is right.
        </p>
      </div>
    );
  }

  if (result.type === "more_info") {
    const checklist = getUnknownChecklist(answers);

    return (
      <div className="animate-fade-up">
        <ResultHeader icon="help" label="Result" title="A few details would help us check whether Harbour can support this estate." />
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
          To understand whether Harbour can support this estate, you may first
          need to confirm a few practical details.
        </p>
        <ul className="mt-7 grid gap-3">
          {checklist.map((item) => (
            <li
              className="flex gap-3 rounded-lg bg-background/70 p-4 text-sm text-muted-foreground"
              key={item}
            >
              <HelpCircle
                className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-7 text-sm leading-6 text-muted-foreground">
          Once you have this information, you can return and complete the
          assessment.
        </p>
        <Button className="mt-8" onClick={onRestart} type="button">
          <RefreshCcw className="mr-2 h-4 w-4" aria-hidden="true" />
          Restart assessment
        </Button>
      </div>
    );
  }

  return (
    <div className="animate-fade-up">
      <ResultHeader icon="check" label="Result" title="This estate appears suitable for guided estate administration with Harbour." />
      <div className="mt-5 max-w-2xl space-y-4 text-base leading-7 text-muted-foreground">
        <p>
          Based on your answers, this looks like the kind of straightforward
          estate Harbour is designed to help you manage.
        </p>
        <p>
          Harbour helps you organise the information needed for estate
          administration and probate, prepare paperwork, and keep track of the
          process step by step.
        </p>
        <p>
          Many families pay solicitors £1,000-£3,000+ for straightforward
          probate cases, often mainly for administrative support and document
          preparation.
        </p>
      </div>
      <div className="mt-7 rounded-lg border border-accent/35 bg-accent/15 p-5">
        <p className="text-sm leading-6 text-accent-foreground">
          With Harbour Workspace, you'll get full access for a simple one-off
          payment of
          <span className="font-semibold"> £49</span>.
        </p>
      </div>
      <div className="mt-10">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
          What you'll get
        </p>
        <HarbourMockup />
      </div>
      <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">
        If your situation becomes more complicated later, we'll let you know as
        early as possible and help you export your information if needed.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button onClick={onContinue} type="button">
          Continue
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </Button>
        <Button onClick={onRestart} type="button" variant="ghost">
          <RefreshCcw className="mr-2 h-4 w-4" aria-hidden="true" />
          Restart
        </Button>
      </div>
    </div>
  );
}

function EmailScreen({
  email,
  onBack,
  onEmailChange,
  onSubmit,
}: {
  email: string;
  onBack: () => void;
  onEmailChange: (email: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div className="animate-fade-up">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/25">
        <Mail className="h-5 w-5 text-accent-foreground" aria-hidden="true" />
      </div>
      <h3 className="mt-5 break-words font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
        Join Harbour early access
      </h3>
      <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
        We're currently preparing Harbour Workspace for launch. Enter your email
        below to get early access and updates when it becomes available.
      </p>
      <form className="mt-8 max-w-xl" onSubmit={onSubmit}>
        <label className="text-sm font-medium text-foreground" htmlFor="assessment-email">
          Email address
        </label>
        <Input
          autoComplete="email"
          className="mt-2"
          id="assessment-email"
          onChange={(event) => onEmailChange(event.target.value)}
          placeholder="you@example.co.uk"
          required
          type="email"
          value={email}
        />
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button type="submit">Join early access</Button>
          <Button onClick={onBack} type="button" variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            Back
          </Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          No spam. Just occasional updates about Harbour.
        </p>
      </form>
    </div>
  );
}

function ThanksScreen({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="animate-fade-up">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/25">
        <CheckCircle2
          className="h-5 w-5 text-accent-foreground"
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-5 break-words font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
        Thank you. You're on the list.
      </h3>
      <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
        We'll send occasional updates as Harbour gets closer to launch.
      </p>
      <Button className="mt-8" onClick={onRestart} type="button" variant="ghost">
        <RefreshCcw className="mr-2 h-4 w-4" aria-hidden="true" />
        Start again
      </Button>
    </div>
  );
}

function ResultHeader({
  icon,
  label,
  title,
}: {
  icon: "check" | "help" | "shield";
  label: string;
  title: string;
}) {
  const Icon =
    icon === "check" ? CheckCircle2 : icon === "help" ? HelpCircle : ShieldCheck;

  return (
    <div className="flex gap-4">
      <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/25">
        <Icon className="h-5 w-5 text-accent-foreground" aria-hidden="true" />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </p>
        <h3 className="mt-2 max-w-2xl break-words font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
          {title}
        </h3>
      </div>
    </div>
  );
}

type AssessmentResult = {
  type: ResultType;
};

function getAssessmentResult(
  answers: Partial<Record<QuestionId, string>>,
): AssessmentResult {
  const hasOverseasAssets = answers.overseas === "yes";
  const hasDispute = answers.disputes === "yes";
  const hasMultipleProperties = answers.property === "multiple_properties";
  const hasEstateOverThreshold = answers.estateValue === "over_325k";
  const complexityCount = [
    hasOverseasAssets,
    hasDispute,
    hasMultipleProperties,
  ].filter(Boolean).length;
  const unknownCount = Object.values(answers).filter(
    (answer) => answer === "unknown",
  ).length;

  if (
    hasOverseasAssets ||
    hasDispute ||
    hasMultipleProperties ||
    (hasEstateOverThreshold && complexityCount > 0)
  ) {
    return { type: "too_complex" };
  }

  if (unknownCount >= 2 || hasEstateOverThreshold) {
    return { type: "more_info" };
  }

  return { type: "can_help" };
}

function getUnknownChecklist(answers: Partial<Record<QuestionId, string>>) {
  const unknownItems = questions
    .filter((question) => answers[question.id] === "unknown")
    .map((question) => unknownChecklist[question.id]);

  if (answers.estateValue === "over_325k") {
    return [...unknownItems, estateValueChecklist];
  }

  return unknownItems;
}

function trackAssessmentEvent(
  event: AssessmentEvent,
  payload: Record<string, unknown> = {},
) {
  trackEvent(event, payload);
}
