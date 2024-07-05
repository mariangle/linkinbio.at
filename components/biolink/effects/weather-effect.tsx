import { ThunderEffect } from "@/components/biolink/effects/thunder-effect";
import { PrecipitationEffect } from "@/components/biolink/effects/precipitation-effect";
import { LightningBugsEffect } from "@/components/biolink/effects/lightnings-bugs-effect";
import { CashRainEffect } from "./cash-rain-effect";
import { StarsEffect } from "./stars-effect";
import { BackgroundEffect } from "@/lib/types";

export function WeatherEffect({
  variant,
  preview,
  className,
}: {
  variant?: BackgroundEffect;
  preview?: boolean;
  className?: string;
}) {
  switch (variant) {
    case "thunder":
      return <ThunderEffect className={className} />;
    case "rain":
      return <PrecipitationEffect type="rain" className={className} />;
    case "snow":
      return <PrecipitationEffect type="snow" className={className} />;
    case "lightning-bugs":
      return <LightningBugsEffect className={className} />;
    case "stars":
      return <StarsEffect className={className} />;

    case "cash":
      return <CashRainEffect className={className} />;
    default:
      return null;
  }
}
