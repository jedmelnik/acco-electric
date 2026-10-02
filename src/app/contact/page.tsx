import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Get a free quote from Acco Electric in San Anselmo. Call (415) 971-2857 or email Acco_Electric@comcast.net.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          kicker="Contact"
          title="Get a free quote"
          lede="Questions or special requests - drop us a line or stop by the shop."
          image={{
            // Landmark: crew faces / center of group
            src: "/images/hero-crew.jpg",
            alt: "Acco Electric crew",
            width: 1205,
            height: 599,
            focalX: 0.55,
            focalY: 0.4,
            fillFrame: true,
            bleed: true,
            subject: { l: 0.05, t: 0.1, r: 0.98, b: 0.95 },
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
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <h2 className="font-display text-2xl tracking-tight text-ink md:text-3xl">
                Tell us about the job
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground/80">
                Send a note and we will follow up. Prefer the phone? Call{" "}
                <a href={site.phoneHref} className="font-semibold text-signal">
                  {site.phone}
                </a>{" "}
                during shop hours.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-8">
              <div className="rounded-md border border-border/70 bg-card p-6">
                <h3 className="font-display text-xl text-ink">Visit</h3>
                <address className="mt-3 not-italic text-base leading-relaxed text-foreground/80">
                  Acco Electric
                  <br />
                  {site.address.full}
                </address>
                <p className="mt-4 text-sm text-foreground/75">{site.hours}</p>
                <div className="mt-5 flex flex-col gap-2 text-sm">
                  <a
                    href={site.phoneHref}
                    className="font-semibold text-signal hover:underline"
                  >
                    {site.phone}
                  </a>
                  <a
                    href={site.emailHref}
                    className="font-semibold text-signal hover:underline"
                  >
                    {site.email}
                  </a>
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-ink hover:underline"
                  >
                    Get directions
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-md border border-border/70">
                <iframe
                  title="Map to Acco Electric"
                  src={site.mapsEmbed}
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
      <StickyCta />
    </>
  );
}
