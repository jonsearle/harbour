import {
  CheckCircle2,
  ClipboardList,
  FileSearch,
  Route,
  ShieldCheck,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { GettingStartedButton } from "@/components/getting-started-button";

const steps = [
  {
    icon: ClipboardList,
    title: "Answer simple questions and upload key documents securely",
  },
  {
    icon: FileSearch,
    title:
      "Harbour helps organise probate paperwork, prepare forms and letters, and handle administrative communication with banks and organisations on your behalf",
  },
  {
    icon: Route,
    title:
      "Stay informed with clear progress tracking, guided support, and a simpler way to manage probate during a difficult time",
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
            Why use Harbour?
          </a>
          <a className="transition-colors hover:text-foreground" href="#pricing">
            Pricing
          </a>
        </nav>
      </header>

      <section id="top" className="px-6 pb-16 pt-12 sm:px-8 lg:pb-24 lg:pt-20">
        <div className="mx-auto max-w-4xl animate-fade-up text-center">
          <p className="mx-auto mb-6 inline-flex rounded-full bg-accent/45 px-3.5 py-1.5 text-sm text-accent-foreground">
            Designed to guide you through probate step by step.
          </p>
          <h1 className="mx-auto max-w-4xl font-serif text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            A calmer way to manage probate after a death
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            Harbour guides you through probate step by step — helping you stay
            organised, understand what needs to happen, and prepare the
            information and forms required along the way.
          </p>
          <div className="mt-9 flex items-center justify-center">
            <GettingStartedButton />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-6 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Why use Harbour?
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Probate support without the £1,000+ solicitor bill
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

      <section id="pricing" className="px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Fixed pricing
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Simple, fixed pricing
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              Get full access to Harbour's probate support tools for a one-off
              payment.
            </p>
          </div>

          <Card className="mx-auto grid max-w-4xl overflow-hidden border-border/70 bg-card/95 shadow-soft lg:grid-cols-[0.95fr_1.05fr]">
            <div className="border-b border-border/70 p-7 sm:p-9 lg:border-b-0 lg:border-r">
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/65">
                  <ShieldCheck
                    className="h-5 w-5 text-accent-foreground"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    One-off payment
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Full probate support
                  </p>
                </div>
              </div>
              <div className="flex items-end gap-3">
                <p className="font-serif text-6xl font-semibold leading-none text-foreground">
                  £49
                </p>
                <p className="pb-2 text-sm font-medium text-muted-foreground">
                  one-off
                </p>
              </div>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Full access to Harbour's guided probate workspace, document
                organisation and form preparation tools.
              </p>
              <GettingStartedButton className="mt-8 w-full sm:w-auto" />
            </div>

            <div className="p-7 sm:p-9">
              <h3 className="text-xl font-medium text-foreground">
                Everything you need to stay organised
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Harbour helps you organise the information needed for probate,
                prepare the required forms, keep track of progress and reduce
                the amount of admin you need to handle yourself.
              </p>
              <ul className="mt-7 grid gap-4 text-sm text-muted-foreground">
                {[
                  "Organise probate information in one place",
                  "Prepare the required forms along the way",
                  "Track progress through each stage",
                  "Get guided support without open-ended solicitor fees",
                ].map((item) => (
                  <li className="flex gap-3" key={item}>
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(154_18%_34%)]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-lg bg-accent/35 p-5">
                <p className="text-sm font-medium leading-6 text-accent-foreground">
                  Avoid paying thousands in solicitor fees for straightforward
                  probate cases.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="border-t px-6 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-xl font-semibold text-foreground">
            Harbour
          </p>
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
    </main>
  );
}
