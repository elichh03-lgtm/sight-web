"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, User } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function MockChat() {
  const reduce = useReducedMotion();
  return (
    <div className="rounded-xl border border-slate-line bg-white shadow-card overflow-hidden">
      <div className="flex items-center gap-2 border-b border-slate-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" aria-hidden="true" />
        <span className="ml-3 text-xs text-slate-muted">AI assistant</span>
      </div>
      <div className="p-5 sm:p-6 space-y-5">
        <motion.div
          className="flex gap-3"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease }}
        >
          <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface text-navy">
            <User className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <p className="text-[15px] text-navy">
            Who are the best personal injury lawyers in Boulder?
          </p>
        </motion.div>

        <motion.div
          className="flex gap-3"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease, delay: reduce ? 0 : 0.5 }}
        >
          <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet/10 text-violet">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <div className="text-[15px] text-slate-body space-y-2.5">
            <p>Based on local reputation and client reviews, three firms come up most often:</p>
            <ol className="space-y-1.5 pl-5 list-decimal marker:text-slate-muted">
              {[
                ["Tenge Law Firm", "known for case results and client communication."],
                ["Jeffress Law", "strong reviews on responsiveness."],
                ["Sloat Nicholson", "frequently recommended on local forums."],
              ].map(([name, rest], i) => (
                <motion.li
                  key={name}
                  initial={reduce ? false : { opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.35, ease, delay: reduce ? 0 : 0.8 + i * 0.18 }}
                >
                  <span className="text-navy font-medium">{name}</span> — {rest}
                </motion.li>
              ))}
            </ol>
            <p className="text-slate-muted">Would you like contact details for any of them?</p>
          </div>
        </motion.div>

        <motion.div
          className="rounded-lg border border-dashed border-violet/40 bg-violet/5 px-4 py-3 text-[13px] text-navy"
          initial={reduce ? false : { opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease, delay: reduce ? 0 : 1.6 }}
        >
          Your firm doesn&rsquo;t appear in this answer. Neither do six of your direct competitors.
        </motion.div>
      </div>
    </div>
  );
}
