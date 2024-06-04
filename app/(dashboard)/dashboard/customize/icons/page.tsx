import { getCachedBiolink } from "@/server/actions/get-biolink";
import { IconsForm } from "./icons-form";
import { PageHeading } from "@/components/dashboard/page";

export default async function Icons() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <>
      <PageHeading>Customize Icons</PageHeading>
      <IconsForm data={biolink.config?.icons} />
    </>
  );
}
