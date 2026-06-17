import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  getArticleJourney,
  seoArticles,
  type SeoArticle,
} from "@/lib/seo-pages";

export const metadata: Metadata = {
  title: "Bereavement Admin Guides | Harbour",
  description:
    "Plain-English UK guides to the practical admin after someone dies, from notifying organisations to finding a will and understanding executor responsibilities.",
  alternates: {
    canonical: "/guides",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GuidesPage() {
  const assistArticles = seoArticles.filter(
    (article) => getArticleJourney(article) === "assist",
  );
  const probateArticles = seoArticles.filter(
    (article) => getArticleJourney(article) === "probate",
  );

  return (
    <main className="min-h-screen overflow-hidden">
      <SiteHeader ctaLocation="guides_index_header" />

      <section className="border-y border-border/70 bg-card/35 px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent/20 text-accent-foreground">
            <BookOpen className="h-5 w-5" aria-hidden="true" />
          </div>
          <h1 className="max-w-3xl font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Bereavement admin guides
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Practical UK guides for the questions people search when they are
            trying to work out what needs doing after a death.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-14">
          <GuideList
            eyebrow="Harbour Assist"
            guides={assistArticles}
            title="For people who need help with the admin"
          />
          <GuideList
            eyebrow="Harbour Probate"
            guides={probateArticles}
            title="For executors considering probate"
          />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function GuideList({
  eyebrow,
  guides,
  title,
}: {
  eyebrow: string;
  guides: SeoArticle[];
  title: string;
}) {
  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-serif text-3xl font-medium leading-tight text-foreground">
        {title}
      </h2>
      <div className="mt-6 grid gap-0 border-y border-border/70">
        {guides.map((guide) => (
          <Link
            className="group grid gap-3 border-b border-border/70 py-6 transition-colors last:border-b-0 hover:bg-card/35 sm:grid-cols-[1fr_auto] sm:items-center sm:px-4"
            href={`/${guide.slug}`}
            key={guide.slug}
          >
            <span>
              <span className="block font-serif text-2xl font-medium leading-tight text-foreground">
                {guide.title}
              </span>
              <span className="mt-2 block max-w-2xl text-sm leading-6 text-muted-foreground">
                {guide.metaDescription}
              </span>
            </span>
            <ArrowRight
              className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
