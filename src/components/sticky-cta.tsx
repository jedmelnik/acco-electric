"use client";

import Link from "next/link";
import { site } from "@/lib/site";

/** Compact mobile sticky bar - call + estimate without crowding the hero. */
export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-[#f2f1ee]/95 px-4 py-2.5 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={site.phoneHref}
          className="flex h-11 flex-1 items-center justify-center rounded-md bg-signal text-sm font-semibold text-white"
        >
          Call now
        </a>
        <Link
          href="/contact"
          className="flex h-11 flex-1 items-center justify-center rounded-md border border-ink/20 bg-white text-sm font-semibold text-ink"
        >
          Free quote
        </Link>
      </div>
    </div>
  );
}
