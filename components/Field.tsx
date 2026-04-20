"use client";
import { ReactNode } from "react";

export function Field({
  id,
  label,
  hint,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  const errId = `${id}-err`;
  const hintId = hint ? `${id}-hint` : undefined;
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-medium text-navy mb-1.5">
        {label} {required && <span aria-hidden="true" className="text-violet">*</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={hintId} className="mt-1.5 text-[12.5px] text-slate-muted">{hint}</p>
      )}
      {error && (
        <p id={errId} role="alert" className="mt-1.5 text-[12.5px] font-medium text-[#B91C1C]">
          {error}
        </p>
      )}
    </div>
  );
}

export const inputBase =
  "block w-full h-11 rounded-md border border-slate-line bg-white px-3.5 text-[15px] text-navy placeholder:text-slate-muted/70 transition-colors duration-200 hover:border-navy/20 focus:border-violet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/30";

export const textareaBase =
  "block w-full min-h-[120px] rounded-md border border-slate-line bg-white px-3.5 py-2.5 text-[15px] text-navy placeholder:text-slate-muted/70 transition-colors duration-200 hover:border-navy/20 focus:border-violet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/30";
