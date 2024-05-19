import { getCachedBiolink } from "@/lib/utils/get-biolink";
import { EffectsForm } from "./effects-form";

export default async function Effects() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return <EffectsForm data={biolink.config.effects} />;
}
