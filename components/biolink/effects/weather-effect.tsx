import { ThunderEffect } from "@/components/biolink/effects/thunder-effect";
import { PrecipitationEffect } from "@/components/biolink/effects/rain-effect";
import { LightningBugsEffect } from "@/components/biolink/effects/lightnings-bugs-effect";
import { WeatherEffect as WeatherEffectType } from "@/lib/types";
import { cn } from "@/lib/utils";

export function WeatherEffect({
  variant,
  preview,
}: {
  variant?: WeatherEffectType;
  preview?: boolean;
}) {
  // TODO: Fix z-index issue
  switch (variant) {
    case WeatherEffectType.Thunder:
      return (
        <div
          className={cn(
            "pointer-events-none fixed inset-0 z-10",
            preview && "absolute",
          )}
        >
          <ThunderEffect />
        </div>
      );
    case WeatherEffectType.Rain:
      return (
        <div className={cn("absolute inset-0 z-10")}>
          <PrecipitationEffect type="rain" />
        </div>
      );
    case WeatherEffectType.Snow:
      return (
        <div className="absolute inset-0 z-10">
          <PrecipitationEffect type="snow" />
        </div>
      );
    case WeatherEffectType.LighthingBugs:
      return (
        <div className="absolute inset-0 z-10">
          <LightningBugsEffect />
        </div>
      );
    default:
      return null;
  }
}
