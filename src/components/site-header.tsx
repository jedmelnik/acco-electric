"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  variant?: "overlay" | "solid";
};

export function SiteHeader({ variant = "overlay" }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const forceSolid = variant === "solid";
  const solid = forceSolid || scrolled || menuOpen;

  useEffect(() => {
    if (forceSolid) return;
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [forceSolid]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ease-out",
        solid
          ? "border-b border-border/70 bg-[#f2f1ee]/95 shadow-[0_8px_24px_rgba(21,24,30,0.1)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="site-wrap flex items-center justify-between gap-3 py-2.5 md:gap-4 md:py-3">
        <Link
          href="/"
          className="relative flex shrink-0 items-center gap-2.5"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={513}
            height={687}
            className={cn(
              "h-11 w-auto rounded-sm shadow-sm md:h-12",
              !solid && "ring-1 ring-white/20",
            )}
            priority
          />
          <span
            className={cn(
              "font-display text-[1.35rem] leading-none tracking-[0.04em] uppercase md:text-[1.55rem]",
              solid ? "text-ink" : "text-white",
            )}
          >
            Acco Electric
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                solid
                  ? "text-foreground/80 hover:bg-muted hover:text-foreground"
                  : "text-white/85 hover:bg-white/10 hover:text-white",
              )}
            >
              {label}
            </Link>
          ))}
          <Button
            nativeButton={false}
            render={<a href={site.phoneHref} />}
            size="lg"
            className="ml-2 h-10 rounded-md bg-signal px-4 text-sm font-semibold text-white hover:bg-signal/90"
          >
            Call {site.phone}
          </Button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Button
            nativeButton={false}
            render={<a href={site.phoneHref} />}
            size="sm"
            className="h-9 rounded-md bg-signal px-3 text-xs font-semibold text-white hover:bg-signal/90"
          >
            Call
          </Button>
          <button
            type="button"
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-md",
              solid ? "text-ink" : "text-white",
            )}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id={menuId}
          className="border-t border-border/60 bg-[#f2f1ee] lg:hidden"
        >
          <nav className="site-wrap flex flex-col gap-1 py-3" aria-label="Mobile">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <a
              href={site.emailHref}
              className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
              onClick={() => setMenuOpen(false)}
            >
              Email for an estimate
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
