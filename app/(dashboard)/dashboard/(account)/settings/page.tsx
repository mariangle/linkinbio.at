import { AppearanceForm } from "./_components/appearance-form";
import { UsernameForm } from "./_components/username-form";
import { getBiolinkServer } from "@/lib/utils/get-biolink";
import { PageWithPreview } from "@/components/dashboard/page";

export default async function Settings() {
  const biolink = await getBiolinkServer();

  if (!biolink) return null;

  return (
    <PageWithPreview>
      <UsernameForm username={biolink.user.username} />
      <AppearanceForm />
    </PageWithPreview>
  );
}
