import { LayoutForm } from "../../_components/layout-form";
import { PageWithPreview } from "@/components/dashboard/page";
import { getCachedBiolink } from "@/lib/utils/get-biolink";
import { SecondaryNav } from "@/components/dashboard/secondary-nav";
import { biolinkCustomizationLinks } from "@/lib/constants/nav-links";

export default async function page() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <PageWithPreview biolink={biolink}>
      <SecondaryNav items={biolinkCustomizationLinks} />
      <LayoutForm
        layout={biolink.config?.profile.layout}
        modified={biolink.config.profile.customized}
        premium={biolink.user.premium}
      />
    </PageWithPreview>
  );
}
