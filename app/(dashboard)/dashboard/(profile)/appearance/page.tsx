import { TopIconForm } from "../_components/top-icons-form";
import { TitleForm } from "../_components/profile-form";
import { BackgroundForm } from "../_components/background-form";
import { ButtonsForm } from "../_components/buttons-form";
import { getCachedBiolink } from "@/lib/utils/get-biolink";
import { PageWithPreview } from "@/components/dashboard/page";
import { SecondaryNav } from "@/components/dashboard/secondary-nav";
import { biolinkCustomizationLinks } from "@/lib/constants/nav-links";

export default async function Customization() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <PageWithPreview biolink={biolink}>
      <SecondaryNav items={biolinkCustomizationLinks} />
      <TopIconForm
        data={{
          shadow: biolink.config?.topIcon?.shadow,
          style: biolink.config?.topIcon?.style,
        }}
        modified={biolink.config?.topIcon?.customized}
      />
      <TitleForm
        data={{
          titleColor: biolink.config?.profile?.title?.color,
          titleFont: biolink.config?.profile?.title?.font,
          invertTextColor: biolink.config?.profile.invertTextColor,
          hideUsername: biolink.config?.profile.hideUsername,
        }}
        modified={biolink.config?.profile?.customized}
      />
      <BackgroundForm
        data={{
          color: biolink.config?.background?.color,
          gradientStartColor: biolink.config?.background?.gradient?.startColor,
          gradientEndColor: biolink.config?.background?.gradient?.endColor,
          gradientAngle: biolink.config?.background?.gradient?.angle,
          url: biolink.config?.background?.url,
        }}
        modified={biolink.config?.background?.customized}
      />
      <ButtonsForm
        data={{
          shadowSolid: biolink.config?.button?.shadow.solid,
          shadowSpreadRadius: biolink.config?.button?.shadow.spreadRadius,
          shadowColor: biolink.config?.button?.shadow.color,
          textColor: biolink.config?.button?.text.color,
          textHidden: biolink.config?.button?.text.hidden,
          borderColor: biolink.config?.button?.border.color,
          borderRadius: biolink.config?.button?.border.radius,
          borderWidth: biolink.config?.button?.border.width,
          backgroundColor: biolink.config?.button?.background.color,
          backgroundOpacity: biolink.config?.button?.background.opacity,
          backgroundBlur: biolink.config?.button?.background.blur,
          backgroundSocialColor: biolink.config?.button?.background.socialColor,
          iconHidden: biolink.config?.button?.icon.hidden,
          iconShadow: biolink.config?.button?.icon.shadow,
          iconSocialColor: biolink.config?.button?.icon.socialColor,
        }}
        modified={biolink.config?.button?.customized}
      />
    </PageWithPreview>
  );
}
