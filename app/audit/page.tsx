import { AuditForm } from "@/components/AuditForm";
import { Reveal } from "@/components/Reveal";
import { Check } from "lucide-react";

export const metadata = {
  title: "AI Visibility Audit — Sight",
  description:
    "Request your AI Visibility Audit. We test your business across ChatGPT, Gemini, Claude, and Perplexity and show you exactly where you stand.",
};

const includes = [
  "30+ prompt tests across ChatGPT, Gemini, Claude, and Perplexity",
  "Competitive scorecard against your real competitors",
  "Root-cause diagnosis with screenshots and transcripts",
  "Prioritized 90-day action plan",
];

export default function AuditPage() {
  return (
    <section className="mx-auto max-w-container px-6 lg:px-10 pt-24 lg:pt-32 pb-28">
      <div className="grid lg:grid-cols-[1fr_minmax(0,480px)] gap-12 lg:gap-20 items-start">
        <div>
          <Reveal kind="small">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">
              <span className="h-1 w-1 rounded-full bg-oxblood" />
              Audit
            </span>
          </Reveal>
          <Reveal kind="hero">
            <h1 className="mt-8 font-display font-normal text-ink tracking-[-0.025em] leading-[1.05] text-[40px] sm:text-[56px] lg:text-[72px] max-w-[16ch]">
              See exactly <span className="italic-accent">how</span> AI describes your
              business.
            </h1>
          </Reveal>
          <Reveal kind="default">
            <p className="mt-8 text-[18px] leading-[1.6] text-muted max-w-[56ch]">
              Tell us a little about your business. We&rsquo;ll run the prompts your prospects
              actually use and send back a preview within one business day.
            </p>
          </Reveal>
          <Reveal kind="default">
            <ul className="mt-10 space-y-3">
              {includes.map((line) => (
                <li key={line} className="flex gap-3 text-[15px] leading-[1.6] text-ink">
                  <Check className="h-4 w-4 mt-1.5 shrink-0 text-oxblood" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal kind="default">
            <div className="mt-10 rounded-2xl bg-surface border border-line px-5 py-4 text-[14px] leading-[1.6] text-ink max-w-[56ch]">
              <span className="font-medium">Investment:</span> $1,500–$2,000 one-time, scoped
              to your market and competitive set. The 20-minute preview is free.
            </div>
          </Reveal>
        </div>

        <div className="lg:sticky lg:top-24">
          <Reveal kind="default">
            <AuditForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
