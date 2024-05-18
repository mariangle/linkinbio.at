import { LayoutForm } from "./layout-form";
import { getCachedBiolink } from "@/lib/utils/get-biolink";

export default async function Layout() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <LayoutForm
      layout={biolink.config?.profile.layout}
      modified={biolink.config.profile.customized}
      premium={biolink.user.premium}
    />
  );
}
