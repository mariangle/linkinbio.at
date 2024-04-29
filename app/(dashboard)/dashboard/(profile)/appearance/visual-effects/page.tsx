import { TextAnimationForm } from "../../_components/text-animation-form";
import { WeatherEffectForm } from "../../_components/weather-effect-form";
import { getBiolinkServer } from "@/lib/utils/get-biolink";

export default async function page() {
  const biolink = await getBiolinkServer();

  if (!biolink) return null;

  return (
    <div className="space-y-8 py-8">
      <TextAnimationForm
        data={{
          titleSparkles: biolink.config?.effects?.titleSparkles,
          titleTypewriter: biolink.config?.effects?.titleTypewriter,
          bioTypewriter: biolink.config?.effects?.bioTypewriter,
        }}
      />
      <WeatherEffectForm
        data={{
          weatherEffect: biolink.config?.effects?.weather,
        }}
      />
    </div>
  );
}
