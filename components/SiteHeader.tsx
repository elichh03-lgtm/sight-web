"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Mark } from "./Mark";

const NAV_LINKS = [
  { href: "/method", label: "Method" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#field-study", label: "Field study" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,backdrop-filter] duration-500 ${
        scrolled ? "bg-canvas/70 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-container px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Sight home">
          <Mark size={28} variant="primary" />
          <span className="text-[20px] tracking-[-0.01em] font-medium text-ink">Sight</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[14px] text-ink hover:text-oxblood transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-md bg-card border border-line px-4 text-[14px] font-medium text-ink hover:border-lineStrong transition-[transform,border-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px]"
          >
            Contact
          </Link>
          <Link
            href="/audit"
            className="inline-flex h-10 items-center rounded-md bg-oxblood px-4 text-[14px] font-medium text-white hover:bg-oxblood-600 transition-[transform,background-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px]"
          >
            Start the audit
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-ink"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-canvas px-6 py-8 overflow-y-auto">
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="h-14 flex items-center text-[18px] text-ink border-b border-line"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="h-14 flex items-center text-[18px] text-ink border-b border-line"
            >
              Contact
            </Link>
            <Link
              href="/audit"
              onClick={() => setMenuOpen(false)}
              className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-oxblood px-5 text-[15px] font-medium text-white"
            >
              Start the audit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
