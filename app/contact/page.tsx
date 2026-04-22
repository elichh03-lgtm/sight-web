import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Clock, MapPin, Mail } from "lucide-react";

export const metadata = {
  title: "Contact — Sight",
  description:
    "Get in touch with Sight, the Boulder-based Generative Engine Optimization agency.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-container px-6 lg:px-10 pt-24 lg:pt-32 pb-28">
      <div className="grid lg:grid-cols-[1fr_minmax(0,480px)] gap-12 lg:gap-20 items-start">
        <div>
          <Reveal kind="small">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">
              <span className="h-1 w-1 rounded-full bg-oxblood" />
              Contact
            </span>
          </Reveal>
          <Reveal kind="hero">
            <h1 className="mt-8 font-display font-normal text-ink tracking-[-0.025em] leading-[1.05] text-[40px] sm:text-[56px] lg:text-[72px] max-w-[18ch]">
              Talk to us <span className="italic-accent">about</span> your market.
            </h1>
          </Reveal>
          <Reveal kind="default">
            <p className="mt-8 text-[18px] leading-[1.6] text-muted max-w-[56ch]">
              Send us a note. We&rsquo;re a small team in Boulder and read every message —
              expect a reply within one business day.
            </p>
          </Reveal>
          <Reveal kind="default">
            <dl className="mt-10 space-y-5 text-[15px] text-ink">
              <div className="flex gap-3">
                <Clock className="h-4 w-4 mt-1 shrink-0 text-oxblood" aria-hidden="true" />
                <div>
                  <dt className="font-medium">Response time</dt>
                  <dd className="text-muted">One business day, Monday through Friday.</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="h-4 w-4 mt-1 shrink-0 text-oxblood" aria-hidden="true" />
                <div>
                  <dt className="font-medium">Where</dt>
                  <dd className="text-muted">Boulder, Colorado</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="h-4 w-4 mt-1 shrink-0 text-oxblood" aria-hidden="true" />
                <div>
                  <dt className="font-medium">Email</dt>
                  <dd>
                    <a
                      href="mailto:eli@sight.agency"
                      className="text-ink hover:text-oxblood underline underline-offset-4"
                    >
                      eli@sight.agency
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="lg:sticky lg:top-24">
          <Reveal kind="default">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
