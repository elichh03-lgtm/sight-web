"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";

const ITEMS: Array<{ q: string; a: string }> = [
  {
    q: "Isn't this just SEO?",
    a: "No. SEO optimizes for ranking on a results page. AI assistants don't show a results page — they synthesize an answer and name a few businesses. The signals that get you named (third-party citations, review depth, conversational mentions on forums) overlap with SEO but are scored and weighted differently. We measure and fix for the answer, not the ranking.",
  },
  {
    q: "Which AI platforms do you measure?",
    a: "ChatGPT, Gemini, Claude, and Perplexity — the four assistants where buyer-intent prompts are now landing. Each one synthesizes from different sources and weighs them differently, so we test all four every audit.",
  },
  {
    q: "How long until I see results?",
    a: "Some changes (review-prompt sequences, citation cleanup) move visibility within 2–4 weeks as platforms re-crawl. Structural changes — new third-party content, Reddit signal — take 6–12 weeks. The audit tells you which levers will move fastest in your specific market.",
  },
  {
    q: "Why start with Boulder?",
    a: "Local markets have the widest visibility gaps and the most fixable signals. National brands are already saturated; in Boulder, three or four citations can flip a category. We expand once playbooks are proven.",
  },
  {
    q: "Do you guarantee you can get me named?",
    a: "No, and you should be skeptical of anyone who does. We guarantee evidence — you'll see exactly how AI describes your market today and exactly which signals are driving the answers. If the audit shows your market isn't fixable yet, we tell you and don't take the engagement.",
  },
  {
    q: "Who owns the work?",
    a: "You do. Citations, content, review-collection systems — all yours, on your domains and accounts. We don't lock you into our infrastructure.",
  },
];

export function FAQ() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-line border-y border-line">
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q} className={isOpen ? "bg-surface" : ""}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-start gap-4 py-6 px-1 text-left"
            >
              <span className="flex-1 text-[17px] sm:text-[18px] font-medium text-ink">
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: reduce ? 0 : 0.2, ease: "easeOut" }}
                className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-ink"
              >
                <Plus className="h-4 w-4" aria-hidden="true" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-12 px-1 text-[15.5px] leading-[1.65] text-muted max-w-3xl">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
