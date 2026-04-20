import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Clock, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact — Sight",
  description: "Get in touch with Sight, the Boulder-based Generative Engine Optimization agency.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-[-120px] h-[380px] w-[380px] rounded-full bg-violet/15 blur-3xl" />
      </div>
      <div className="mx-auto max-w-container px-5 sm:px-8 pt-14 pb-24 sm:pt-20 grid lg:grid-cols-[1fr_minmax(0,460px)] gap-10 lg:gap-16 items-start">
        <div>
          <Reveal>
            <p className="text-sm font-medium text-violet mb-4">Contact</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-navy font-semibold tracking-tight text-[32px] leading-[1.1] sm:text-[44px] sm:leading-[1.05]">
              Talk to us about your market.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[17px] leading-[1.6] text-slate-body max-w-xl">
              Send us a note. We&rsquo;re a small team in Boulder and read every message — expect a reply within one business day.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <dl className="mt-8 space-y-4 text-[15px] text-slate-body">
              <div className="flex gap-3">
                <Clock className="h-4 w-4 mt-1 shrink-0 text-violet" aria-hidden="true" />
                <div>
                  <dt className="text-navy font-medium">Response time</dt>
                  <dd>One business day, Monday through Friday.</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="h-4 w-4 mt-1 shrink-0 text-violet" aria-hidden="true" />
                <div>
                  <dt className="text-navy font-medium">Where</dt>
                  <dd>Boulder, Colorado</dd>
                </div>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:sticky lg:top-24">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
