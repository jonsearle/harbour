import { ArrowDown, ClipboardList, FileSearch, Route } from "lucide-react";
import { AssessmentPreview } from "@/components/assessment-preview";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EarlyAccessForm } from "@/components/early-access-form";
import { HarbourMockup } from "@/components/harbour-mockup";

const steps = [
  {
    icon: ClipboardList,
    title: "Answer a few questions about the estate",
  },
  {
    icon: FileSearch,
    title:
      "Understand whether it appears straightforward or may need professional support",
  },
  {
    icon: Route,
    title: "Receive guided next steps, organisation tools and probate guidance",
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
          <a
            className="transition-colors hover:text-foreground"
            href="#how-it-works"
          >
            How it works
          </a>
          <a
            className="transition-colors hover:text-foreground"
            href="#assessment"
          >
            Assessment
          </a>
          <a
            className="transition-colors hover:text-foreground"
            href="#early-access"
          >
            Early access
          </a>
        </nav>
      </header>

      <section id="top" className="px-6 pb-20 pt-12 sm:px-8 lg:pb-28 lg:pt-20">
        <div className="mx-auto max-w-4xl animate-fade-up text-center">
          <p className="mx-auto mb-6 inline-flex rounded-full bg-accent/45 px-3.5 py-1.5 text-sm text-accent-foreground">
            Designed for straightforward UK estates and first-time executors.
          </p>
          <h1 className="mx-auto max-w-4xl font-serif text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            A calmer way to manage probate after a death.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            Harbour helps executors stay organised, understand what comes next,
            and assess whether they may be able to manage probate themselves.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#assessment">Start assessment</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#how-it-works">
                How Harbour works
                <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <HarbourMockup />
        </div>
      </section>

      <section id="how-it-works" className="px-6 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
              How Harbour works
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              A clearer way to understand where you stand.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <Card
                className="border-border/60 bg-card/75 p-7 shadow-none"
                key={step.title}
              >
                <div className="flex items-center justify-between gap-4">
                  <step.icon
                    className="h-5 w-5 text-[hsl(154_18%_34%)]"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-7 text-lg font-medium leading-7 text-foreground">
                  {step.title}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="assessment"
        className="border-y bg-[hsl(43_25%_94%)] px-6 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Assessment preview
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              See whether Harbour may be able to help with your estate.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              A short set of questions helps identify whether the estate appears
              suitable for guided probate, or whether professional support may
              be the more appropriate route.
            </p>
          </div>
          <AssessmentPreview />
        </div>
      </section>

      <section id="early-access" className="px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Early access
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Interested in trying Harbour?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            We are currently speaking with people who are handling probate or
            estate administration themselves.
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
            <p>Built in the UK</p>
            <a
              className="transition-colors hover:text-foreground"
              href="#early-access"
            >
              Early access
            </a>
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
    </main>
  );
}
