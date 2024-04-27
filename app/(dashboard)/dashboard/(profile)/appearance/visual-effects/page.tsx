import { TextAnimationForm } from "../_components/text-animation-form";
import { WeatherEffectForm } from "../_components/weather-effect-form";
import { AnimationForm } from "../_components/animation-form";

export default function page() {
  return (
    <div className="space-y-8 py-8">
      <TextAnimationForm />
      <WeatherEffectForm />
      <AnimationForm />
    </div>
  );
}
