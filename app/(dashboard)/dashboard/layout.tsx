import { Navigation } from "@/components/dashboard/navigation";
import { getCachedBiolink } from "@/server/actions/get-biolink";
import { redirect } from "next/navigation";
import { BiolinkPreview } from "@/components/dashboard/biolink-preview";
import { DashboardHeading } from "@/components/dashboard/dashboard-heading";
import { CustomizationNavigation } from "@/components/dashboard/customize-header";
import { ThemeProvider } from "@/components/theme-provider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const biolink = await getCachedBiolink();

  if (!biolink?.user) redirect("/");

  if (!biolink.user?.username) {
    redirect("/onboarding");
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="relative flex w-full justify-between overflow-x-hidden bg-gray-400 dark:bg-zinc-950">
        <div className="relative flex w-full flex-col overflow-y-auto overflow-x-hidden md:flex-row">
          <Navigation user={biolink.user} />
          <div className="z-10 mx-auto h-screen max-h-screen w-full max-w-3xl space-y-4 overflow-y-auto p-4 pt-12">
            <DashboardHeading />
            <CustomizationNavigation />
            {children}
          </div>
        </div>
        <BiolinkPreview biolink={biolink} />
      </div>
    </ThemeProvider>
  );
}
