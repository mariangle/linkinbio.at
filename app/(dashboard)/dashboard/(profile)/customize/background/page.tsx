import { getCachedBiolink } from "@/lib/utils/get-biolink";
import { BackgroundForm } from "./background-form";

export default async function Background() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <BackgroundForm
      data={{
        color: biolink.config?.background?.color,
        gradientStartColor: biolink.config?.background?.gradient?.startColor,
        gradientEndColor: biolink.config?.background?.gradient?.endColor,
        gradientAngle: biolink.config?.background?.gradient?.angle,
        url: biolink.config?.background?.url,
      }}
      modified={biolink.config?.background?.customized}
      premium={biolink.user.premium}
    />
  );
}
