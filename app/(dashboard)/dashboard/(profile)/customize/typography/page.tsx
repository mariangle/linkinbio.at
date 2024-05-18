import { getCachedBiolink } from "@/lib/utils/get-biolink";
import { TypographyForm } from "./typography-form";

export default async function Typography() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <TypographyForm
      data={{
        titleColor: biolink.config?.profile?.title?.color,
        titleFont: biolink.config?.profile?.title?.font,
        textColor: biolink.config?.profile.text.color,
        textFont: biolink.config?.profile?.text.font,
        hideUsername: biolink.config?.profile.hideUsername,
      }}
      modified={biolink.config?.profile?.customized}
      premium={biolink.user.premium}
    />
  );
}
