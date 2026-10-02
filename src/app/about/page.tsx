import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";
import { site } from "@/lib/site";

export const metadata = {
  title: "About",
  description:
    "Meet Acco Electric - licensed and insured electricians in San Anselmo since 2007, led by Nate and Layne.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          kicker="About"
          title="A Marin electrical shop built on honesty"
          lede={`Serving ${site.serviceArea} since ${site.established}.`}
          image={{
            // Landmark: Nate's face
            src: "/images/about-nate.jpg",
            alt: "Nate on site with Acco Electric",
            width: 2400,
            height: 1947,
            focalX: 0.52,
            focalY: 0.28,
            fillFrame: true,
            bleed: true,
            subject: { l: 0.2, t: 0.05, r: 0.95, b: 0.72 },
          }}
          actions={
            <Button
              nativeButton={false}
              render={<Link href="/contact" />}
              size="lg"
              className="h-11 rounded-md bg-signal px-5 font-semibold text-white hover:bg-signal/90"
            >
              Request an estimate
            </Button>
          }
        />

        <section className="site-wrap py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:gap-14 md:items-start">
            <div>
              <h2 className="font-display text-[clamp(1.6rem,3vw,2.1rem)] tracking-tight text-ink">
                Quality workmanship, every project
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                At Acco Electric, we pride ourselves on providing top-notch
                electrical services. We are fully licensed and insured, ensuring
                quality workmanship for every project.
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                Customers know {site.owners} for clear communication, fair
                estimates, and crews that show up when they say they will -
                whether the job is a panel upgrade, an EV charger, a remodel, or
                custom audio and networking under Acco Sound.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md">
              <Image
                src="/images/hero-crew.jpg"
                alt="Acco Electric team in company shirts"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-[center_25%]"
              />
            </div>
          </div>

          <dl className="mt-14 grid gap-8 border-t border-border/70 pt-10 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Established
              </dt>
              <dd className="mt-2 font-display text-3xl text-ink">
                {site.established}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Hours
              </dt>
              <dd className="mt-2 text-base text-foreground/85">{site.hours}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Shop
              </dt>
              <dd className="mt-2 text-base text-foreground/85">
                {site.address.full}
              </dd>
            </div>
          </dl>
        </section>
      </main>
      <SiteFooter />
      <StickyCta />
    </>
  );
}
