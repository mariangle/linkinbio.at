import { Container } from "../../../components/ui/container";
import { CardSpotlightEffect } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";

export const prices = [
  {
    title: "Basic",
    button: "Start for free",
    description: "Essential features to get you started",
    included: "What's included",
    features: [
      "All core features",
      "Up to 10 links",
      "Fully customizable buttons",
      "Top icon styles",
      "SEO optimization",
    ],
  },
  {
    title: "Premium",
    button: "Get started with Premium",
    description: "Unlock advanced features for your biolink page",
    price: 14.99,
    included: "Everything from Free, plus",
    features: [
      "Unlimited links",
      "Analytics",
      "Title Effects",
      "Layout customization",
      "Weather Effects",
      ".GIF and video support",
      "Spotify, SoundCloud, and YouTube content",
    ],
  },
];

export function PricePackages() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        {prices.map((item, index) => {
          const featured = index === 1;
          return (
            <div
              key={index}
              className={cn(
                "bg-transoarent w-full max-w-sm rounded-xl bg-gradient-to-br from-white/10 to-white/50 p-px shadow-lg shadow-indigo-950/5 md:self-end",
                featured && "from-neutral-700/80 to-60%",
              )}
            >
              <CardSpotlightEffect
                className={cn(
                  "overflow-hidden border-none bg-neutral-900 bg-gradient-to-b from-neutral-900/50 to-neutral-950/75 text-white",
                  featured && "from-white/5",
                )}
              >
                {featured && (
                  <div className="absolute right-0 top-0 m-2 rounded-full border border-indigo-900 bg-gradient-to-r from-indigo-500/5 to-indigo-500/25 px-3 py-1.5 text-xs text-indigo-50 shadow-2xl">
                    Recommended
                  </div>
                )}
                <div>
                  <div className="mb-2 text-xl font-medium text-indigo-50">
                    {item.title}
                  </div>
                  <p className="text-sm text-neutral-400">{item.description}</p>
                </div>
                <div className="my-4 h-1 border-t border-dashed border-neutral-700/80"></div>
                <div>
                  <div className="space-y-1">
                    <div
                      style={{
                        filter: `drop-shadow(0 0 0.25rem rgba(255, 255, 255, 0.5))`,
                      }}
                      className="bg-gradient-to-b from-indigo-200 to-indigo-50 bg-clip-text text-4xl font-bold text-transparent"
                    >
                      {item.price ? `€${item.price}` : "Free"}
                    </div>
                    <div className="text-xs text-neutral-400">
                      {item.price ? "Lifetime" : "Forever"}
                    </div>
                  </div>
                </div>
                <div className="mt-4 w-full">
                  <Link
                    href="/sign-in"
                    className={cn(
                      "block w-full rounded-lg border border-neutral-800 bg-white/5 bg-gradient-to-r to-white/10 px-5 py-2.5 text-center text-sm shadow-lg",
                      featured &&
                        "border-indigo-800 from-indigo-900/80 to-indigo-950 shadow-indigo-950/10",
                    )}
                  >
                    <span
                      style={{
                        filter: `drop-shadow(0 0 1rem rgba(255, 255, 255, 0.5))`,
                      }}
                    >
                      {item.button}
                    </span>
                  </Link>
                </div>
                <div className="mt-4">
                  <div className="mb-4 bg-gradient-to-b from-neutral-300 to-indigo-50 bg-clip-text text-sm font-bold text-transparent">
                    {item.included}
                  </div>
                  <ul className="mb-4 space-y-2">
                    {item.features.map((item, index) => (
                      <li key={index} className="flex items-baseline gap-2">
                        <Check className="size-3 shrink-0" />
                        <span className="text-sm text-neutral-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardSpotlightEffect>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
