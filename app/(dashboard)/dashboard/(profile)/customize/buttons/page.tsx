import { getCachedBiolink } from "@/lib/utils/get-biolink";
import { ButtonsForm } from "./buttons-form";

export default async function Buttons() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <ButtonsForm
      data={{
        shadowSolid: biolink.config?.buttons?.shadow.solid,
        shadowSpreadRadius: biolink.config?.buttons?.shadow.spreadRadius,
        shadowColor: biolink.config?.buttons?.shadow.color,
        textColor: biolink.config?.buttons?.text.color,
        textHidden: biolink.config?.buttons?.text.hidden,
        borderColor: biolink.config?.buttons?.border.color,
        borderRadius: biolink.config?.buttons?.border.radius,
        borderWidth: biolink.config?.buttons?.border.width,
        backgroundColor: biolink.config?.buttons?.background.color,
        backgroundOpacity: biolink.config?.buttons?.background.opacity,
        backgroundBlur: biolink.config?.buttons?.background.blur,
        backgroundSocialColor: biolink.config?.buttons?.background.socialColor,
        iconHidden: biolink.config?.buttons?.icon.hidden,
        iconShadow: biolink.config?.buttons?.icon.shadow,
        iconSocialColor: biolink.config?.buttons?.icon.socialColor,
      }}
      modified={biolink.config?.buttons?.customized}
    />
  );
}
