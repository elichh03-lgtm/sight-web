import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-line mt-24">
      <div className="mx-auto max-w-container px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-slate-muted">
        <p>Sight · Boulder, Colorado · Founded 2026</p>
        <div className="flex items-center gap-5">
          <Link href="/audit" className="hover:text-navy transition-colors duration-200">Audit</Link>
          <Link href="/contact" className="hover:text-navy transition-colors duration-200">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
