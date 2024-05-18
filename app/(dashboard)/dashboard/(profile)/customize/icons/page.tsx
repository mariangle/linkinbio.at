import { getCachedBiolink } from "@/lib/utils/get-biolink";
import { IconsForm } from "./icons-form";

export default async function Icons() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return <IconsForm data={biolink.config?.icons} />;
}
