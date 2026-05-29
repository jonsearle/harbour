import Link from "next/link";
import {
  CircleHelp,
  ClipboardCheck,
  FolderOpen,
  HandHeart,
  Landmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/tracked-link";

const benefits = [
  {
    icon: ClipboardCheck,
    title: "Understand what needs doing",
    description: "Get clear guidance tailored to your situation.",
  },
  {
    icon: FolderOpen,
    title: "Stay organised",
    description: "Keep track of documents, tasks and organisations in one place.",
  },
  {
    icon: Landmark,
    title: "Find out whether probate is required",
    description: "Understand your responsibilities and what happens next.",
  },
  {
    icon: HandHeart,
    title: "Get help when you need it",
    description: "Choose between managing things yourself or getting additional support from Harbour.",
  },
];

export default function Home() {

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
      </header>

      <section
        id="top"
        className="relative px-6 pb-20 pt-14 sm:px-8 lg:pb-28 lg:pt-24"
      >
        <div className="pointer-events-none absolute inset-x-6 top-2 h-px bg-border/70 sm:inset-x-8" />
        <div className="mx-auto max-w-4xl animate-fade-up text-center">
          <div className="mb-6 flex justify-center">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent-foreground">
              Guidance after a death
            </span>
          </div>
          <h1 className="mx-auto max-w-[19rem] break-words font-serif text-4xl font-medium leading-[1.1] text-foreground sm:max-w-4xl sm:text-6xl sm:leading-[1.04] lg:text-7xl">
            A simpler way to manage the practical side of loss
          </h1>
          <p className="mx-auto mt-8 max-w-[19rem] break-words text-base leading-7 text-muted-foreground sm:max-w-2xl sm:text-lg sm:leading-8">
            Understand what needs doing, stay organised, and find out whether
            probate is required. If it is, Harbour can help you complete the
            process without expensive solicitor fees.
          </p>
          <div className="mt-9 flex items-center justify-center">
            <TrackedLink
              href="/get-started"
              eventName="get_started_clicked"
              eventParams={{ location: "homepage_hero" }}
            >
              <Button size="lg">Get started</Button>
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-card/35 px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent/20 text-accent-foreground">
              <CircleHelp className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
              Why Harbour?
            </h2>
            <div className="mt-8 space-y-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              <p>
                When someone dies, there can be dozens of organisations to contact, documents to find, forms to complete and decisions to make.
              </p>
              <p>
                Information is scattered across government websites, banks, insurers and service providers. Most people have never managed an estate before and don't know where to start.
              </p>
              <p className="font-medium text-foreground">
                Harbour brings everything together in one place, helping you understand what needs doing, stay organised and work through the process step by step.
              </p>
            </div>
          </div>

          <div className="lg:pt-[7.6rem]">
            <div className="grid gap-0 border-y border-border/70 lg:border-y-0 lg:border-l lg:pl-10">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="grid grid-cols-[auto_1fr] gap-4 border-b border-border/65 py-4 last:border-b-0 sm:py-5"
                  >
                    <div className="pt-1">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent-foreground">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium leading-snug text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="mt-1.5 max-w-xl text-sm leading-6 text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
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

    </main>
  );
}
