"use client";

import Link from "next/link";
import { CheckCircle2, Bell, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const freeFeatures = [
  "Personalised step-by-step guidance",
  "Understand what needs doing next",
  "Probate assessment and guidance",
  "Organisation notification checklist",
  "Track progress and responses",
  "Upload and organise documents",
  "One place to manage everything",
];

const paidFeatures = [
  "Guided probate application",
  "Probate paperwork prepared for you",
  "Automatic form filling from your documents",
  "AI extraction of estate information",
  "Inheritance tax guidance and preparation",
  "Organisation notifications handled for you",
  "Draft letters and supporting documents generated for you",
];

export default function GetStarted() {
  return (
    <main className="min-h-screen overflow-hidden flex flex-col">
      <header className="flex items-center justify-end px-6 py-6 sm:px-8">
        <Link href="/" aria-label="Close and return home">
          <Button size="icon" variant="ghost" type="button">
            <X className="h-5 w-5" aria-hidden="true" />
          </Button>
        </Link>
      </header>

      <section className="px-6 pt-8 pb-20 sm:px-8 flex-1 flex flex-col">
        <div className="mx-auto max-w-3xl text-center w-full">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Choose where to begin
          </p>
          <h1 className="mx-auto mt-2 font-serif text-2xl font-medium leading-tight text-foreground sm:text-3xl">
            Choose the level of support that's right for you.
          </h1>
        </div>

        <div className="mt-8 grid gap-4 mx-auto max-w-6xl lg:grid-cols-2 lg:items-stretch w-full">
          <div className="flex flex-col rounded-lg border border-border/80 bg-card/90 p-7 shadow-soft sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-accent/25">
                  <Bell
                    className="h-5 w-5 text-accent-foreground"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="font-serif text-5xl font-medium leading-tight text-foreground">
                  Harbour Assist
                </h2>
              </div>
              <div className="shrink-0 sm:text-right">
                <p className="font-serif text-2xl font-medium leading-none text-foreground">
                  Free
                </p>
              </div>
            </div>

            <p className="mt-6 text-base leading-7 text-muted-foreground">
              Understand what needs to happen next and stay organised throughout the bereavement process. Harbour helps you work through everything step-by-step and keeps everything in one place.
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
              <Link href="/interest" className="block">
                <Button className="w-full" size="lg">
                  Choose Harbour Assist
                </Button>
              </Link>
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
                <h2 className="font-serif text-5xl font-medium leading-tight text-foreground">
                  Harbour Probate
                </h2>
              </div>
              <div className="shrink-0 sm:text-right">
                <p className="font-serif text-2xl font-medium leading-none text-foreground">
                  £79
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  one-off
                </p>
              </div>
            </div>

            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Probate can cost thousands in solicitor fees. Harbour Probate helps you complete the probate process yourself, with prepared paperwork, document organisation and guided support throughout.
            </p>
            <p className="mt-5 text-sm font-medium text-foreground">
              Includes everything in Harbour Assist, plus:
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
              <Link href="/interest" className="block">
                <Button className="w-full" size="lg">
                  Choose Harbour Probate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
