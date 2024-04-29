import { TopIconForm } from "../_components/top-icon-form";
import { TitleForm } from "../_components/title-form";
import { BackgroundForm } from "../_components/background-form";
import { ButtonsForm } from "../_components/buttons-form";
import { getBiolinkServer } from "@/lib/utils/get-biolink";

export default async function Customization() {
  const biolink = await getBiolinkServer();

  if (!biolink) return null;

  return (
    <div className="space-y-8 pt-8">
      <TopIconForm
        data={{
          shadow: biolink.config?.topIcon?.shadow,
          style: biolink.config?.topIcon?.style,
        }}
      />
      <TitleForm
        data={{
          title: biolink.config?.title?.font,
          color: biolink.config?.title?.color,
          invertTextColor: biolink.config?.invertTextColor,
          hideUsername: biolink.config?.hideUsername,
        }}
      />
      <BackgroundForm
        data={{
          color: biolink.config?.background?.color,
          url: biolink.config?.background?.url,
        }}
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
      />
    </div>
  );
}
