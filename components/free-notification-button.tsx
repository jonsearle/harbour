"use client";

import { FormEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, CheckCircle2, FileUp, Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FreeNotificationButton({
  children = "Get started for free",
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const takeover =
    open && typeof document !== "undefined"
      ? createPortal(
          <div
            className="fixed inset-0 z-50 overflow-y-auto bg-background"
            role="dialog"
            aria-modal="true"
            aria-labelledby="free-notification-title"
          >
            <div className="sticky top-0 z-10 border-b border-border/80 bg-background/95 px-5 py-4 backdrop-blur sm:px-8">
              <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
                <p
                  className="font-serif text-2xl font-medium text-foreground"
                  id="free-notification-title"
                >
                  Start for free
                </p>
                <Button
                  aria-label="Close free onboarding"
                  onClick={() => setOpen(false)}
                  size="icon"
                  type="button"
                  variant="ghost"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-4xl items-center px-5 py-10 sm:px-8">
              <FreeNotificationFlow />
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <Button
        className={className}
        onClick={() => setOpen(true)}
        size="lg"
        type="button"
      >
        {children}
      </Button>

      {takeover}
    </>
  );
}

function FreeNotificationFlow() {
  const [submitted, setSubmitted] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="w-full animate-fade-up">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/25">
          <CheckCircle2
            className="h-5 w-5 text-accent-foreground"
            aria-hidden="true"
          />
        </div>
        <h3 className="mt-5 max-w-2xl font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
          Your free notification workspace is ready.
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          We'll help you notify organisations, upload documents once, and keep
          track of replies in one place.
        </p>
        <div className="mt-8 grid gap-3 border-y border-border/80 py-6 text-sm text-muted-foreground sm:grid-cols-3">
          {["Add organisations", "Upload documents", "Track responses"].map(
            (item) => (
              <div className="flex items-center gap-3" key={item}>
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-accent-foreground"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </div>
            ),
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full animate-fade-up">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Free notification tools
          </p>
          <h3 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
            Create a free workspace for the first practical tasks.
          </h3>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            Start by telling organisations what has happened. Harbour keeps the
            information, documents and replies together so you do not have to
            repeat the same process again and again.
          </p>
          <div className="mt-8 grid gap-4 text-sm text-muted-foreground">
            <div className="flex gap-3">
              <Mail
                className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground"
                aria-hidden="true"
              />
              <span>Notify banks, utilities and service providers</span>
            </div>
            <div className="flex gap-3">
              <FileUp
                className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground"
                aria-hidden="true"
              />
              <span>Upload key documents securely once</span>
            </div>
          </div>
        </div>

        <form
          className="rounded-lg border border-border/80 bg-card/90 p-6 shadow-soft sm:p-8"
          onSubmit={submitForm}
        >
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="free-email"
          >
            Email address
          </label>
          <Input
            autoComplete="email"
            className="mt-2"
            id="free-email"
            placeholder="you@example.co.uk"
            required
            type="email"
          />

          <label
            className="mt-5 block text-sm font-medium text-foreground"
            htmlFor="person-name"
          >
            Name of the person who died
          </label>
          <Input
            autoComplete="off"
            className="mt-2"
            id="person-name"
            placeholder="Optional"
            type="text"
          />

          <div className="mt-6 rounded-lg border border-accent/35 bg-accent/15 p-4">
            <p className="text-sm leading-6 text-accent-foreground">
              You can add organisations and upload the death certificate after
              creating your free workspace.
            </p>
          </div>

          <Button className="mt-6 w-full" type="submit">
            Create free workspace
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </form>
      </div>
    </div>
  );
}
