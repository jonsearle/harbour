import { notFound, redirect } from "next/navigation";
import { getSeoArticle, oldGuideRedirects, seoArticles } from "@/lib/seo-pages";

type LegacyGuidePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [
    ...seoArticles.map((article) => ({ slug: article.slug })),
    ...Object.keys(oldGuideRedirects).map((slug) => ({ slug })),
  ];
}

export default async function LegacyGuidePage({ params }: LegacyGuidePageProps) {
  const { slug } = await params;
  const article = getSeoArticle(slug);
  const redirectSlug = article?.slug ?? oldGuideRedirects[slug];

  if (!redirectSlug) {
    notFound();
  }

  redirect(`/${redirectSlug}`);
}
