import { EffectsForm } from "../../_components/effects-form";
import { getBiolinkServer } from "@/lib/utils/get-biolink";
import { PageWithPreview } from "@/components/dashboard/page";
import { SecondaryNav } from "@/components/dashboard/secondary-nav";
import { biolinkCustomizationLinks } from "@/lib/constants/nav-links";

export default async function page() {
  const biolink = await getBiolinkServer();

  if (!biolink) return null;

  return (
    <PageWithPreview biolink={biolink}>
      <SecondaryNav items={biolinkCustomizationLinks} />
      <EffectsForm
        data={{
          titleSparkles: biolink.config?.effects?.titleSparkles,
          titleTypewriter: biolink.config?.effects?.titleTypewriter,
          bioTypewriter: biolink.config?.effects?.bioTypewriter,
          weatherEffect: biolink.config?.effects?.weatherEffect,
        }}
        customized={biolink.config?.effects?.customized}
      />
    </PageWithPreview>
  );
}
