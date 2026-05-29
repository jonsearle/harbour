import Link from "next/link";
import {
  ExternalLink,
  HeartHandshake,
} from "lucide-react";

const resources = [
  {
    title: "GOV.UK Register a Death",
    description: "Official steps for registering a death in the UK.",
    href: "https://www.gov.uk/register-a-death",
  },
  {
    title: "GOV.UK Tell Us Once",
    description: "Tell government services about a death in one place.",
    href: "https://www.gov.uk/tell-us-once",
  },
  {
    title: "GOV.UK Probate Guidance",
    description: "Check whether probate may be needed and how to apply.",
    href: "https://www.gov.uk/applying-for-probate",
  },
  {
    title: "Citizens Advice Bereavement Guide",
    description: "Practical guidance on what to do after a death.",
    href: "https://www.citizensadvice.org.uk/family/death-and-wills/what-to-do-after-a-death/",
  },
];

export default function Interest() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="mx-auto flex max-w-7xl items-center px-6 py-7 sm:px-8">
        <Link className="block" href="/" aria-label="Harbour home">
          <img
            alt="Harbour"
            className="h-10 w-auto"
            height="235"
            src="/brand/harbour-wordmark.png"
            width="692"
          />
        </Link>
      </header>

      <section className="relative px-6 pb-16 pt-8 sm:px-8 lg:pb-24 lg:pt-16">
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-border/70 sm:inset-x-8" />
        <div className="mx-auto max-w-4xl animate-fade-up text-center">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent/20 text-accent-foreground">
              <HeartHandshake className="h-5 w-5" aria-hidden="true" />
            </div>
          </div>
          <h1 className="font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Thanks for your interest
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Harbour is currently being developed and isn't available yet.
          </p>
        </div>
      </section>

      <section className="border-t border-border/70 bg-card/35 px-6 py-14 sm:px-8 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
              Need help right now?
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
              While Harbour is being developed, these resources may help with the immediate practical steps.
            </p>
          </div>

          <div className="grid border-y border-border/70 lg:grid-cols-2 lg:border-y-0">
            {resources.map((resource) => (
              <a
                key={resource.href}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-b border-border/70 py-5 transition-colors last:border-b-0 hover:text-accent-foreground lg:border-b lg:px-5 lg:even:border-l lg:last:border-b lg:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-serif text-lg font-medium text-foreground transition-colors group-hover:text-accent-foreground">
                      {resource.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>
                  <ExternalLink
                    className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent-foreground"
                    aria-hidden="true"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
