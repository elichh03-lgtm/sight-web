"use client";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const PLATFORMS = ["ChatGPT", "Gemini", "Claude", "Perplexity"];
const ROWS: Array<{ name: string; results: Array<0 | 1>; rate: number }> = [
  { name: "Tenge Law Firm", results: [1, 1, 1, 1], rate: 92 },
  { name: "Jeffress Law", results: [1, 1, 0, 1], rate: 78 },
  { name: "Sloat Nicholson", results: [1, 0, 1, 1], rate: 71 },
  { name: "Your firm", results: [0, 0, 0, 0], rate: 0 },
];

export function Scorecard() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-line bg-card overflow-hidden"
    >
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-oxblood" />
          <span className="text-[13px] font-medium text-ink">Visibility scorecard</span>
        </div>
        <span className="text-[11px] font-mono text-muted tracking-[0.08em] uppercase">
          Boulder · Personal Injury
        </span>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-[1.4fr_repeat(4,minmax(0,1fr))_auto] gap-x-3 gap-y-3 items-center text-[12.5px]">
          <span className="text-muted">Firm</span>
          {PLATFORMS.map((p) => (
            <span key={p} className="text-center text-muted">
              {p}
            </span>
          ))}
          <span className="text-right text-muted pl-2">Score</span>

          {ROWS.map((row, ri) => (
            <RowCells
              key={row.name}
              row={row}
              ri={ri}
              inView={inView}
              reduce={!!reduce}
            />
          ))}
        </div>
      </div>
      <div className="border-t border-line bg-surface px-5 py-3 flex items-center justify-between text-[12px]">
        <span className="text-muted">30 prompts · 4 platforms · pulled live</span>
        <span className="text-oxblood font-medium">Top 3 own 100% of recommendations</span>
      </div>
    </div>
  );
}

function RowCells({
  row,
  ri,
  inView,
  reduce,
}: {
  row: { name: string; results: Array<0 | 1>; rate: number };
  ri: number;
  inView: boolean;
  reduce: boolean;
}) {
  const isYou = row.name === "Your firm";
  const baseDelay = reduce ? 0 : 0.15 + ri * 0.12;
  return (
    <>
      <span className={`truncate font-medium ${isYou ? "text-oxblood" : "text-ink"}`}>
        {row.name}
      </span>
      {row.results.map((v, i) => (
        <motion.span
          key={i}
          initial={reduce ? false : { opacity: 0, scale: 0.7 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.25, delay: baseDelay + i * 0.06, ease: "easeOut" }}
          className="flex justify-center"
        >
          {v ? (
            <Check className="h-4 w-4 text-oxblood" aria-label="appears" />
          ) : (
            <X className="h-4 w-4 text-muted" aria-label="absent" />
          )}
        </motion.span>
      ))}
      <div className="flex items-center justify-end gap-2 pl-2 min-w-[88px]">
        <div className="h-1.5 w-14 rounded-full bg-surface overflow-hidden">
          <motion.div
            initial={reduce ? false : { width: 0 }}
            animate={inView ? { width: `${row.rate}%` } : {}}
            transition={{ duration: 0.7, delay: baseDelay + 0.2, ease: "easeOut" }}
            className={`h-full rounded-full ${isYou ? "bg-muted" : "bg-oxblood"}`}
          />
        </div>
        <span
          className={`text-[12.5px] font-mono tabular-nums w-7 text-right ${
            isYou ? "text-muted" : "text-ink"
          }`}
        >
          {row.rate}
        </span>
      </div>
    </>
  );
}
