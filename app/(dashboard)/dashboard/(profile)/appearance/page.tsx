import { TypographyForm } from "./_components/typography-form";
import { BackgroundForm } from "./_components/background-form";
import { ButtonsForm } from "./_components/buttons-form";

export default function Customization() {
  return (
    <div className="space-y-8 pt-8">
      <TypographyForm />
      <BackgroundForm />
      <ButtonsForm />
    </div>
  );
}
