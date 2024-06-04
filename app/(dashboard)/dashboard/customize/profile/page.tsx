import { getCachedBiolink } from "@/server/actions/get-biolink";
import { ProfileForm } from "./profile-form";
import { PageHeading } from "@/components/dashboard/page";

export default async function Profile() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <>
      <PageHeading>Profile</PageHeading>
      <ProfileForm data={biolink.user} />
    </>
  );
}
