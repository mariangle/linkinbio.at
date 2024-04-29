import { Sidebar } from "@/components/dashboard/sidebar";
import { Navbar } from "@/components/dashboard/navbar";
import { Heading } from "@/components/ui/typography";
import { BiolinkPreviewMobile } from "@/components/dashboard/biolink-preview-overlay";
import { BiolinkPanel } from "@/components/dashboard/biolink-panel";
import { auth } from "@/lib/auth";
import { SessionProvider } from "next-auth/react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={null}>
      <div className="relative flex min-h-screen flex-col bg-secondary md:flex-row">
        <div className="xl:hidden">
          <BiolinkPreviewMobile />
        </div>
        <Sidebar />
        <div className="min-h-screen w-full bg-background">
          <Navbar />
          <div className="flex flex-col md:flex-row">
            <div className="w-full px-4 py-6 md:px-6">
              {JSON.stringify(session)}

              <Heading level="h1" className="mt-4 pb-4 text-2xl md:text-2xl" />
              <div>{children}</div>
            </div>
            <BiolinkPanel />
          </div>
        </div>
      </div>
    </SessionProvider>
  );
}
