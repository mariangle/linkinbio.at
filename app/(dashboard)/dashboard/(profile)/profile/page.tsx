import { ProfileForm } from "./profile-form";
import { getCachedBiolink } from "@/lib/utils/get-biolink";
import { PageWithPreview } from "@/components/dashboard/page";

export default async function Profile() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <PageWithPreview biolink={biolink}>
      <ProfileForm
        data={{
          title: biolink.user.title,
          bio: biolink.user.bio,
          image: biolink.user.image,
          occupation: biolink.user.occupation,
          location: biolink.user.location,
        }}
      />
    </PageWithPreview>
  );
}
