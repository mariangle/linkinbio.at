import { LayoutForm } from "./layout-form";
import { getCachedBiolink } from "@/server/actions/get-biolink";
import { PageHeading } from "@/components/dashboard/page";

export default async function Layout() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <>
      <PageHeading>Customize Layout</PageHeading>
      <LayoutForm layout={biolink.config?.profile?.layout} />
    </>
  );
}
