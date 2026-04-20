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
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-violet/15 blur-3xl" />
      </div>
      <div className="mx-auto max-w-container px-5 sm:px-8 pt-14 pb-24 sm:pt-20 grid lg:grid-cols-[1fr_minmax(0,460px)] gap-10 lg:gap-16 items-start">
        <div>
          <Reveal>
            <p className="text-sm font-medium text-violet mb-4">AI Visibility Audit</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-navy font-semibold tracking-tight text-[32px] leading-[1.1] sm:text-[44px] sm:leading-[1.05]">
              See exactly how AI describes your business — and where you stand against competitors.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[17px] leading-[1.6] text-slate-body max-w-xl">
              Tell us a little about your business. We&rsquo;ll run the prompts your prospects actually use and send back a preview within one business day.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-8 space-y-3">
              {includes.map((line) => (
                <li key={line} className="flex gap-3 text-[15px] leading-[1.5] text-slate-body">
                  <Check className="h-4 w-4 mt-1 shrink-0 text-violet" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 rounded-lg border border-slate-line bg-surface px-4 py-3 text-[13.5px] text-slate-body max-w-xl">
              <span className="text-navy font-medium">Investment:</span> $500–$1,500 one-time, scoped to your market and competitive set. The 20-minute preview is free.
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:sticky lg:top-24">
          <AuditForm />
        </Reveal>
      </div>
    </section>
  );
}
