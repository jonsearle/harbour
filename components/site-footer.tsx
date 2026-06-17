import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 px-6 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <img
          alt="Harbour"
          className="h-auto w-[122px]"
          height="195"
          src="/brand/harbour-wordmark.png"
          width="744"
        />
        <div className="flex flex-wrap items-center gap-5">
          <p>Built in the UK</p>
          <Link className="transition-colors hover:text-foreground" href="/guides">
            Guides
          </Link>
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
  );
}
