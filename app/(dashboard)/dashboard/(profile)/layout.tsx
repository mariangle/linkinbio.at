import { BiolinkPreview } from "@/components/dashboard/biolink-preview";
import { Heading } from "@/components/ui/typography";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { BiolinkPreviewMobile } from "@/components/dashboard/biolink-preview-mobile";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-between gap-4">
      <div className="relative w-full py-4 xl:flex-[3]">
        <div className="xl:hidden">
          <BiolinkPreviewMobile />
        </div>
        <div className="mx-auto w-full max-w-2xl">
          <Breadcrumbs />
          <Heading level="h1" className="mt-4 pb-4 text-2xl md:text-2xl" />
          {children}
        </div>
      </div>
      <div className="hidden xl:sticky xl:top-0 xl:grid xl:h-screen xl:flex-[2] xl:place-content-center xl:overflow-y-auto xl:border-l xl:p-4">
        <BiolinkPreview />
      </div>
    </div>
  );
}
