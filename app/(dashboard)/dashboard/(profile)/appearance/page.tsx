import { IconForm } from "../_components/icon-form";
import { TitleForm } from "../_components/title-form";
import { BackgroundForm } from "../_components/background-form";
import { ButtonsForm } from "../_components/buttons-form";

export default function Customization() {
  return (
    <div className="space-y-8 pt-8">
      <IconForm />
      <TitleForm />
      <BackgroundForm />
      <ButtonsForm />
    </div>
  );
}
