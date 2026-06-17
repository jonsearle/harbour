import type { MetadataRoute } from "next";
import { seoArticles } from "@/lib/seo-pages";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/get-started`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/interest/assist`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/interest/probate`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/probate`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/probate-check`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/guides`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...seoArticles.map((article) => ({
      url: `${siteUrl}/${article.slug}`,
      lastModified: new Date(article.updated),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
