import { EffectsForm } from "../../_components/effects-form";
import { getCachedBiolink } from "@/lib/utils/get-biolink";
import { PageWithPreview } from "@/components/dashboard/page";
import { SecondaryNav } from "@/components/dashboard/secondary-nav";
import { biolinkCustomizationLinks } from "@/lib/constants/nav-links";

export default async function page() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <PageWithPreview biolink={biolink}>
      <SecondaryNav items={biolinkCustomizationLinks} />
      <EffectsForm
        data={{
          title: biolink.config?.effects?.title,
          weather: biolink.config?.effects?.weather,
        }}
        modified={biolink.config?.effects?.customized}
      />
    </PageWithPreview>
  );
}
