"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useInView } from "framer-motion";
import { Sparkles, User } from "lucide-react";

const QUESTION = "Who are the best personal injury lawyers in Boulder?";
const FIRMS: Array<[string, string]> = [
  ["Tenge Law Firm", "known for case results and client communication."],
  ["Jeffress Law", "strong reviews on responsiveness."],
  ["Sloat Nicholson", "frequently recommended on local forums."],
];

type Phase = "idle" | "typing" | "thinking" | "answering" | "callout";

export function HeroChat() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [phase, setPhase] = useState<Phase>("idle");
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setTyped(QUESTION);
      setPhase("callout");
      return;
    }
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const run = async () => {
      setPhase("typing");
      for (let i = 1; i <= QUESTION.length; i++) {
        if (cancelled) return;
        await new Promise((r) => timeouts.push(setTimeout(r, 28)));
        setTyped(QUESTION.slice(0, i));
      }
      await new Promise((r) => timeouts.push(setTimeout(r, 280)));
      if (cancelled) return;
      setPhase("thinking");
      await new Promise((r) => timeouts.push(setTimeout(r, 900)));
      if (cancelled) return;
      setPhase("answering");
      await new Promise((r) => timeouts.push(setTimeout(r, 400 + FIRMS.length * 280)));
      if (cancelled) return;
      setPhase("callout");
    };
    run();
    return () => {
      cancelled = true;
      for (const t of timeouts) clearTimeout(t);
    };
  }, [inView, reduce]);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-slate-line bg-white shadow-card overflow-hidden"
      aria-live="polite"
    >
      <div className="flex items-center gap-2 border-b border-slate-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" aria-hidden="true" />
        <span className="ml-3 text-xs text-slate-muted">AI assistant</span>
      </div>

      <div className="p-5 sm:p-6 space-y-5">
        <div className="flex gap-3">
          <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface text-navy">
            <User className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <p className="text-[15px] text-navy min-h-[1.5em]">
            {typed}
            {phase === "typing" && (
              <span aria-hidden="true" className="ml-0.5 inline-block w-[2px] h-[1.05em] -mb-[0.15em] bg-[#F1F3F8] align-baseline animate-pulse" />
            )}
          </p>
        </div>

        <AnimatePresence>
          {(phase === "thinking" || phase === "answering" || phase === "callout") && (
            <motion.div
              key="reply"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex gap-3"
            >
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet/10 text-violet">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <div className="text-[15px] text-slate-body space-y-2.5 min-w-0 flex-1">
                {phase === "thinking" ? (
                  <ThinkingDots />
                ) : (
                  <>
                    <motion.p
                      initial={reduce ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      Based on local reputation and client reviews, three firms come up most often:
                    </motion.p>
                    <ol className="space-y-1.5 pl-5 list-decimal marker:text-slate-muted">
                      {FIRMS.map(([name, rest], i) => (
                        <motion.li
                          key={name}
                          initial={reduce ? false : { opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, ease: "easeOut", delay: reduce ? 0 : 0.25 + i * 0.28 }}
                        >
                          <span className="text-navy font-medium">{name}</span> — {rest}
                        </motion.li>
                      ))}
                    </ol>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {phase === "callout" && (
            <motion.div
              key="callout"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-lg border border-dashed border-violet/40 bg-violet/5 px-4 py-3 text-[13px] text-navy"
            >
              Your firm doesn&rsquo;t appear in this answer. Neither do six of your direct competitors.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ThinkingDots() {
  const reduce = useReducedMotion();
  if (reduce) return <span className="text-slate-muted">Thinking…</span>;
  return (
    <span className="inline-flex items-center gap-1 py-1.5" aria-label="Thinking">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-slate-muted/60"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
        />
      ))}
    </span>
  );
}
