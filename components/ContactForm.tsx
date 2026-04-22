"use client";
import { FormEvent, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Field, inputBase, textareaBase } from "./Field";

type FieldErrors = Partial<Record<"name" | "email" | "message" | "_", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    setErrors({});
    setServerError(null);
    setPending(true);
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (res.status === 400 && json.fieldErrors) {
          setErrors(json.fieldErrors as FieldErrors);
          const first = Object.keys(json.fieldErrors)[0];
          if (first) {
            const el = formRef.current?.querySelector<HTMLInputElement>(
              `[name="${first}"]`
            );
            el?.focus();
          }
        } else if (res.status === 429) {
          setServerError("Too many requests — try again in a moment.");
        } else {
          setServerError(json.error || "Something went wrong. Please try again.");
        }
        return;
      }
      setDone(true);
    } catch {
      setServerError("Network error. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="rounded-2xl border border-line bg-card p-6 lg:p-8">
      <AnimatePresence mode="wait" initial={false}>
        {done ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="py-6 text-center"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-oxblood/10 text-oxblood mb-5">
              <Check className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="font-display text-[24px] tracking-[-0.01em] font-medium text-ink">
              Message received.
            </h2>
            <p className="mt-3 text-[15px] leading-[1.6] text-muted">
              We&rsquo;ve got it. You&rsquo;ll hear back within one business day.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-5"
            aria-busy={pending}
          >
            <input
              type="text"
              name="hp"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <Field id="cname" label="Your name" required error={errors.name}>
              <input
                id="cname"
                name="name"
                required
                autoComplete="name"
                className={inputBase}
                aria-invalid={!!errors.name}
              />
            </Field>
            <Field id="cemail" label="Email" required error={errors.email}>
              <input
                id="cemail"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputBase}
                aria-invalid={!!errors.email}
              />
            </Field>
            <Field id="cmessage" label="Message" required error={errors.message}>
              <textarea
                id="cmessage"
                name="message"
                required
                className={textareaBase}
                aria-invalid={!!errors.message}
              />
            </Field>

            {serverError && (
              <p
                role="alert"
                aria-live="polite"
                className="rounded-md border border-error bg-error/10 px-3 py-2 text-[13px] text-error"
              >
                {serverError}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="inline-flex w-full h-11 items-center justify-center gap-2 rounded-md bg-oxblood px-5 text-[15px] font-medium text-white transition-[transform,background-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-oxblood-600 hover:-translate-y-[1px] disabled:opacity-60 disabled:translate-y-0 disabled:cursor-not-allowed"
            >
              {pending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
