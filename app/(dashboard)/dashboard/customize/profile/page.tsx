import { getCachedBiolink } from "@/server/actions/get-biolink";
import { ProfileForm } from "./profile-form";
import { Heading } from "@/components/ui/typography";

export default async function Profile() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <>
      <ProfileForm data={biolink.user} />
    </>
  );
}
