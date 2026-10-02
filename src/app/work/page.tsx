import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";
import { gallery } from "@/lib/site";

export const metadata = {
  title: "Work",
  description:
    "Photos from the Acco Archives - lighting, remodels, panels, and crew shots from Acco Electric projects.",
};

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          kicker="Work"
          title="Photos from the Acco Archives"
          lede="Finished lighting, remodel electrical, panels, and the crew behind the jobs."
          image={{
            // Landmark: kitchen island / lighting center
            src: "/images/gallery-kitchen.jpg",
            alt: "Kitchen lighting project by Acco Electric",
            width: 2003,
            height: 2400,
            focalX: 0.5,
            focalY: 0.42,
            fillFrame: true,
            bleed: true,
            subject: { l: 0.05, t: 0.2, r: 0.98, b: 0.7 },
          }}
          actions={
            <Button
              nativeButton={false}
              render={<Link href="/contact" />}
              size="lg"
              className="h-11 rounded-md bg-signal px-5 font-semibold text-white hover:bg-signal/90"
            >
              Start a project
            </Button>
          }
        />

        <section className="site-wrap py-14 md:py-20">
          <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {gallery.map((item) => (
              <li key={item.src} className="mb-4 break-inside-avoid">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full rounded-md"
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
      <StickyCta />
    </>
  );
}
