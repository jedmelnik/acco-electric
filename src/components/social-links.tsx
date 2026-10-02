import { cn } from "@/lib/utils";
import {
  siFacebook,
  siGoogle,
  siInstagram,
  siX,
  siYelp,
} from "simple-icons";

type Network = "google" | "facebook" | "instagram" | "yelp" | "x";

type SocialItem = {
  network: Network;
  href: string;
  label: string;
};

const icons: Record<Network, { path: string }> = {
  google: siGoogle,
  facebook: siFacebook,
  instagram: siInstagram,
  yelp: siYelp,
  x: siX,
};

type Props = {
  items: readonly SocialItem[];
  className?: string;
  iconClassName?: string;
};

/** Brand marks for social / review destinations (social-icons skill). */
export function SocialLinks({ items, className, iconClassName }: Props) {
  if (!items.length) return null;

  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {items.map(({ network, href, label }) => {
        const icon = icons[network];
        return (
          <li key={`${network}-${href}`}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} (opens in new tab)`}
              className="inline-flex size-10 items-center justify-center rounded-md text-current transition-colors hover:bg-white/10"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
                className={cn("size-5", iconClassName)}
              >
                <path d={icon.path} />
              </svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
