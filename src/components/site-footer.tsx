import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import { navLinks, site } from "@/lib/site";

const mapsSocial = [
  {
    network: "google" as const,
    href: site.mapsUrl,
    label: "Google Maps directions",
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink text-white">
      <div className="site-wrap py-12 md:py-16">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt=""
            width={513}
            height={687}
            className="h-14 w-auto rounded-sm"
          />
          <p className="font-display text-2xl tracking-[0.04em] uppercase">
            Acco Electric
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-8 lg:mt-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              Free estimate
            </p>
            <p className="mt-3 font-display text-[clamp(1.85rem,3vw,2.35rem)] leading-[1.15] tracking-tight text-white">
              Ready for licensed electrical work done right
            </p>
            <p className="mt-3 text-base leading-relaxed text-white/70">
              Call or write from San Anselmo. Serving {site.serviceArea} since{" "}
              {site.established}.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0 lg:pb-1">
            <Button
              nativeButton={false}
              render={<Link href="/contact" />}
              size="lg"
              className="h-12 w-full rounded-md bg-amber px-6 text-base font-semibold text-ink hover:bg-amber/90 sm:w-auto"
            >
              Get a free quote
            </Button>
            <Button
              nativeButton={false}
              render={<a href={site.phoneHref} />}
              variant="outline"
              size="lg"
              className="h-12 w-full rounded-md border-white/30 bg-transparent px-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              Call {site.phone}
            </Button>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6 text-sm text-white/70 md:mt-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
            <address className="not-italic leading-relaxed">
              {site.address.full}
            </address>
            <a
              href={site.phoneHref}
              className="font-medium text-white hover:text-white/80"
            >
              {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="text-white/75 hover:text-white"
            >
              {site.email}
            </a>
            <span>{site.hours}</span>
          </div>

          <SocialLinks items={mapsSocial} className="text-white/80" />

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-white/45">
          Copyright {new Date().getFullYear()} Acco Electric - All Rights
          Reserved. Fully licensed and insured.
        </p>
      </div>
    </footer>
  );
}
