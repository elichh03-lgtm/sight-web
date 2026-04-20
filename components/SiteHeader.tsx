import Link from "next/link";
import { Eye } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-line bg-white/80 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-container px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-navy font-semibold tracking-tight">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-violet text-white shadow-[0_0_20px_-4px_rgba(99,91,255,0.6)]">
            <Eye className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="text-[17px]">Sight</span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/contact"
            className="hidden sm:inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-navy hover:text-violet transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            href="/audit"
            className="inline-flex h-9 items-center rounded-md bg-violet px-3.5 text-sm font-semibold text-white hover:bg-violet-600 transition-colors duration-200"
          >
            Get an audit
          </Link>
        </nav>
      </div>
    </header>
  );
}
