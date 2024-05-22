import { UsernameForm } from "./_components/username-form";
import { getCachedBiolink } from "@/server/actions/get-biolink";
import { PageWithPreview } from "@/components/dashboard/page";

export default async function Settings() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <PageWithPreview>
      <UsernameForm username={biolink.user.username} />
    </PageWithPreview>
  );
}
