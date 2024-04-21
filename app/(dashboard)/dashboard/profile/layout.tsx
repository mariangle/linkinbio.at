import { BiolinkPreview } from "@/components/dashboard/biolink-preview";
import { Heading } from "@/components/ui/typography";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-between">
      <div className="w-full py-4">
        <Breadcrumbs />
        <Heading level="h1" className="mt-4 pb-0 text-2xl md:text-2xl" />
        {children}
      </div>
      <div className="hidden border-l bg-secondary p-4 lg:block">
        <BiolinkPreview />
      </div>
    </div>
  );
}
