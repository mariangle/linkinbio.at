import { getCachedBiolink } from "@/server/actions/get-biolink";
import { PageWithPreview } from "@/components/dashboard/page";
import { CustomizeHeader } from "@/components/dashboard/customize-header";

export default async function CustomizeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;
  return (
    <div>
      <PageWithPreview biolink={biolink}>
        <CustomizeHeader />
        {children}
      </PageWithPreview>
    </div>
  );
}
