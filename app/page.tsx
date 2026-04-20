import Link from "next/link";
import { ArrowRight, Search, Stethoscope, Wrench, LineChart, Check, X, MessageSquare, Quote, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { HeroChat } from "@/components/HeroChat";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Scorecard } from "@/components/Scorecard";
import { FAQ } from "@/components/FAQ";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-line">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-violet/15 blur-3xl" />
          <div className="absolute top-10 right-[-120px] h-[360px] w-[360px] rounded-full bg-[#7AC3FF]/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-container px-5 sm:px-8 pt-14 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 grid lg:grid-cols-[1.05fr_minmax(0,460px)] gap-10 lg:gap-16 items-center">
          <div>
            <Reveal>
              <p className="text-sm font-medium text-violet mb-5">Generative Engine Optimization · Boulder, CO</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-navy font-semibold tracking-tight text-[34px] leading-[1.1] sm:text-[46px] lg:text-[52px] lg:leading-[1.05]">
                Your next client isn&rsquo;t Googling anymore. They&rsquo;re asking AI.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] text-slate-body max-w-xl">
                When ChatGPT, Gemini, Claude, and Perplexity recommend a local business, three names come up — and the rest don&rsquo;t exist. Sight gets you named.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/audit"
                  className="group inline-flex h-11 items-center gap-2 rounded-md bg-violet px-5 text-[15px] font-semibold text-white shadow-[0_8px_20px_-8px_rgba(99,91,255,0.6)] hover:bg-violet-600 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-12px_rgba(99,91,255,0.6)] active:translate-y-0 transition-all duration-200"
                >
                  Get an AI Visibility Audit
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center rounded-md border border-slate-line bg-white px-5 text-[15px] font-medium text-navy hover:border-navy/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Talk to us
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <HeroChat />
          </Reveal>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-slate-line">
        <div className="mx-auto max-w-container px-5 sm:px-8 py-8">
          <Reveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <p className="text-[12px] font-mono uppercase tracking-[0.18em] text-slate-muted shrink-0">
                Tracking visibility across
              </p>
              <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
                {["ChatGPT", "Gemini", "Claude", "Perplexity"].map((p) => (
                  <span key={p} className="text-[15px] font-medium text-navy/90 tracking-tight">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface border-b border-slate-line">
        <div className="mx-auto max-w-container px-5 sm:px-8 py-14 sm:py-16">
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { v: "4", label: "AI platforms tested every audit", suffix: "" },
              { v: "30", label: "buyer-intent prompts per market", suffix: "+" },
              { v: "100", label: "evidence-backed — screenshots & transcripts", suffix: "%" },
              { v: "1", label: "business day to your audit preview", suffix: "" },
            ].map((s) => (
              <StaggerItem key={s.label} className="border-l border-violet/40 pl-5">
                <div className="text-navy font-semibold tracking-tight text-[40px] sm:text-[44px] leading-none tabular-nums">
                  {s.v}
                  <span className="text-violet">{s.suffix}</span>
                </div>
                <p className="mt-2 text-[13.5px] leading-[1.5] text-slate-body max-w-[18ch]">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Problem + Scorecard mockup */}
      <section className="border-b border-slate-line">
        <div className="mx-auto max-w-container px-5 sm:px-8 py-20 sm:py-24 grid lg:grid-cols-[1fr_minmax(0,540px)] gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <p className="text-sm font-medium text-violet mb-4">The problem</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-navy font-semibold tracking-tight text-[28px] sm:text-[36px] leading-[1.15] max-w-xl">
                If the AI doesn&rsquo;t name you, you don&rsquo;t exist to that buyer.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-5 space-y-4 text-[17px] leading-[1.6] text-slate-body max-w-xl">
                <p>
                  Buyers ask one question, read three names, and pick one. There is no second page of results. If you&rsquo;re not in the answer, you&rsquo;re not in the consideration set.
                </p>
                <p>SEO got you on page one. That&rsquo;s no longer where the decision happens.</p>
              </div>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Review depth", "Third-party citations", "Forum mentions", "Schema signals"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-slate-line px-3 py-1 text-[12.5px] text-slate-body">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Scorecard />
          </Reveal>
        </div>
      </section>

      {/* What we do */}
      <section className="border-b border-slate-line">
        <div className="mx-auto max-w-container px-5 sm:px-8 py-20 sm:py-24">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-violet mb-4">What we do</p>
              <h2 className="text-navy font-semibold tracking-tight text-[28px] sm:text-[36px] leading-[1.15]">
                A four-step framework, run for your market.
              </h2>
              <p className="mt-5 text-[17px] leading-[1.6] text-slate-body">
                Every engagement follows the same path. Evidence first, then a plan, then the work, then proof it&rsquo;s moving.
              </p>
            </div>
          </Reveal>

          <Stagger className="mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Measure", icon: Search, d: "We run the exact prompts your prospects use across all four major AI platforms and score how often you&rsquo;re named vs. competitors." },
              { n: "02", t: "Diagnose", icon: Stethoscope, d: "We trace exactly why AI skips you — review gaps, missing third-party mentions, weak citations — with evidence pulled from live AI responses." },
              { n: "03", t: "Fix", icon: Wrench, d: "A prioritized plan covering the citations, content, and review signals that actually move AI recommendations. Not generic SEO advice." },
              { n: "04", t: "Monitor", icon: LineChart, d: "Ongoing tracking across ChatGPT, Gemini, Claude, and Perplexity so you see exactly when and where your visibility improves." },
            ].map(({ n, t, icon: Icon, d }) => (
              <StaggerItem key={n} as="article" className="group rounded-xl border border-slate-line bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-card hover:border-violet/30">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-surface text-violet transition-colors duration-200 group-hover:bg-violet group-hover:text-white">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-mono text-slate-muted tracking-wider">{n}</span>
                </div>
                <h3 className="text-navy font-semibold text-[17px] mb-2">{t}</h3>
                <p className="text-[14.5px] leading-[1.6] text-slate-body" dangerouslySetInnerHTML={{ __html: d }} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface border-b border-slate-line">
        <div className="mx-auto max-w-container px-5 sm:px-8 py-20 sm:py-24">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-violet mb-4">Services</p>
            <h2 className="text-navy font-semibold tracking-tight text-[28px] sm:text-[36px] leading-[1.15]">
              Start with the audit. Scale only if it works.
            </h2>
            <p className="mt-5 text-[17px] leading-[1.6] text-slate-body">
              You&rsquo;re not paying for a bloated retainer before you see results. The audit tells you whether AI visibility is a real problem in your market — and whether we can actually fix it.
            </p>
            </div>
          </Reveal>

          <Stagger className="mt-12 grid gap-5 lg:grid-cols-3">
            <PricingCard
              featured
              name="AI Visibility Audit"
              price="$500–$1,500"
              cadence="one-time"
              tagline="The entry point. Most engagements start here."
              bullets={[
                "30+ prompt tests across ChatGPT, Gemini, Claude, Perplexity",
                "Competitive scorecard vs. your real competitors",
                "Root-cause diagnosis with screenshots and transcripts",
                "Prioritized 90-day action plan",
              ]}
              cta={{ label: "Start with an audit", href: "/audit" }}
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
              price="$1,500–$3,000"
              cadence="per month"
              tagline="Monthly work and reporting once visibility is moving."
              bullets={[
                "Monthly monitoring across all four platforms",
                "Continued content and citation building",
                "Visibility report showing movement over time",
              ]}
              cta={{ label: "Talk about a retainer", href: "/contact" }}
            />
          </Stagger>
        </div>
      </section>

      {/* SEO vs GEO */}
      <section className="bg-surface border-b border-slate-line">
        <div className="mx-auto max-w-container px-5 sm:px-8 py-20 sm:py-24">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-violet mb-4">SEO vs GEO</p>
              <h2 className="text-navy font-semibold tracking-tight text-[28px] sm:text-[36px] leading-[1.15]">
                Different surface. Different signals. Different playbook.
              </h2>
              <p className="mt-5 text-[17px] leading-[1.6] text-slate-body">
                SEO got you on page one of Google. Generative Engine Optimization gets you named in the answer itself — where the comparison shopping has already ended.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-slate-line bg-white shadow-card">
              <div className="grid grid-cols-3 border-b border-slate-line">
                <div className="px-5 sm:px-7 py-4 text-[12px] font-mono uppercase tracking-[0.16em] text-slate-muted">
                  Dimension
                </div>
                <div className="px-5 sm:px-7 py-4 text-[12px] font-mono uppercase tracking-[0.16em] text-slate-muted border-l border-slate-line">
                  Traditional SEO
                </div>
                <div className="px-5 sm:px-7 py-4 text-[12px] font-mono uppercase tracking-[0.16em] text-violet border-l border-slate-line bg-violet/[0.04]">
                  Generative Engine Optimization
                </div>
              </div>
              {[
                ["Output", "Ranked list of links", "A short list of named businesses"],
                ["Win condition", "Top 3 organic positions", "Cited inside the answer"],
                ["Primary signals", "Backlinks, on-page content, technical SEO", "Third-party mentions, review depth, forum signal, schema"],
                ["Measurement", "Rank tracking, impressions, CTR", "Mention rate across prompts and platforms"],
                ["Failure mode", "Page two", "Not named at all"],
              ].map(([dim, seo, geo], i, arr) => (
                <div
                  key={dim as string}
                  className={`grid grid-cols-3 ${i < arr.length - 1 ? "border-b border-slate-line" : ""}`}
                >
                  <div className="px-5 sm:px-7 py-4 text-[14.5px] text-navy font-medium">{dim}</div>
                  <div className="px-5 sm:px-7 py-4 text-[14px] text-slate-body border-l border-slate-line flex items-start gap-2">
                    <X className="h-4 w-4 mt-0.5 shrink-0 text-slate-muted/60" aria-hidden="true" />
                    <span>{seo}</span>
                  </div>
                  <div className="px-5 sm:px-7 py-4 text-[14px] text-slate-body border-l border-slate-line bg-violet/[0.04] flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5 shrink-0 text-violet" aria-hidden="true" />
                    <span>{geo}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Case study spotlight */}
      <section className="border-b border-slate-line">
        <div className="mx-auto max-w-container px-5 sm:px-8 py-20 sm:py-24">
          <div className="grid lg:grid-cols-[1fr_minmax(0,420px)] gap-12 lg:gap-16 items-start">
            <div>
              <Reveal>
                <p className="text-sm font-medium text-violet mb-4">Field study</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-navy font-semibold tracking-tight text-[28px] sm:text-[36px] leading-[1.15] max-w-2xl">
                  Boulder personal injury — three firms own every AI recommendation.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-5 text-[17px] leading-[1.6] text-slate-body max-w-2xl">
                  We ran 30 buyer-intent prompts across ChatGPT, Gemini, Claude, and Perplexity for a competitive set of 8 firms. Three names — Tenge, Jeffress, Sloat Nicholson — surfaced in nearly every answer. Five well-established competitors appeared in zero. We traced the gap to review volume, third-party mentions, and a single Reddit thread quietly shaping ChatGPT&rsquo;s answers for the entire market.
                </p>
              </Reveal>
              <Stagger className="mt-9 grid sm:grid-cols-3 gap-4">
                {[
                  { v: "30", label: "prompts", sub: "across 4 platforms" },
                  { v: "3 / 8", label: "firms named", sub: "in 90%+ of answers" },
                  { v: "1", label: "Reddit thread", sub: "shaping the market" },
                ].map((s) => (
                  <StaggerItem key={s.label} className="rounded-xl border border-slate-line bg-white p-5">
                    <div className="text-navy font-semibold tracking-tight text-[28px] leading-none tabular-nums">{s.v}</div>
                    <p className="mt-2 text-[13.5px] text-navy font-medium">{s.label}</p>
                    <p className="text-[12.5px] text-slate-muted">{s.sub}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <Reveal delay={0.15}>
              <figure className="rounded-2xl border border-slate-line bg-white p-6 sm:p-7 shadow-card">
                <Quote className="h-5 w-5 text-violet" aria-hidden="true" />
                <blockquote className="mt-4 text-[16px] leading-[1.6] text-navy">
                  &ldquo;Based on local reputation and case results, three firms come up most often: <span className="text-violet font-medium">Tenge Law Firm</span>, <span className="text-violet font-medium">Jeffress Law</span>, and <span className="text-violet font-medium">Sloat Nicholson</span>.&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-2 text-[12.5px] text-slate-muted">
                  <Sparkles className="h-3.5 w-3.5 text-violet" aria-hidden="true" />
                  ChatGPT · prompt: &ldquo;best personal injury lawyers in Boulder&rdquo;
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Sight */}
      <section className="bg-surface border-b border-slate-line">
        <div className="mx-auto max-w-container px-5 sm:px-8 py-20 sm:py-24">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-violet mb-4">Why Sight</p>
              <h2 className="text-navy font-semibold tracking-tight text-[28px] sm:text-[36px] leading-[1.15]">
                Built for generative search. Not bolted onto legacy SEO.
              </h2>
            </div>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Sparkles, t: "Purpose-built", d: "We were built for generative search from day one — not an SEO shop tacking on a new service line." },
              { icon: MessageSquare, t: "Local-first", d: "We start in Boulder because local markets are where the visibility gaps are widest and the most fixable." },
              { icon: ShieldCheck, t: "Evidence-based", d: "Every recommendation is backed by screenshots and transcripts of actual AI responses — not theory." },
              { icon: Zap, t: "Low-risk entry", d: "Start with an audit. Scale to a sprint or retainer only if the data proves it&rsquo;s worth it." },
            ].map(({ icon: Icon, t, d }) => (
              <StaggerItem key={t} as="article" className="rounded-xl border border-slate-line bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-card hover:border-violet/30">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-violet/10 text-violet mb-4">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="text-navy font-semibold text-[17px] mb-2">{t}</h3>
                <p className="text-[14.5px] leading-[1.6] text-slate-body" dangerouslySetInnerHTML={{ __html: d }} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-slate-line">
        <div className="mx-auto max-w-container px-5 sm:px-8 py-20 sm:py-24">
          <div className="grid lg:grid-cols-[minmax(0,360px)_1fr] gap-10 lg:gap-16 items-start">
            <Reveal>
              <div>
                <p className="text-sm font-medium text-violet mb-4">FAQ</p>
                <h2 className="text-navy font-semibold tracking-tight text-[28px] sm:text-[36px] leading-[1.15]">
                  Questions we get on every first call.
                </h2>
                <p className="mt-5 text-[15.5px] leading-[1.6] text-slate-body">
                  Still unsure? <Link className="text-violet hover:underline" href="/contact">Send us a note</Link> — we reply same day.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <FAQ />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="mx-auto max-w-container px-5 sm:px-8 py-20 sm:py-28">
          <Reveal className="relative overflow-hidden rounded-2xl bg-navy text-white px-7 sm:px-12 py-12 sm:py-16">
            <div aria-hidden="true" className="pointer-events-none absolute -top-40 -right-32 h-[420px] w-[420px] rounded-full bg-violet/30 blur-3xl" />
            <h2 className="font-semibold tracking-tight text-[28px] sm:text-[36px] leading-[1.15] max-w-2xl">
              See how AI describes your business today.
            </h2>
            <p className="mt-4 text-[17px] leading-[1.6] text-white/75 max-w-xl">
              A 20-minute audit preview is free. We&rsquo;ll show you the prompts, the answers, and where you stand.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/audit"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-violet px-5 text-[15px] font-semibold text-white hover:bg-violet-600 transition-colors duration-200"
              >
                Request your audit
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-md border border-white/20 px-5 text-[15px] font-medium text-white hover:bg-white/5 transition-colors duration-200"
              >
                Contact us
              </Link>
            </div>
          </Reveal>
        </div>
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
    <StaggerItem
      as="article"
      className={`rounded-xl border bg-white p-6 sm:p-7 flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-card ${
        featured ? "border-violet/40 shadow-card ring-1 ring-violet/10 hover:ring-violet/20" : "border-slate-line hover:border-violet/30"
      }`}
    >
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-navy font-semibold text-[17px]">{name}</h3>
        {featured && (
          <span className="text-[11px] font-semibold uppercase tracking-wider text-violet bg-violet/10 px-2 py-0.5 rounded">
            Start here
          </span>
        )}
      </div>
      <p className="text-[14px] text-slate-muted mb-5">{tagline}</p>
      <div className="mb-5">
        <span className="text-navy font-semibold text-[26px] tracking-tight tabular-nums">{price}</span>
        <span className="text-slate-muted text-sm ml-2">{cadence}</span>
      </div>
      <ul className="space-y-2.5 mb-7">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2.5 text-[14.5px] leading-[1.5] text-slate-body">
            <Check className="h-4 w-4 mt-0.5 shrink-0 text-violet" aria-hidden="true" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <Link
        href={cta.href}
        className={`mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-semibold transition-colors duration-200 ${
          featured
            ? "bg-violet text-white hover:bg-violet-600"
            : "border border-slate-line text-navy hover:border-navy/30"
        }`}
      >
        {cta.label}
      </Link>
    </StaggerItem>
  );
}
