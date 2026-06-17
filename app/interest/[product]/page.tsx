import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, HeartHandshake } from "lucide-react";

type Product = "assist" | "probate";

type ProductInterest = {
  title: string;
  description: string;
  heading: string;
  body: string;
  resourcesHeading: string;
  resourcesBody: string;
  resources: {
    title: string;
    description: string;
    href: string;
  }[];
};

const productInterest: Record<Product, ProductInterest> = {
  assist: {
    title: "Harbour Assist early access | Harbour",
    description:
      "Harbour Assist is being built to help people organise the practical admin after a death.",
    heading: "Harbour Assist is still being built",
    body: "Thanks for your interest. Harbour Assist will help with step-by-step guidance, notification checklists and one place to organise the practical admin after a death.",
    resourcesHeading: "Useful links while we build",
    resourcesBody:
      "These official resources may help with the immediate steps, especially registering the death and notifying government organisations.",
    resources: [
      {
        title: "GOV.UK What to do after someone dies",
        description: "Official step-by-step guidance after a death.",
        href: "https://www.gov.uk/after-a-death",
      },
      {
        title: "GOV.UK Tell Us Once",
        description: "Notify many government organisations in one go.",
        href: "https://www.gov.uk/after-a-death/organisations-you-need-to-contact-and-tell-us-once",
      },
      {
        title: "GOV.UK Register a death",
        description: "How and when to register a death.",
        href: "https://www.gov.uk/register-a-death",
      },
      {
        title: "Citizens Advice bereavement guide",
        description: "Practical guidance after a death.",
        href: "https://www.citizensadvice.org.uk/family/death-and-wills/what-to-do-after-a-death/",
      },
    ],
  },
  probate: {
    title: "Harbour Probate early access | Harbour",
    description:
      "Harbour Probate is being built to help people prepare probate paperwork and organise documents with guided support.",
    heading: "Harbour Probate is still being built",
    body: "Thanks for your interest. Harbour Probate will help people prepare paperwork, organise documents and complete probate with modern guided support, without paying thousands in solicitor fees.",
    resourcesHeading: "Useful probate links while we build",
    resourcesBody:
      "These official resources may help if you are checking whether probate is needed or preparing an application.",
    resources: [
      {
        title: "GOV.UK Applying for probate",
        description: "Official guidance on probate and when it may be needed.",
        href: "https://www.gov.uk/wills-probate-inheritance",
      },
      {
        title: "GOV.UK Apply for probate",
        description: "The official online probate application service.",
        href: "https://www.apply-for-probate.service.gov.uk/start-eligibility?lng=en",
      },
      {
        title: "GOV.UK Probate fees",
        description: "Current probate application fees and extra copy costs.",
        href: "https://www.gov.uk/applying-for-probate/fees",
      },
      {
        title: "GOV.UK Probate by post with a will",
        description: "Paper application guidance where there is a will.",
        href: "https://www.gov.uk/government/publications/form-pa1p-apply-for-probate-the-deceased-had-a-will/how-to-apply-for-probate-by-post-if-there-is-a-will",
      },
    ],
  },
};

type ProductInterestPageProps = {
  params: Promise<{
    product: string;
  }>;
};

export function generateStaticParams() {
  return [{ product: "assist" }, { product: "probate" }];
}

export async function generateMetadata({
  params,
}: ProductInterestPageProps): Promise<Metadata> {
  const { product } = await params;

  if (!isProduct(product)) {
    return {};
  }

  return {
    title: productInterest[product].title,
    description: productInterest[product].description,
  };
}

export default async function ProductInterestPage({
  params,
}: ProductInterestPageProps) {
  const { product } = await params;

  if (!isProduct(product)) {
    notFound();
  }

  const content = productInterest[product];

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
            {content.heading}
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {content.body}
          </p>
        </div>
      </section>

      <section className="border-t border-border/70 bg-card/35 px-6 py-14 sm:px-8 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
              {content.resourcesHeading}
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
              {content.resourcesBody}
            </p>
          </div>

          <div className="grid border-y border-border/70 lg:grid-cols-2 lg:border-y-0">
            {content.resources.map((resource) => (
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

function isProduct(product: string): product is Product {
  return product === "assist" || product === "probate";
}

