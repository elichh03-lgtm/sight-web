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
      <label htmlFor={id} className="block text-[13px] font-medium text-ink mb-1.5">
        {label} {required && <span aria-hidden="true" className="text-oxblood">*</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={hintId} className="mt-1.5 text-[12.5px] text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p
          id={errId}
          role="alert"
          aria-live="polite"
          className="mt-1.5 text-[13px] font-medium text-error"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export const inputBase =
  "block w-full h-11 rounded-md border border-line bg-canvas px-3.5 text-[15px] text-ink placeholder:text-muted transition-[border-color] duration-200 hover:border-lineStrong focus:border-oxblood focus-visible:outline-none focus-visible:ring-0";

export const textareaBase =
  "block w-full min-h-[120px] rounded-md border border-line bg-canvas px-3.5 py-2.5 text-[15px] text-ink placeholder:text-muted transition-[border-color] duration-200 hover:border-lineStrong focus:border-oxblood focus-visible:outline-none focus-visible:ring-0";

export const inputInvalid = "border-error focus:border-error";
