import Link from "next/link";
import {
  ArrowRight,
  Search,
  Stethoscope,
  Wrench,
  LineChart,
  Check,
  Quote,
  Sparkles,
  ShieldCheck,
  Zap,
  MessageSquare,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Scorecard } from "@/components/Scorecard";
import { FAQ } from "@/components/FAQ";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">
      <span className="h-1 w-1 rounded-full bg-oxblood" />
      {children}
    </span>
  );
}

function Chip({ icon: Icon, children }: { icon: any; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-card border border-line px-3.5 py-2 text-[13px] text-ink">
      <Icon className="h-3.5 w-3.5 text-oxblood" aria-hidden="true" />
      {children}
    </span>
  );
}

function PrimaryBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex h-11 items-center gap-2 rounded-md bg-oxblood px-5 text-[15px] font-medium text-white hover:bg-oxblood-600 transition-[transform,background-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px]"
    >
      {children}
    </Link>
  );
}

function SecondaryBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex h-11 items-center rounded-md bg-card border border-line px-5 text-[15px] font-medium text-ink hover:border-lineStrong transition-[transform,border-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px]"
    >
      {children}
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-container px-6 lg:px-10 pt-24 lg:pt-32 pb-28 lg:pb-40 text-center">
        <Reveal kind="small">
          <Eyebrow>GEO · Boulder, CO</Eyebrow>
        </Reveal>
        <Reveal kind="hero">
          <h1 className="mt-8 font-display font-normal text-ink tracking-[-0.025em] leading-[1.02] text-[48px] sm:text-[64px] lg:text-[88px] max-w-[14ch] mx-auto">
            Get named <span className="italic-accent">inside</span> the answer.
          </h1>
        </Reveal>
        <Reveal kind="default">
          <p className="mt-8 text-[18px] leading-[1.6] text-muted max-w-[62ch] mx-auto">
            Buyers ask ChatGPT, Gemini, Claude, and Perplexity for local recommendations. If
            those assistants don&rsquo;t name you, you&rsquo;re not in the consideration set.
            See how AI describes your business <span className="italic-accent">today</span>.
          </p>
        </Reveal>
        <Reveal kind="default">
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <PrimaryBtn href="/audit">
              Start the audit
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </PrimaryBtn>
            <SecondaryBtn href="/contact">Talk to us</SecondaryBtn>
          </div>
        </Reveal>
        <Reveal kind="small">
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              Tracked across
            </span>
            {["ChatGPT", "Gemini", "Claude", "Perplexity"].map((p) => (
              <span key={p} className="text-[14px] text-muted">
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Evidence strip */}
      <section className="border-y border-line">
        <div className="mx-auto max-w-container px-6 lg:px-10 py-6 text-center">
          <p className="text-[12px] font-mono uppercase tracking-[0.08em] text-ink">
            30+ prompts · 4 AI platforms · 1 business day to preview
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-container px-6 lg:px-10 py-28 lg:py-40">
        <div className="bg-tintPeach rounded-[28px] p-8 lg:p-14 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <Reveal kind="small">
              <Eyebrow>The Problem</Eyebrow>
            </Reveal>
            <Reveal kind="display">
              <h2 className="mt-6 font-display font-normal text-ink tracking-[-0.02em] leading-[1.1] text-[40px] lg:text-[56px]">
                If the AI doesn&rsquo;t name you, you don&rsquo;t exist to that buyer.
              </h2>
            </Reveal>
            <Reveal kind="default">
              <p className="mt-6 text-[18px] leading-[1.6] text-muted max-w-[48ch]">
                Buyers ask one question, read three names, and pick one. There is no second
                page of results.
              </p>
            </Reveal>
            <Reveal kind="default">
              <p className="mt-4 text-[18px] leading-[1.6] text-muted max-w-[48ch]">
                SEO got you on page one of Google. That&rsquo;s no longer where the decision
                happens.
              </p>
            </Reveal>
            <Reveal kind="default">
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  { icon: Search, label: "Review depth" },
                  { icon: Quote, label: "Third-party citations" },
                  { icon: MessageSquare, label: "Forum mentions" },
                  { icon: ShieldCheck, label: "Schema signals" },
                ].map(({ icon, label }) => (
                  <Chip key={label} icon={icon}>
                    {label}
                  </Chip>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal kind="default">
            <Scorecard />
          </Reveal>
        </div>
      </section>

      {/* Method */}
      <section className="mx-auto max-w-container px-6 lg:px-10 py-28 lg:py-40">
        <div className="text-center max-w-[32ch] mx-auto">
          <Reveal kind="small">
            <Eyebrow>Method</Eyebrow>
          </Reveal>
          <Reveal kind="display">
            <h2 className="mt-6 font-display font-normal text-ink tracking-[-0.02em] leading-[1.1] text-[40px] lg:text-[56px]">
              Four steps. Same order, <span className="italic-accent">every</span> engagement.
            </h2>
          </Reveal>
        </div>

        <Reveal kind="stagger">
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                t: "Measure",
                icon: Search,
                d: "Run the exact prompts your prospects use across ChatGPT, Gemini, Claude, and Perplexity. Score mention rate vs. competitors.",
              },
              {
                n: "02",
                t: "Diagnose",
                icon: Stethoscope,
                d: "Trace why AI skips you: review gaps, missing third-party citations, weak forum signal. Backed by screenshots and transcripts.",
              },
              {
                n: "03",
                t: "Fix",
                icon: Wrench,
                d: "A prioritized plan for the citations, content, and review signals that actually move AI recommendations. Not generic SEO.",
              },
              {
                n: "04",
                t: "Monitor",
                icon: LineChart,
                d: "Track visibility across all four assistants so you see exactly when and where your mention rate improves.",
              },
            ].map(({ n, t, icon: Icon, d }) => (
              <Reveal
                key={n}
                kind="default"
                child
                as="article"
                className="bg-card border border-line rounded-2xl p-6 lg:p-7 hover:border-lineStrong hover:-translate-y-[2px] hover:shadow-[0_12px_32px_-16px_rgba(34,34,34,0.18)] transition-[transform,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                <div className="flex items-center gap-3 mb-5">
                  <Icon className="h-4 w-4 text-oxblood" aria-hidden="true" />
                  <span className="text-[12px] font-mono tracking-[0.08em] text-muted">
                    {n}
                  </span>
                </div>
                <h3 className="font-display text-[28px] lg:text-[28px] leading-[1.2] tracking-[-0.01em] font-medium text-ink">
                  {t}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-muted">{d}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Services / Pricing */}
      <section id="pricing" className="mx-auto max-w-container px-6 lg:px-10 py-28 lg:py-40">
        <div className="max-w-[40ch]">
          <Reveal kind="small">
            <Eyebrow>Services</Eyebrow>
          </Reveal>
          <Reveal kind="display">
            <h2 className="mt-6 font-display font-normal text-ink tracking-[-0.02em] leading-[1.1] text-[40px] lg:text-[56px]">
              Start with the audit. Scale only if it works.
            </h2>
          </Reveal>
          <Reveal kind="default">
            <p className="mt-6 text-[18px] leading-[1.6] text-muted max-w-[52ch]">
              You&rsquo;re not paying for a retainer before you see results. The audit tells
              you whether AI visibility is a real problem in your market — and whether we can
              fix it.
            </p>
          </Reveal>
        </div>

        <Reveal kind="stagger">
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            <PricingCard
              featured
              name="AI Visibility Audit"
              price="$1,500–$2,000"
              cadence="one-time"
              tagline="The entry point. Most engagements start here."
              bullets={[
                "30+ prompt tests across all four AI platforms",
                "Competitive scorecard vs. your real competitors",
                "Root-cause diagnosis with screenshots and transcripts",
                "Prioritized 90-day action plan",
              ]}
              cta={{ label: "Start the audit", href: "/audit" }}
            />
            <PricingCard
              name="Implementation Sprint"
              price="$2,500–$5,000"
              cadence="one-time"
              tagline="We execute the highest-impact fixes from the audit."
              bullets={[
                "Citation building",
                "Content restructuring",
                "Review strategy",
                "Re-measurement at the end",
              ]}
              cta={{ label: "Talk about a sprint", href: "/contact" }}
            />
            <PricingCard
              name="Ongoing Retainer"
              price="$2,000–$4,000"
              cadence="per month"
              tagline="Monthly work and reporting once visibility is moving."
              bullets={[
                "Monthly monitoring across all four platforms",
                "Continued content and citation building",
                "Visibility report showing movement over time",
              ]}
              cta={{ label: "Talk about a retainer", href: "/contact" }}
            />
          </div>
        </Reveal>
      </section>

      {/* SEO vs GEO */}
      <section className="mx-auto max-w-container px-6 lg:px-10 py-28 lg:py-40">
        <div className="max-w-[40ch]">
          <Reveal kind="small">
            <Eyebrow>SEO vs GEO</Eyebrow>
          </Reveal>
          <Reveal kind="display">
            <h2 className="mt-6 font-display font-normal text-ink tracking-[-0.02em] leading-[1.1] text-[40px] lg:text-[56px]">
              Different surface. Different signals.
            </h2>
          </Reveal>
        </div>

        <Reveal kind="default">
          <div className="mt-12">
            <div className="grid grid-cols-3 border-b border-lineStrong pb-3">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">
                Dimension
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                Traditional SEO
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">
                Generative Engine Optimization
              </div>
            </div>
            {[
              ["Output", "Ranked list of links", "A short list of named businesses"],
              ["Win condition", "Top 3 organic positions", "Cited inside the answer"],
              [
                "Primary signals",
                "Backlinks, on-page content, technical SEO",
                "Third-party mentions, review depth, forum signal, schema",
              ],
              [
                "Measurement",
                "Rank tracking, impressions, CTR",
                "Mention rate across prompts and platforms",
              ],
              ["Failure mode", "Page two", "Not named at all"],
            ].map(([dim, seo, geo]) => (
              <div key={dim as string} className="grid grid-cols-3 border-b border-line py-5">
                <div className="text-[15px] text-ink font-medium">{dim}</div>
                <div className="text-[15px] text-muted pr-4">{seo}</div>
                <div className="text-[15px] text-ink flex items-start gap-2">
                  <Check
                    className="h-4 w-4 mt-1 shrink-0 text-oxblood"
                    aria-hidden="true"
                  />
                  <span>{geo}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Field study */}
      <section
        id="field-study"
        className="mx-auto max-w-container px-6 lg:px-10 py-28 lg:py-40"
      >
        <div className="bg-tintSage rounded-[28px] p-8 lg:p-14 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <Reveal kind="small">
              <Eyebrow>Field Study</Eyebrow>
            </Reveal>
            <Reveal kind="display">
              <h2 className="mt-6 font-display font-normal text-ink tracking-[-0.02em] leading-[1.1] text-[40px] lg:text-[56px]">
                Three firms own <span className="italic-accent">every</span> AI
                recommendation in Boulder personal injury.
              </h2>
            </Reveal>
            <Reveal kind="default">
              <p className="mt-6 text-[18px] leading-[1.6] text-muted max-w-[56ch]">
                30 buyer-intent prompts across ChatGPT, Gemini, Claude, and Perplexity, for a
                competitive set of 8 firms. Three names surfaced in nearly every answer. Five
                well-established competitors appeared in zero.
              </p>
            </Reveal>
            <Reveal kind="stagger">
              <div className="mt-10 grid grid-cols-3 gap-6">
                {[
                  { v: "30", label: "prompts" },
                  { v: "3 of 8", label: "firms named" },
                  { v: "1", label: "Reddit thread" },
                ].map((s) => (
                  <Reveal key={s.label} kind="default" child>
                    <div className="font-display font-normal text-ink text-[36px] lg:text-[44px] leading-none tracking-[-0.02em] tabular-nums">
                      {s.v}
                    </div>
                    <p className="mt-2 text-[13px] text-muted">{s.label}</p>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal kind="default">
            <figure className="bg-card border border-line rounded-2xl p-6 lg:p-7">
              <Quote className="h-6 w-6 text-oxblood" aria-hidden="true" />
              <blockquote className="mt-4 text-[18px] leading-[1.6] text-ink">
                &ldquo;Based on local reputation and case results, three firms come up most
                often:{" "}
                <span className="text-oxblood font-medium">Tenge Law Firm</span>,{" "}
                <span className="text-oxblood font-medium">Jeffress Law</span>, and{" "}
                <span className="text-oxblood font-medium">Sloat Nicholson</span>.&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.08em] text-muted">
                <Sparkles className="h-3.5 w-3.5 text-oxblood" aria-hidden="true" />
                ChatGPT · prompt: best personal injury lawyers in Boulder
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Why Sight */}
      <section className="mx-auto max-w-container px-6 lg:px-10 py-28 lg:py-40">
        <div className="max-w-[40ch]">
          <Reveal kind="small">
            <Eyebrow>Why Sight</Eyebrow>
          </Reveal>
          <Reveal kind="display">
            <h2 className="mt-6 font-display font-normal text-ink tracking-[-0.02em] leading-[1.1] text-[40px] lg:text-[56px]">
              Built for generative search. Not bolted onto legacy SEO.
            </h2>
          </Reveal>
        </div>
        <Reveal kind="stagger">
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: Sparkles,
                t: "Purpose-built",
                d: "Built for generative search from day one — not an SEO shop tacking on a new service line.",
              },
              {
                icon: MessageSquare,
                t: "Local-first",
                d: "We start in Boulder because local markets are where visibility gaps are widest and most fixable.",
              },
              {
                icon: ShieldCheck,
                t: "Evidence-based",
                d: "Every recommendation is backed by screenshots and transcripts of actual AI responses — not theory.",
              },
              {
                icon: Zap,
                t: "Low-risk entry",
                d: "Start with an audit. Scale to a sprint or retainer only if the data proves it's worth it.",
              },
            ].map(({ icon: Icon, t, d }) => (
              <Reveal
                key={t}
                kind="default"
                child
                as="article"
                className="bg-card border border-line rounded-2xl p-6 lg:p-7 hover:border-lineStrong transition-[border-color] duration-200"
              >
                <Icon className="h-5 w-5 text-oxblood" aria-hidden="true" />
                <h3 className="mt-5 font-display text-[24px] lg:text-[28px] tracking-[-0.01em] font-medium text-ink">
                  {t}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-muted max-w-[46ch]">{d}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-container px-6 lg:px-10 py-28 lg:py-40">
        <div className="grid lg:grid-cols-[minmax(0,360px)_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <Reveal kind="small">
              <Eyebrow>FAQ</Eyebrow>
            </Reveal>
            <Reveal kind="display">
              <h2 className="mt-6 font-display font-normal text-ink tracking-[-0.02em] leading-[1.1] text-[36px] lg:text-[48px]">
                Questions we get on every first call.
              </h2>
            </Reveal>
            <Reveal kind="default">
              <p className="mt-6 text-[16px] leading-[1.6] text-muted">
                Still unsure?{" "}
                <Link
                  href="/contact"
                  className="text-ink hover:text-oxblood underline underline-offset-4"
                >
                  Send us a note
                </Link>{" "}
                — we reply same day.
              </p>
            </Reveal>
          </div>
          <Reveal kind="default">
            <FAQ />
          </Reveal>
        </div>
      </section>

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
          <p className="mt-8 text-[18px] leading-[1.6] text-muted max-w-[52ch] mx-auto">
            A 20-minute audit preview is free. We&rsquo;ll show you the prompts, the answers,
            and where you stand.
          </p>
        </Reveal>
        <Reveal kind="default">
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <PrimaryBtn href="/audit">
              Start the audit
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </PrimaryBtn>
            <SecondaryBtn href="/contact">Talk to us</SecondaryBtn>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function PricingCard({
  name,
  price,
  cadence,
  tagline,
  bullets,
  cta,
  featured = false,
}: {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  bullets: string[];
  cta: { label: string; href: string };
  featured?: boolean;
}) {
  return (
    <Reveal
      kind="default"
      child
      as="article"
      className={`relative bg-card border rounded-2xl p-6 lg:p-8 flex flex-col transition-[transform,border-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] ${
        featured
          ? "border-line ring-1 ring-oxblood/30 hover:ring-oxblood/50"
          : "border-line hover:border-lineStrong"
      }`}
    >
      {featured && (
        <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-oxblood px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
          Start here
        </span>
      )}
      <h3 className="font-display text-[22px] tracking-[-0.01em] font-medium text-ink">
        {name}
      </h3>
      <p className="mt-2 text-[14px] text-muted">{tagline}</p>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-display text-[36px] font-normal tracking-[-0.02em] text-ink tabular-nums">
          {price}
        </span>
        <span className="text-[13px] text-muted">{cadence}</span>
      </div>
      <ul className="mt-6 space-y-3">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2.5 text-[14.5px] leading-[1.5] text-ink">
            <Check className="h-4 w-4 mt-0.5 shrink-0 text-oxblood" aria-hidden="true" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <Link
        href={cta.href}
        className={`mt-8 inline-flex h-11 items-center justify-center rounded-md px-5 text-[14px] font-medium transition-[transform,background-color,border-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] ${
          featured
            ? "bg-oxblood text-white hover:bg-oxblood-600"
            : "bg-card border border-line text-ink hover:border-lineStrong"
        }`}
      >
        {cta.label}
      </Link>
    </Reveal>
  );
}
