import { getCachedBiolink } from "@/lib/utils/get-biolink";
import { PageWithPreview } from "@/components/dashboard/page";
import { LayoutHeader } from "./layout-header";

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
        <LayoutHeader />
        {children}
      </PageWithPreview>
    </div>
  );
}
