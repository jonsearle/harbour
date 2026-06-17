"use client";

import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/tracked-link";

type AssistStickyCtaProps = {
  buttonText?: string;
  destination?: string;
  eventName?: string;
  header?: string;
  pageSlug: string;
  subline: string;
};

export function AssistStickyCta({
  buttonText = "Guide Me Through This",
  destination = "/interest/assist",
  eventName = "assist_cta_clicked",
  header = "Feeling overwhelmed?",
  pageSlug,
  subline,
}: AssistStickyCtaProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-card/95 px-4 py-5 shadow-soft backdrop-blur sm:px-6 sm:py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 pr-9 sm:pr-0">
          <p className="font-serif text-2xl font-medium leading-tight text-foreground sm:text-3xl">
            {header}
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            {subline}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <TrackedLink
            href={destination}
            eventName={eventName}
            eventParams={{ page_slug: pageSlug, cta_location: "sticky_bar" }}
            className="flex-1 sm:flex-none"
          >
            <Button className="w-full sm:w-auto" size="lg">
              {buttonText}
            </Button>
          </TrackedLink>
        </div>
      </div>
    </div>
  );
}
