import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { AssistStickyCta } from "@/components/assist-sticky-cta";
import { SiteHeader } from "@/components/site-header";
import { getArticleJourney, getSeoArticle, seoArticles } from "@/lib/seo-pages";
import { siteUrl } from "@/lib/site";

type SeoArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return seoArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: SeoArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getSeoArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `/${article.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${siteUrl}/${article.slug}`,
      type: "article",
    },
  };
}

export default async function SeoArticlePage({ params }: SeoArticlePageProps) {
  const { slug } = await params;
  const article = getSeoArticle(slug);

  if (!article) {
    notFound();
  }

  const journey = getArticleJourney(article);
  const isProbateArticle = journey === "probate";
  const stickyCta = {
    button: article.ctaButton ?? "Guide Me Through This",
    destination: article.ctaDestination ?? "/interest/assist",
    eventName: isProbateArticle ? "probate_cta_clicked" : "assist_cta_clicked",
    header: article.ctaHeader ?? "Feeling overwhelmed?",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    dateModified: article.updated,
    author: {
      "@type": "Organization",
      name: "Harbour",
    },
    publisher: {
      "@type": "Organization",
      name: "Harbour",
    },
    mainEntityOfPage: `${siteUrl}/${article.slug}`,
  };

  return (
    <main className="min-h-screen overflow-hidden pb-36 sm:pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader
        ctaEventName={isProbateArticle ? "probate_cta_clicked" : "assist_cta_clicked"}
        ctaHref={isProbateArticle ? "/probate" : "/interest/assist"}
        ctaLocation="article_header"
        ctaText={isProbateArticle ? "Harbour Probate" : "Get free help"}
        showCta={false}
      />

      <article>
        <section className="px-6 pb-12 pt-14 sm:px-8 lg:pb-16 lg:pt-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl sm:pl-20">
              <h1 className="font-serif text-5xl font-medium leading-none text-foreground sm:text-6xl">
                {article.title}
              </h1>
              <div className="mt-7 space-y-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {article.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 sm:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl sm:pl-20">
              {article.sections.map((section) => (
                <section
                  className="py-9 first:pt-0"
                  key={section.heading}
                >
                  <h2 className="font-serif text-2xl font-medium leading-snug text-foreground sm:text-3xl">
                    {section.heading}
                  </h2>
                  {section.body ? (
                    <div className="mt-5 space-y-4 text-base leading-7 text-muted-foreground">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}
                  {section.bullets ? (
                    <CheckedList items={section.bullets} />
                  ) : null}
                  {section.subsections ? (
                    <div className="mt-7 grid gap-7">
                      {section.subsections.map((subsection) => (
                        <section key={subsection.heading}>
                          <h3 className="font-serif text-lg font-medium leading-snug text-foreground sm:text-xl">
                            {subsection.heading}
                          </h3>
                          {subsection.body ? (
                            <div className="mt-3 space-y-4 text-base leading-7 text-muted-foreground">
                              {subsection.body.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                              ))}
                            </div>
                          ) : null}
                          {subsection.bullets ? (
                            <CheckedList items={subsection.bullets} />
                          ) : null}
                        </section>
                      ))}
                    </div>
                  ) : null}
                </section>
              ))}
            </div>
          </div>
        </section>
      </article>

      <AssistStickyCta
        buttonText={stickyCta.button}
        destination={stickyCta.destination}
        eventName={stickyCta.eventName}
        header={stickyCta.header}
        pageSlug={article.slug}
        subline={article.ctaSubline}
      />
    </main>
  );
}

function CheckedList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-3 text-sm leading-6 text-muted-foreground">
      {items.map((item) => (
        <li className="flex gap-3" key={item}>
          <CheckCircle2
            className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
