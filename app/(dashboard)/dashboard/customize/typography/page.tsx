import { getCachedBiolink } from "@/server/actions/get-biolink";
import { TypographyForm } from "./typography-form";

export default async function Typography() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <>
      <TypographyForm data={biolink.config?.profile} />
    </>
  );
}
