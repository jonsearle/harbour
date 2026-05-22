import { ArrowDown, ClipboardCheck, Files, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EarlyAccessForm } from "@/components/early-access-form";
import { HarbourMockup } from "@/components/harbour-mockup";

const benefits = [
  {
    icon: ListChecks,
    title: "See what matters next",
    copy: "A clear view of the few things that need attention now.",
  },
  {
    icon: Files,
    title: "Keep everything in one place",
    copy: "Documents, accounts and contact notes stay easy to find.",
  },
  {
    icon: ClipboardCheck,
    title: "Feel more in control",
    copy: "Know what is done, what is waiting, and what comes next.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8">
        <a
          className="font-serif text-2xl font-semibold tracking-normal text-foreground"
          href="#top"
          aria-label="Harbour home"
        >
          Harbour
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground sm:flex">
          <a className="transition-colors hover:text-foreground" href="#product">
            Product
          </a>
          <a
            className="transition-colors hover:text-foreground"
            href="#benefits"
          >
            Benefits
          </a>
          <a
            className="transition-colors hover:text-foreground"
            href="#early-access"
          >
            Early access
          </a>
        </nav>
      </header>

      <section id="top" className="px-6 pb-16 pt-12 sm:px-8 lg:pb-20 lg:pt-20">
        <div className="mx-auto max-w-4xl animate-fade-up text-center">
          <p className="mx-auto mb-6 inline-flex rounded-full bg-accent/45 px-3.5 py-1.5 text-sm text-accent-foreground">
            For executors managing unfamiliar responsibilities.
          </p>
          <h1 className="mx-auto max-w-4xl font-serif text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            A calmer way to manage what comes next after a death.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            Harbour helps you keep track of paperwork, organisations and next
            steps — with calm guidance throughout the process.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#early-access">Join early access</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#product">
                See how it helps
                <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="product" className="px-6 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto mb-7 max-w-5xl text-center">
          <p className="text-sm leading-6 text-muted-foreground">
            Built for people suddenly responsible for what comes next.
          </p>
        </div>
        <HarbourMockup />
      </section>

      <section id="benefits" className="px-6 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <Card
                className="border-border/60 bg-card/75 p-7 shadow-none"
                key={benefit.title}
              >
                <benefit.icon
                  className="h-5 w-5 text-[hsl(154_18%_34%)]"
                  aria-hidden="true"
                />
                <h2 className="mt-5 text-lg font-medium text-foreground">
                  {benefit.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {benefit.copy}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="early-access" className="px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Early access
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Help shape Harbour.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            We are speaking with people who have recently managed probate or
            estate administration.
          </p>
          <div className="mt-10">
            <EarlyAccessForm />
          </div>
        </div>
      </section>

      <footer className="border-t px-6 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-xl font-semibold text-foreground">
            Harbour
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a className="transition-colors hover:text-foreground" href="#">
              Privacy
            </a>
            <a
              className="transition-colors hover:text-foreground"
              href="mailto:hello@harbour.example"
            >
              Contact
            </a>
            <p>Built with care in the UK</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
