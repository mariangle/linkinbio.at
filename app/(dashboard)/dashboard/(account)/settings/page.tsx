import { AppearanceForm } from "./_components/appearance-form";
import { UsernameForm } from "./_components/username-form";
import { SeoForm } from "./_components/seo-form";
import { getBiolinkServer } from "@/lib/utils/get-biolink";

export default async function Settings() {
  const biolink = await getBiolinkServer();

  if (!biolink) return null;

  return (
    <div className="my-6 space-y-6">
      <UsernameForm username={biolink.user.username} />
      <AppearanceForm />
      <SeoForm />
    </div>
  );
}
