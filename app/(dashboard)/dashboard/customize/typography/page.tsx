import { getCachedBiolink } from "@/server/actions/get-biolink";
import { TypographyForm } from "./typography-form";
import { PageHeading } from "@/components/dashboard/page";

export default async function Typography() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <>
      <PageHeading>Typography</PageHeading>
      <TypographyForm data={biolink.config?.profile} />
    </>
  );
}
