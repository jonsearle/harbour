"use client";

import { useState } from "react";
import {
  Bell,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { FreeNotificationButton } from "@/components/free-notification-button";
import { GettingStartedButton } from "@/components/getting-started-button";
import { OnboardingModal } from "@/components/onboarding-modal";

const freeFeatures = [
  "Notify multiple organisations",
  "Upload documents securely",
  "Track responses and updates",
  "Keep communication organised",
];

const paidFeatures = [
  "Guided estate administration workspace",
  "Step-by-step probate support",
  "Document and paperwork organisation",
  "Progress tracking and reminders",
  "Secure document storage",
  "Guidance through probate and estate administration",
];

export default function Home() {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 sm:px-8">
        <a
          className="block"
          href="#top"
          aria-label="Harbour home"
        >
          <img
            alt="Harbour"
            className="h-10 w-auto"
            height="235"
            src="/brand/harbour-wordmark.png"
            width="692"
          />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
          <a className="transition-colors hover:text-foreground" href="#plans">
            Plans
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="relative px-6 pb-20 pt-14 sm:px-8 lg:pb-28 lg:pt-24"
      >
        <div className="pointer-events-none absolute inset-x-6 top-2 h-px bg-border/70 sm:inset-x-8" />
        <div className="mx-auto max-w-4xl animate-fade-up text-center">
          <h1 className="mx-auto max-w-[19rem] break-words font-serif text-4xl font-medium leading-[1.1] text-foreground sm:max-w-4xl sm:text-6xl sm:leading-[1.04] lg:text-7xl">
            We help take care of the practical side of loss
          </h1>
          <p className="mx-auto mt-8 max-w-[19rem] break-words text-base leading-7 text-muted-foreground sm:max-w-2xl sm:text-lg sm:leading-8">
            Harbour helps you notify organisations, organise paperwork, and
            manage estate administration — all in one calm, secure workspace.
          </p>
          <div className="mt-9 flex items-center justify-center">
            <FreeNotificationButton />
          </div>
        </div>
      </section>

      <section
        id="plans"
        className="border-y border-border/70 bg-card/45 px-6 py-20 sm:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Choose where to begin
            </p>
            <h2 className="mx-auto mt-4 max-w-[19rem] break-words font-serif text-3xl font-medium leading-tight text-foreground sm:max-w-none sm:text-5xl">
              Start free. Add probate support if you need it.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:items-stretch">
            <div className="flex flex-col rounded-lg border border-border/80 bg-card/90 p-7 shadow-soft sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-accent/25">
                    <Bell
                      className="h-5 w-5 text-accent-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    Free
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-medium leading-tight text-foreground">
                    Notifications & organisation
                  </h3>
                </div>
                <div className="shrink-0 sm:text-right">
                  <p className="font-serif text-5xl font-medium leading-none text-foreground">
                    £0
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    no card needed
                  </p>
                </div>
              </div>

              <p className="mt-6 text-base leading-7 text-muted-foreground">
                For most people, this is the best place to start. Notify organisations, upload documents and keep everything organised in one place while you work out what needs to happen next.
              </p>

              <ul className="mt-7 grid gap-4 text-sm text-muted-foreground">
                {freeFeatures.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <FreeNotificationButton className="w-full">
                  Start for free
                </FreeNotificationButton>
              </div>
            </div>

            <div className="flex flex-col rounded-lg border border-primary/20 bg-card p-7 shadow-soft sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-accent/45">
                    <ShieldCheck
                      className="h-5 w-5 text-accent-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    Harbour Workspace
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-medium leading-tight text-foreground">
                    Probate & estate administration
                  </h3>
                </div>
                <div className="shrink-0 sm:text-right">
                  <p className="font-serif text-5xl font-medium leading-none text-foreground">
                    £49
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    one-off
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground">
                <p>
                  Probate is the legal process of managing somebody's estate after they die.
                </p>
                <p>
                  Many people pay solicitors thousands to handle the paperwork and guide them through the process. Harbour Workspace helps you manage probate, organise documents and work through estate administration step by step — without unnecessary solicitor costs.
                </p>
              </div>

              <p className="mt-5 rounded-lg border border-accent/35 bg-accent/15 p-4 text-sm leading-6 text-accent-foreground">
                Everything in free, plus guided support for probate and estate administration.
              </p>

              <ul className="mt-7 grid gap-4 text-sm text-muted-foreground">
                {paidFeatures.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <GettingStartedButton className="w-full" />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl text-center text-sm leading-6 text-muted-foreground">
            <p>
              The upgrade check helps us understand whether Harbour is likely to
              be a good fit before you move into the paid workspace.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/80 px-6 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <img
            alt="Harbour"
            className="h-8 w-auto"
            height="235"
            src="/brand/harbour-wordmark.png"
            width="692"
          />
          <div className="flex flex-wrap items-center gap-5">
            <p>Built in the UK</p>
            <a className="transition-colors hover:text-foreground" href="#">
              Privacy
            </a>
            <a
              className="transition-colors hover:text-foreground"
              href="mailto:hello@harbour.example"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>

      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
      />
    </main>
  );
}
