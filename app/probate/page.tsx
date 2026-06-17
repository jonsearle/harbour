import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FolderOpen,
  Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrackedLink } from "@/components/tracked-link";

export const metadata: Metadata = {
  title: "Harbour Probate | Guided Probate Support",
  description:
    "Harbour Probate helps executors organise documents, understand the process and manage probate step-by-step.",
  alternates: {
    canonical: "/probate",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const features = [
  {
    icon: ClipboardCheck,
    title: "Understand each step",
    description:
      "Work through the practical probate process with calm guidance and clear next actions.",
  },
  {
    icon: FolderOpen,
    title: "Keep documents together",
    description:
      "Organise wills, certificates, account details, valuations and correspondence in one place.",
  },
  {
    icon: Scale,
    title: "Know when to get advice",
    description:
      "Harbour Probate is guided support, not legal representation, and helps you spot when specialist advice may be sensible.",
  },
];

export default function ProbatePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <SiteHeader
        ctaEventName="probate_cta_clicked"
        ctaHref="/probate-check"
        ctaLocation="probate_header"
        ctaText="Check probate"
      />

      <section className="relative px-6 pb-16 pt-14 sm:px-8 lg:pb-24 lg:pt-20">
        <div className="pointer-events-none absolute inset-x-6 top-2 h-px bg-border/70 sm:inset-x-8" />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Harbour Probate
            </p>
            <h1 className="mt-3 font-serif text-4xl font-medium leading-tight text-foreground sm:text-6xl">
              Guided probate support for executors
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Harbour Probate helps you stay organised, understand what needs
              doing and manage probate step-by-step without starting with full
              solicitor-led estate administration.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              It is practical guided support, not legal representation. If your
              estate becomes complex, Harbour helps you understand what to
              gather before seeking specialist advice.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href="/probate-check"
                eventName="probate_check_clicked"
                eventParams={{ cta_location: "probate_hero" }}
              >
                <Button size="lg">Check If Probate Is Needed</Button>
              </TrackedLink>
              <TrackedLink
                href="/interest/probate"
                eventName="probate_cta_clicked"
                eventParams={{ cta_location: "probate_hero" }}
              >
                <Button size="lg" variant="outline">
                  Join Early Access
                </Button>
              </TrackedLink>
            </div>
          </div>

          <div className="border-y border-border/70 py-6 lg:border-y-0 lg:border-l lg:pl-10">
            <h2 className="font-serif text-2xl font-medium text-foreground">
              What Harbour Probate helps with
            </h2>
            <ul className="mt-6 grid gap-4">
              {[
                "Assess whether probate is likely to be required",
                "Create a probate document checklist",
                "Track banks, providers and estate tasks",
                "Understand when professional advice may be useful",
              ].map((item) => (
                <li className="flex gap-3 text-sm leading-6 text-muted-foreground" key={item}>
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-card/35 px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-3 lg:border-y lg:border-border/70">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                className="border-b border-border/70 py-7 last:border-b-0 lg:border-b-0 lg:border-r lg:px-7 lg:last:border-r-0"
                key={feature.title}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/25 text-accent-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-serif text-2xl font-medium leading-tight text-foreground">
                  {feature.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl font-medium text-foreground">
            Probate guides
          </h2>
          <div className="mt-6 grid gap-0 border-y border-border/70">
            {[
              ["Do I Need Probate?", "/do-i-need-probate"],
              ["Probate Checklist", "/probate-checklist"],
              ["Can I Do Probate Without A Solicitor?", "/can-i-do-probate-without-a-solicitor"],
              ["How Much Does Probate Cost?", "/how-much-does-probate-cost"],
              ["How Long Does Probate Take?", "/how-long-does-probate-take"],
            ].map(([label, href]) => (
              <Link
                className="group grid gap-3 border-b border-border/70 py-5 transition-colors last:border-b-0 hover:bg-card/35 sm:grid-cols-[1fr_auto] sm:items-center sm:px-4"
                href={href}
                key={href}
              >
                <span className="font-medium text-foreground">{label}</span>
                <ArrowRight
                  className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
