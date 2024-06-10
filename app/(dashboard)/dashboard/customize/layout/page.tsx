import { LayoutForm } from "./layout-form";
import { getCachedBiolink } from "@/server/actions/get-biolink";

export default async function Layout() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return <LayoutForm layout={biolink.config?.profile?.layout} />;
}
