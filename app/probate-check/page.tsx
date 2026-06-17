import type { Metadata } from "next";
import { ProbateAssessmentFlow } from "@/components/probate-assessment-flow";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Probate Check | Harbour",
  description:
    "Answer a few questions to understand whether probate may be required and what factors affect the next step.",
  alternates: {
    canonical: "/probate-check",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProbateCheckPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <SiteHeader
        ctaEventName="probate_cta_clicked"
        ctaHref="/probate"
        ctaLocation="probate_check_header"
        ctaText="Harbour Probate"
      />

      <section className="border-y border-border/70 bg-card/35 px-6 py-12 sm:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Probate checker
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Check whether probate may be needed
          </h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Answer a few practical questions and Harbour will help you
            understand whether probate is likely to be required and what to
            check next.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 sm:px-8 lg:py-16">
        <ProbateAssessmentFlow />
      </section>

      <SiteFooter />
    </main>
  );
}
