import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/tracked-link";

type SiteHeaderProps = {
  ctaEventName?: string;
  ctaHref?: string;
  ctaLocation?: string;
  ctaText?: string;
  showCta?: boolean;
};

export function SiteHeader({
  ctaEventName = "assist_cta_clicked",
  ctaHref = "/interest/assist",
  ctaLocation = "header",
  ctaText = "Get free help",
  showCta = true,
}: SiteHeaderProps) {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 sm:px-8">
      <Link className="block" href="/" aria-label="Harbour home">
        <img
          alt="Harbour"
          className="h-10 w-auto"
          height="235"
          src="/brand/harbour-wordmark.png"
          width="692"
        />
      </Link>
      {showCta ? (
        <TrackedLink
          href={ctaHref}
          eventName={ctaEventName}
          eventParams={{ cta_location: ctaLocation }}
        >
          <Button size="sm">{ctaText}</Button>
        </TrackedLink>
      ) : null}
    </header>
  );
}
