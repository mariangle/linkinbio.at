import { FontForm } from "./_components/font-form";
import { StylizationForm } from "./_components/stylization-form";
import { BackgroundForm } from "./_components/background-form";
import { ButtonForm } from "./_components/button-form";

export default function Customization() {
  return (
    <div className="space-y-8 pt-8">
      <FontForm />
      <StylizationForm />
      <BackgroundForm />
      <ButtonForm />
    </div>
  );
}
