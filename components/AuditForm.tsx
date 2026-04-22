"use client";
import { FormEvent, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Field, inputBase, textareaBase } from "./Field";

type FieldErrors = Partial<
  Record<"name" | "business" | "website" | "email" | "notes" | "_", string>
>;

export function AuditForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [requestId, setRequestId] = useState<string | null>(null);
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
      const res = await fetch("/api/lead", {
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
      setRequestId(json.id || null);
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
              Request received.
            </h2>
            <p className="mt-3 text-[15px] leading-[1.6] text-muted">
              We&rsquo;ve got it. You&rsquo;ll hear back within one business day.
            </p>
            {requestId && (
              <p className="mt-4 text-[11px] font-mono uppercase tracking-[0.08em] text-muted">
                Request ID: {requestId}
              </p>
            )}
            <a
              href="/"
              className="mt-6 inline-block text-[14px] text-ink hover:text-oxblood underline underline-offset-4"
            >
              Back to home
            </a>
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
            <Field id="name" label="Your name" required error={errors.name}>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                className={inputBase}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-err" : undefined}
              />
            </Field>
            <Field id="business" label="Business name" required error={errors.business}>
              <input
                id="business"
                name="business"
                required
                autoComplete="organization"
                className={inputBase}
                aria-invalid={!!errors.business}
              />
            </Field>
            <Field
              id="website"
              label="Website"
              required
              hint="We'll add https:// for you if you forget it."
              error={errors.website}
            >
              <input
                id="website"
                name="website"
                required
                inputMode="url"
                placeholder="yourbusiness.com"
                className={inputBase}
                aria-invalid={!!errors.website}
              />
            </Field>
            <Field id="email" label="Email" required error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputBase}
                aria-invalid={!!errors.email}
              />
            </Field>
            <Field
              id="notes"
              label="Anything we should know?"
              hint="Optional. Top competitors, target market, anything specific."
              error={errors.notes}
            >
              <textarea
                id="notes"
                name="notes"
                className={textareaBase}
                aria-invalid={!!errors.notes}
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
                  Request preview
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </button>
            <p className="text-[12.5px] text-muted">
              No spam. We use this only to scope your audit and reach out.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
