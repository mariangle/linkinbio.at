import { getCachedBiolink } from "@/server/actions/get-biolink";
import { BackgroundForm } from "./background-form";

export default async function Background() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <>
      <BackgroundForm data={biolink.config?.background} />
    </>
  );
}
