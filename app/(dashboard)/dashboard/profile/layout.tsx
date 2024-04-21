import { BiolinkPreview } from "@/components/dashboard/biolink-preview";
import { Heading } from "@/components/ui/typography";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-4">
      <div className="w-full py-4 lg:flex-[3]">
        <div className="mx-auto w-full max-w-2xl">
          <Breadcrumbs />
          <Heading level="h1" className="mt-4 pb-4 text-2xl md:text-2xl" />
          {children}
        </div>
      </div>
      <div className="hidden min-h-screen border-l p-4 lg:block lg:flex-[2]">
        <BiolinkPreview />
      </div>
    </div>
  );
}
