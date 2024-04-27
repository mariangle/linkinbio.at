import { Sidebar } from "@/components/dashboard/sidebar";
import { Navbar } from "@/components/dashboard/navbar";
import { Heading } from "@/components/ui/typography";
import { BiolinkPreviewMobile } from "@/components/dashboard/biolink-preview-overlay";
import { BiolinkPreview } from "@/components/dashboard/biolink-preview";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-secondary md:flex-row">
      <div className="xl:hidden">
        <BiolinkPreviewMobile />
      </div>
      <Sidebar />
      <div className="min-h-screen w-full bg-background">
        <Navbar />
        <div className="flex flex-col md:flex-row">
          <div className="w-full px-4 py-6 md:px-6 xl:flex-[3]">
            <Heading level="h1" className="mt-4 pb-4 text-2xl md:text-2xl" />
            <div>{children}</div>
          </div>
          <div className="hidden xl:sticky xl:top-[57px] xl:grid xl:h-screen xl:flex-[2] xl:place-content-center xl:overflow-y-auto xl:border-l xl:p-4">
            <BiolinkPreview />
          </div>
        </div>
      </div>
    </div>
  );
}
