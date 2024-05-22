import { getCachedBiolink } from "@/server/actions/get-biolink";
import { ProfileForm } from "./profile-form";

export default async function Profile() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <div>
      <div className="my-4 flex items-center gap-4 text-base font-semibold">
        <div className="whitespace-nowrap">Border</div>
        <div className="h-px w-full bg-border"></div>
      </div>
      <ProfileForm data={biolink.user} />
    </div>
  );
}
