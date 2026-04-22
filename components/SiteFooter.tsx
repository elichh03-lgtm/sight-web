import Link from "next/link";
import { Mark } from "./Mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-line mt-28">
      <div className="mx-auto max-w-container px-6 lg:px-10 py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <Link href="/" className="flex items-center gap-2.5" aria-label="Sight home">
            <Mark size={28} variant="primary" />
            <span className="text-[20px] tracking-[-0.01em] font-medium text-ink">Sight</span>
          </Link>
          <p className="mt-4 text-[14px] leading-[1.6] text-muted max-w-[28ch]">
            Generative Engine Optimization. Boulder, Colorado.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink mb-4">
            Sitemap
          </p>
          <ul className="space-y-2.5 text-[14px]">
            <li>
              <Link href="/method" className="text-ink hover:text-oxblood transition-colors duration-200">
                Method
              </Link>
            </li>
            <li>
              <Link href="/audit" className="text-ink hover:text-oxblood transition-colors duration-200">
                Audit
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-ink hover:text-oxblood transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink mb-4">
            Contact
          </p>
          <a
            href="mailto:eli@sight.agency"
            className="text-[14px] text-ink hover:text-oxblood transition-colors duration-200"
          >
            eli@sight.agency
          </a>
          <p className="mt-2 text-[13px] text-muted">Boulder, Colorado</p>
        </div>
      </div>
    </footer>
  );
}
