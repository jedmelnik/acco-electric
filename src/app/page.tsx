import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";
import { gallery, reviews, services, site } from "@/lib/site";

const homeGallery = gallery.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="flex flex-1 flex-col">
        <PageHero
          size="home"
          kicker={`San Anselmo · Est. ${site.established}`}
          title={site.name}
          lede={site.tagline}
          ledeOnMobile
          image={{
            // Landmark: Nate's face in the red VW window
            src: "/images/hero-vw.jpg",
            alt: "Nate in the Acco Electric red VW Beetle with company logo on the door",
            width: 2400,
            height: 1350,
            focalX: 0.48,
            focalY: 0.42,
          }}
          actions={
            <>
              <Button
                nativeButton={false}
                render={<Link href="/contact" />}
                size="lg"
                className="h-12 rounded-md bg-signal px-6 text-base font-semibold text-white hover:bg-signal/90"
              >
                Get an estimate
              </Button>
              <Button
                nativeButton={false}
                render={<a href={site.phoneHref} />}
                variant="outline"
                size="lg"
                className="h-12 rounded-md border-white/40 bg-white/5 px-6 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
              >
                Call {site.phone}
              </Button>
            </>
          }
        />

        <section className="site-wrap py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Licensed and insured
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.85rem,4vw,2.75rem)] leading-tight tracking-tight text-ink">
                Top-notch electrical work for every project
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
                At Acco Electric, we pride ourselves on providing top-notch
                electrical services. We are fully licensed and insured, ensuring
                quality workmanship for every project - from panel upgrades and
                EV chargers to remodel wiring and smart lighting.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  nativeButton={false}
                  render={<Link href="/about" />}
                  variant="outline"
                  size="lg"
                  className="h-11 rounded-md border-ink/20 bg-card px-5 font-semibold"
                >
                  About the shop
                </Button>
                <Button
                  nativeButton={false}
                  render={<Link href="/services" />}
                  size="lg"
                  className="h-11 rounded-md bg-ink px-5 font-semibold text-white hover:bg-ink/90"
                >
                  View services
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md">
              <Image
                src="/images/hero-crew.jpg"
                alt="Acco Electric crew wearing company shirts"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-[center_30%]"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-border/60 bg-card/60 py-16 md:py-24">
          <div className="site-wrap">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  What we do
                </p>
                <h2 className="mt-3 font-display text-[clamp(1.85rem,4vw,2.5rem)] leading-tight tracking-tight text-ink">
                  Electrical services for Marin homes
                </h2>
              </div>
              <Link
                href="/services"
                className="text-sm font-semibold text-signal hover:underline"
              >
                All services
              </Link>
            </div>

            {/* Mobile: one clear entry; desktop: full grid */}
            <div className="mt-8 md:hidden">
              <Link
                href="/services"
                className="group relative block overflow-hidden rounded-md"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={services[0].image}
                    alt={services[0].imageAlt}
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-2xl text-white">Services</p>
                  <p className="mt-1 text-sm text-white/80">
                    Panels, chargers, lighting, remodels, and more
                  </p>
                </div>
              </Link>
            </div>

            <ul className="mt-10 hidden gap-8 md:grid md:grid-cols-3">
              {services.slice(0, 3).map((service) => (
                <li key={service.slug}>
                  <Link href="/services" className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <h3 className="mt-4 font-display text-xl tracking-tight text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                      {service.summary}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="site-wrap py-16 md:py-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Photos from the Acco Archives
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.85rem,4vw,2.5rem)] leading-tight tracking-tight text-ink">
                Real jobs, real finish work
              </h2>
            </div>
            <Link
              href="/work"
              className="text-sm font-semibold text-signal hover:underline"
            >
              Show more
            </Link>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {homeGallery.map((item) => (
              <li
                key={item.src}
                className="relative aspect-[4/3] overflow-hidden rounded-md"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </section>

        <section className="border-y border-border/60 bg-ink py-16 text-white md:py-24">
          <div className="site-wrap">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              Real people, real opinions
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(1.85rem,4vw,2.5rem)] leading-tight tracking-tight">
              Our customer reviews
            </h2>
            <ul className="mt-10 grid gap-8 md:grid-cols-3">
              {reviews.map((review) => (
                <li
                  key={review.quote.slice(0, 24)}
                  className="border-t border-amber/50 pt-5"
                >
                  <p className="text-base leading-relaxed text-white/85">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-sm text-white/55">
                    {review.attribution} · {review.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="site-wrap py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Contact us
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.85rem,4vw,2.5rem)] leading-tight tracking-tight text-ink">
                Better yet, see us in person
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/80">
                To get a free estimate or if you have questions or special
                requests, just drop us a line. Hours: {site.hours}.
              </p>
              <p className="mt-3 text-base text-foreground/80">
                {site.address.full}
                <br />
                <a href={site.phoneHref} className="font-semibold text-signal">
                  {site.phone}
                </a>
                {" · "}
                <a href={site.emailHref} className="font-semibold text-signal">
                  {site.email}
                </a>
              </p>
            </div>
            <Button
              nativeButton={false}
              render={<Link href="/contact" />}
              size="lg"
              className="h-12 rounded-md bg-signal px-6 text-base font-semibold text-white hover:bg-signal/90"
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
