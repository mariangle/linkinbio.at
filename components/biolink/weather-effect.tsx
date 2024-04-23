import { ThunderEffect } from "@/components/biolink/thunder-effect";
import { PrecipitationEffect } from "@/components/biolink/rain-effect";
import { LightningBugsEffect } from "@/components/biolink/lightnings-bugs-effect";
import { FogEffect } from "@/components/biolink/fog-effect";
import { WeatherEffect as WeatherEffectType } from "@/types";
import { cn } from "@/lib/utils";

export function WeatherEffect({
  variant,
  preview,
}: {
  variant?: WeatherEffectType;
  preview?: boolean;
}) {
  switch (variant) {
    case WeatherEffectType.Thunder:
      return (
        <div className={cn("fixed inset-0", preview && "absolute")}>
          <ThunderEffect />
        </div>
      );
    case WeatherEffectType.Rain:
      return (
        <div className="absolute inset-0">
          <PrecipitationEffect type="rain" />
        </div>
      );
    case WeatherEffectType.Snow:
      return (
        <div className="absolute inset-0">
          <PrecipitationEffect type="snow" />
        </div>
      );
    case WeatherEffectType.LighthingBugs:
      return (
        <div className="absolute inset-0">
          <LightningBugsEffect />
        </div>
      );
    case WeatherEffectType.Fog:
      return (
        <div className="absolute inset-0">
          <FogEffect />
        </div>
      );
    default:
      return null;
  }
}
