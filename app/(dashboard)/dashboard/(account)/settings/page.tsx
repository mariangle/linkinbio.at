import { AppearanceForm } from "./_components/appearance-form";
import { UsernameForm } from "./_components/username-form";
import { SeoForm } from "./_components/seo-form";

export default function Settings() {
  return (
    <div className="my-6 space-y-6">
      <UsernameForm />
      <AppearanceForm />
      <SeoForm />
    </div>
  );
}
