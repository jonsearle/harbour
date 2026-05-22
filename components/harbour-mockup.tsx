import {
  Building2,
  Check,
  Clock3,
  FileText,
  FolderOpen,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const checklist = [
  { label: "Register the death", state: "Complete" },
  { label: "Get death certificate copies", state: "Complete" },
  { label: "Contact pension provider", state: "In progress" },
  { label: "Get probate paperwork ready", state: "Next" },
];

const institutions = [
  { name: "Barclays", detail: "Current account", status: "Documents sent" },
  { name: "HMRC", detail: "Inheritance Tax", status: "Reference pending" },
  { name: "Pension provider", detail: "Monthly pension", status: "Reply due" },
];

const documents = [
  "Death certificate.pdf",
  "Will.pdf",
  "Probate application draft.pdf",
];

export function HarbourMockup() {
  return (
    <div className="relative mx-auto w-full max-w-5xl animate-fade-up [animation-delay:120ms]">
      <div className="absolute -inset-8 rounded-[2rem] bg-[rgba(177,197,188,0.14)] blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-soft">
        <div className="flex flex-col gap-4 border-b bg-[hsl(44_32%_98%)] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Harbour
            </p>
            <p className="mt-1 text-base font-medium text-foreground">
              Executor workspace
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-muted-foreground">Margaret Ellis estate</span>
            <span className="rounded-full bg-accent/70 px-3 py-1 text-xs font-medium text-accent-foreground">
              58% complete
            </span>
          </div>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="p-6 sm:p-8 lg:border-r lg:border-border/60">
            <div className="mb-7 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium text-foreground">
                  What needs attention
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  A clear place to see what is done and what comes next.
                </p>
              </div>
              <ShieldCheck
                className="mt-1 h-5 w-5 text-[hsl(154_18%_34%)]"
                aria-hidden="true"
              />
            </div>

            <div className="mb-8">
              <div className="mb-2 flex justify-between text-xs text-muted-foreground">
                <span>Progress</span>
                <span>7 of 12 steps</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[58%] rounded-full bg-[hsl(154_18%_34%)]" />
              </div>
            </div>

            <div className="space-y-3.5">
              {checklist.map((item) => (
                <div
                  className="flex items-center gap-3 rounded-lg bg-background/65 p-4"
                  key={item.label}
                >
                  <StatusIcon state={item.state} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">
                      {item.label}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.state}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg bg-accent/35 p-5">
              <div className="mb-2 flex items-center gap-2">
                <Clock3
                  className="h-4 w-4 text-accent-foreground"
                  aria-hidden="true"
                />
                <p className="text-sm font-medium text-foreground">
                  Next helpful step
                </p>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">
                Check the probate paperwork and confirm whether HMRC needs an
                inheritance tax return.
              </p>
            </div>
          </div>

          <div className="grid content-start gap-7 bg-[hsl(43_30%_96%)] p-6 sm:p-8">
            <section aria-label="Organisations to contact">
              <div className="mb-3 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <h4 className="text-sm font-medium text-foreground">
                  Organisations to contact
                </h4>
              </div>
              <div className="space-y-2.5">
                {institutions.map((institution) => (
                  <div
                    className="rounded-lg bg-card px-4 py-3.5 shadow-fine"
                    key={institution.name}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-foreground">
                        {institution.name}
                      </p>
                      <p className="shrink-0 text-[11px] text-muted-foreground">
                        {institution.status}
                      </p>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {institution.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section aria-label="Uploaded documents">
              <div className="mb-3 flex items-center gap-2">
                <FolderOpen className="h-4 w-4 text-muted-foreground" />
                <h4 className="text-sm font-medium text-foreground">
                  Documents in one place
                </h4>
              </div>
              <div className="grid gap-2.5">
                {documents.map((document) => (
                  <div
                    className="flex items-center gap-2 rounded-lg bg-card px-4 py-3.5 text-sm text-foreground shadow-fine"
                    key={document}
                  >
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="truncate">{document}</span>
                  </div>
                ))}
              </div>
            </section>

            <section
              aria-label="Probate reference"
              className="rounded-lg bg-[hsl(154_18%_24%)] p-5 text-primary-foreground"
            >
              <div className="mb-2 flex items-center gap-2">
                <Landmark className="h-4 w-4 opacity-80" aria-hidden="true" />
                <h4 className="text-sm font-medium">Probate application</h4>
              </div>
              <p className="text-sm leading-6 text-primary-foreground/80">
                Waiting for the HMRC reference before submission.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusIcon({ state }: { state: string }) {
  const complete = state === "Complete";
  const next = state === "Next";

  return (
    <span
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border",
        complete && "border-transparent bg-[hsl(154_18%_34%)] text-white",
        next && "border-accent bg-accent text-accent-foreground",
        !complete && !next && "border-transparent bg-card text-muted-foreground",
      )}
    >
      {complete ? (
        <Check className="h-4 w-4" />
      ) : (
        <span className="h-2 w-2 rounded-full bg-current" />
      )}
    </span>
  );
}
