"use client";

import { FormEvent, useState } from "react";
import { Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trackOnboardingEvent } from "@/lib/onboarding-analytics";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Registration failed");
        setIsLoading(false);
        return;
      }

      // Success
      trackOnboardingEvent("onboarding_signup_completed", {
        email_domain: email.split("@")[1] || "unknown",
      });
      onNext();
      // TODO: Redirect to workspace
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-fade-up">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/25">
        <Mail className="h-5 w-5 text-accent-foreground" aria-hidden="true" />
      </div>
      <h2 className="mt-5 break-words font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
        Save your progress
      </h2>
      <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
        Create a free Harbour account to save your progress, track your next
        steps, and organize all your documents in one place.
      </p>

      <form className="mt-8 max-w-xl space-y-5" onSubmit={handleSubmit}>
        <div>
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="email"
          >
            Email address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.co.uk"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            className="mt-2"
          />
        </div>

        <div>
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="password"
          >
            Password
          </label>
          <Input
            id="password"
            type="password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
            className="mt-2"
          />
        </div>

        <div>
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="name"
          >
            Name (optional)
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
            className="mt-2"
          />
        </div>

        {error && (
          <div className="rounded-lg bg-red-50 p-4 text-sm text-red-900">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create account"}
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={onBack}
            disabled={isLoading}
          >
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            Back
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          No spam. We'll only send occasional updates about Harbour.
        </p>
      </form>
    </div>
  );
}
