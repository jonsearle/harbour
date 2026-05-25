"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProbateAssessmentFlow } from "@/components/probate-assessment-flow";

export function GettingStartedButton({ className }: { className?: string }) {
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
            aria-labelledby="getting-started-title"
          >
            <div className="sticky top-0 z-10 border-b bg-background/95 px-5 py-4 backdrop-blur sm:px-8">
              <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
                <p
                  className="font-serif text-2xl font-semibold text-foreground"
                  id="getting-started-title"
                >
                  Getting Started
                </p>
                <Button
                  aria-label="Close getting started"
                  onClick={() => setOpen(false)}
                  size="icon"
                  type="button"
                  variant="ghost"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-5xl items-center px-5 py-10 sm:px-8">
              <ProbateAssessmentFlow />
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
        Get started
      </Button>

      {takeover}
    </>
  );
}
