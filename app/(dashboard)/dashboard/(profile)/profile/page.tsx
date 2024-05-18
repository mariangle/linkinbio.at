import { ProfileForm } from "./profile-form";
import { getCachedBiolink } from "@/lib/utils/get-biolink";
import { PageWithPreview } from "@/components/dashboard/page";

export default async function Profile() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <PageWithPreview biolink={biolink}>
      <ProfileForm data={biolink.user} />
    </PageWithPreview>
  );
}
