import Link from "next/link";
import {
  ArrowRight,
  Check,
  LineChart,
  Search,
  Stethoscope,
  Wrench,
  FileText,
  MessageSquare,
  Quote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Method — Sight",
  description:
    "The four-step Sight process: measure, diagnose, fix, monitor. Same order, every engagement.",
};

type StepProps = {
  n: string;
  label: string;
  title: React.ReactNode;
  body: string[];
  chips: { icon: any; label: string }[];
  tint: "canvas" | "peach" | "sage" | "sky";
  visual: React.ReactNode;
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">
      <span className="h-1 w-1 rounded-full bg-oxblood" />
      {children}
    </span>
  );
}

function Chip({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-card border border-line px-3.5 py-2 text-[13px] text-ink">
      <Icon className="h-3.5 w-3.5 text-oxblood" aria-hidden="true" />
      {label}
    </span>
  );
}

function Step({ n, label, title, body, chips, tint, visual }: StepProps) {
  const tintClass =
    tint === "peach"
      ? "bg-tintPeach"
      : tint === "sage"
      ? "bg-tintSage"
      : tint === "sky"
      ? "bg-tintSky"
      : "bg-surface";
  return (
    <section className="mx-auto max-w-container px-6 lg:px-10 py-14 lg:py-20">
      <div className={`${tintClass} rounded-[28px] p-8 lg:p-14 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center`}>
        <div>
          <Reveal kind="small">
            <div className="flex items-center gap-3">
              <span className="text-[12px] font-mono tracking-[0.08em] text-muted">
                {n} / 04
              </span>
              <Eyebrow>{label}</Eyebrow>
            </div>
          </Reveal>
          <Reveal kind="display">
            <h2 className="mt-6 font-display font-normal text-ink tracking-[-0.02em] leading-[1.1] text-[40px] lg:text-[56px]">
              {title}
            </h2>
          </Reveal>
          {body.map((p, i) => (
            <Reveal key={i} kind="default">
              <p className="mt-5 text-[17px] leading-[1.6] text-muted max-w-[54ch]">{p}</p>
            </Reveal>
          ))}
          <Reveal kind="default">
            <div className="mt-7 flex flex-wrap gap-2">
              {chips.map((c) => (
                <Chip key={c.label} icon={c.icon} label={c.label} />
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal kind="default">
          <div className="bg-card border border-line rounded-2xl p-6 lg:p-7">{visual}</div>
        </Reveal>
      </div>
    </section>
  );
}

const PROMPTS = [
  "best personal injury lawyer Boulder",
  "top rated PI attorney near me",
  "Boulder car accident attorney",
  "who to call after a Boulder crash",
  "personal injury firms Colorado reviews",
];

export default function MethodPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-container px-6 lg:px-10 pt-24 lg:pt-32 pb-20 text-center">
        <Reveal kind="small">
          <Eyebrow>Method</Eyebrow>
        </Reveal>
        <Reveal kind="hero">
          <h1 className="mt-8 font-display font-normal text-ink tracking-[-0.025em] leading-[1.02] text-[48px] sm:text-[64px] lg:text-[80px] max-w-[18ch] mx-auto">
            Four steps. Same order, <span className="italic-accent">every</span> engagement.
          </h1>
        </Reveal>
        <Reveal kind="default">
          <p className="mt-8 text-[18px] leading-[1.6] text-muted max-w-[56ch] mx-auto">
            Evidence first, then a plan, then the work, then proof it&rsquo;s moving. The same
            path for every client, scoped to your market.
          </p>
        </Reveal>
      </section>

      {/* Step 1 — Measure (canvas) */}
      <Step
        n="01"
        label="Measure"
        title={<>Run the prompts your buyers <span className="italic-accent">actually</span> use.</>}
        body={[
          "We design 30+ buyer-intent prompts specific to your market and run each one across ChatGPT, Gemini, Claude, and Perplexity.",
          "Every answer is captured as a screenshot and transcript. You see exactly which competitors surface, how often, and in what order.",
        ]}
        chips={[
          { icon: Search, label: "30+ prompts" },
          { icon: Sparkles, label: "4 AI platforms" },
          { icon: FileText, label: "Full transcripts" },
        ]}
        tint="canvas"
        visual={
          <div>
            <div className="flex items-center justify-between border-b border-line pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-oxblood" />
                <span className="text-[13px] font-medium text-ink">Prompt set</span>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-[0.08em] text-muted">
                Boulder · PI
              </span>
            </div>
            <ul className="space-y-2.5">
              {PROMPTS.map((p, i) => (
                <li key={p} className="flex items-start gap-3 text-[14px] text-ink">
                  <span className="text-[11px] font-mono text-muted w-6 shrink-0 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="bg-surface rounded-md px-3 py-2 flex-1">{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[12px] font-mono uppercase tracking-[0.08em] text-muted">
              +25 more
            </p>
          </div>
        }
      />

      {/* Step 2 — Diagnose (peach) */}
      <Step
        n="02"
        label="Diagnose"
        title={<>Trace <span className="italic-accent">why</span> AI skips you.</>}
        body={[
          "We cross-reference every answer with the signals each assistant is pulling from — third-party citations, review depth, forum mentions, schema — and isolate the gaps.",
          "You get a root-cause write-up with the exact sources each assistant is citing for your competitors, and what you&rsquo;re missing.",
        ]}
        chips={[
          { icon: Quote, label: "Third-party citations" },
          { icon: MessageSquare, label: "Forum signal" },
          { icon: ShieldCheck, label: "Schema" },
        ]}
        tint="peach"
        visual={
          <div>
            <div className="flex items-center justify-between border-b border-line pb-3 mb-4">
              <span className="text-[13px] font-medium text-ink">Signal gap</span>
              <span className="text-[11px] font-mono uppercase tracking-[0.08em] text-muted">
                Your firm
              </span>
            </div>
            <ul className="space-y-4">
              {[
                { label: "Review depth", you: 18, top: 96 },
                { label: "Third-party citations", you: 4, top: 42 },
                { label: "Reddit mentions", you: 0, top: 11 },
                { label: "Schema completeness", you: 60, top: 95 },
              ].map((row) => (
                <li key={row.label}>
                  <div className="flex items-center justify-between text-[13px] text-ink">
                    <span>{row.label}</span>
                    <span className="font-mono tabular-nums text-muted">
                      {row.you} · top: {row.top}
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-surface overflow-hidden">
                    <div
                      className="h-full bg-oxblood rounded-full"
                      style={{ width: `${(row.you / row.top) * 100}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        }
      />

      {/* Step 3 — Fix (canvas) */}
      <Step
        n="03"
        label="Fix"
        title={<>Move the signals that <span className="italic-accent">actually</span> change answers.</>}
        body={[
          "We prioritize fixes by impact and effort, not by what a generic SEO checklist says. Citation building, content restructuring, review strategy, schema — in the order that moves your mention rate fastest.",
          "You&rsquo;re never handed a to-do list. Implementation is scoped into a sprint with clear ownership and a re-measurement at the end.",
        ]}
        chips={[
          { icon: Wrench, label: "Citation building" },
          { icon: FileText, label: "Content" },
          { icon: Check, label: "Review strategy" },
        ]}
        tint="canvas"
        visual={
          <div>
            <div className="flex items-center justify-between border-b border-line pb-3 mb-4">
              <span className="text-[13px] font-medium text-ink">90-day action plan</span>
              <span className="text-[11px] font-mono uppercase tracking-[0.08em] text-muted">
                Prioritized
              </span>
            </div>
            <ul className="space-y-3">
              {[
                { pr: "P0", task: "Publish 4 authority citations on legal directories" },
                { pr: "P0", task: "Seed Reddit answer in r/Boulder PI threads" },
                { pr: "P1", task: "Restructure practice-area pages for AI parseability" },
                { pr: "P1", task: "Deploy review-collection sequence" },
                { pr: "P2", task: "Complete LocalBusiness + Attorney schema" },
              ].map((r) => (
                <li key={r.task} className="flex items-start gap-3 text-[14px] text-ink">
                  <span className="mt-0.5 inline-flex h-5 w-7 items-center justify-center rounded-sm bg-oxblood/10 text-[10px] font-mono font-semibold text-oxblood">
                    {r.pr}
                  </span>
                  <span>{r.task}</span>
                </li>
              ))}
            </ul>
          </div>
        }
      />

      {/* Step 4 — Monitor (sky) */}
      <Step
        n="04"
        label="Monitor"
        title={<>See <span className="italic-accent">when</span> and where visibility moves.</>}
        body={[
          "Every month we re-run the prompt set across all four platforms and report mention rate, position, and share-of-voice against your competitive set.",
          "When an assistant starts naming you, you&rsquo;ll know which signal moved the needle — and we&rsquo;ll double down there.",
        ]}
        chips={[
          { icon: LineChart, label: "Monthly re-measurement" },
          { icon: Stethoscope, label: "Signal attribution" },
          { icon: Sparkles, label: "All 4 platforms" },
        ]}
        tint="sky"
        visual={
          <div>
            <div className="flex items-center justify-between border-b border-line pb-3 mb-4">
              <span className="text-[13px] font-medium text-ink">Mention rate</span>
              <span className="text-[11px] font-mono uppercase tracking-[0.08em] text-muted">
                6-month view
              </span>
            </div>
            <div className="space-y-3">
              {[
                { m: "Jan", v: 0 },
                { m: "Feb", v: 4 },
                { m: "Mar", v: 12 },
                { m: "Apr", v: 28 },
                { m: "May", v: 41 },
                { m: "Jun", v: 58 },
              ].map((r) => (
                <div key={r.m} className="flex items-center gap-3">
                  <span className="w-8 text-[12px] font-mono text-muted">{r.m}</span>
                  <div className="flex-1 h-2 rounded-full bg-surface overflow-hidden">
                    <div
                      className="h-full bg-oxblood rounded-full"
                      style={{ width: `${r.v}%` }}
                    />
                  </div>
                  <span className="w-10 text-right text-[12px] font-mono tabular-nums text-ink">
                    {r.v}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* Closing CTA */}
      <section className="mx-auto max-w-container px-6 lg:px-10 py-28 lg:py-40 text-center">
        <Reveal kind="small">
          <Eyebrow>Start Here</Eyebrow>
        </Reveal>
        <Reveal kind="display">
          <h2 className="mt-8 font-display font-normal text-ink tracking-[-0.025em] leading-[1.02] text-[48px] sm:text-[64px] lg:text-[80px] max-w-[18ch] mx-auto">
            See your AI visibility <span className="italic-accent">today</span>.
          </h2>
        </Reveal>
        <Reveal kind="default">
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/audit"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-oxblood px-5 text-[15px] font-medium text-white hover:bg-oxblood-600 transition-[transform,background-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px]"
            >
              Start the audit
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-md bg-card border border-line px-5 text-[15px] font-medium text-ink hover:border-lineStrong transition-[transform,border-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px]"
            >
              Talk to us
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
