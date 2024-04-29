import { ProfileForm } from "./profile-form";
import { getBiolinkServer } from "@/lib/utils/get-biolink";

export default async function Profile() {
  const biolink = await getBiolinkServer();

  if (!biolink) return null;

  return (
    <div>
      <ProfileForm
        data={{
          title: biolink.user.title,
          bio: biolink.user.bio,
          image: biolink.user.image,
          occupation: biolink.user.occupation,
          location: biolink.user.location,
        }}
      />
    </div>
  );
}
