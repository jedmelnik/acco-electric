import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";
import { services, site } from "@/lib/site";

export const metadata = {
  title: "Services",
  description:
    "Residential electrical, panel upgrades, EV chargers, lighting controls, remodel wiring, and audio/networking from Acco Electric in San Anselmo.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          kicker="Services"
          title="Electrical work done clean and on estimate"
          lede="Licensed, insured crews for homes and light commercial jobs across Marin."
          image={{
            // Landmark: lit ceiling / room center
            src: "/images/gallery-great-room-2.jpg",
            alt: "Great room with finished ceiling and accent lighting",
            width: 1400,
            height: 933,
            focalX: 0.55,
            focalY: 0.45,
            fillFrame: true,
            bleed: true,
            subject: { l: 0.15, t: 0.15, r: 0.98, b: 0.85 },
          }}
          actions={
            <Button
              nativeButton={false}
              render={<a href={site.phoneHref} />}
              size="lg"
              className="h-11 rounded-md bg-signal px-5 font-semibold text-white hover:bg-signal/90"
            >
              Call {site.phone}
            </Button>
          }
        />

        <section className="site-wrap py-14 md:py-20">
          <ul className="grid gap-10 md:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug} className="group">
                <div className="relative aspect-[16/10] overflow-hidden rounded-md">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <h2 className="mt-4 font-display text-2xl tracking-tight text-ink">
                  {service.title}
                </h2>
                <p className="mt-2 max-w-md text-base leading-relaxed text-foreground/80">
                  {service.summary}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-14 flex flex-col gap-4 border-t border-border/70 pt-10 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-base text-foreground/80">
              Not sure what you need? Tell us about the problem or the remodel -
              we will walk the job and send a clear estimate.
            </p>
            <Button
              nativeButton={false}
              render={<Link href="/contact" />}
              size="lg"
              className="h-12 rounded-md bg-ink px-6 font-semibold text-white hover:bg-ink/90"
            >
              Get a free quote
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
      <StickyCta />
    </>
  );
}
