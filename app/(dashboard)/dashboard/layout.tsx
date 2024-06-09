import Image from "next/image";

import { Navigation } from "@/components/dashboard/navigation";
import { getCachedBiolink } from "@/server/actions/get-biolink";
import { redirect } from "next/navigation";
import { BiolinkPreview } from "@/components/dashboard/biolink-preview";
import { DashboardHeading } from "@/components/dashboard/dashboard-heading";
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
        <Image
          src="/dashboard.jpg"
          width={2560}
          height={1440}
          className="fixed inset-0 hidden h-full w-full object-cover blur-3xl brightness-[0.2] hue-rotate-[320deg] dark:block"
          alt="background-image"
        />
        <Image
          src="/dashboard.jpg"
          width={2560}
          height={1440}
          className="fixed inset-0 h-full w-full scale-110 object-cover blur-[100px] brightness-[0.8] hue-rotate-[320deg] saturate-[0.25] dark:hidden"
          alt="background-image"
        />
        <div className="relative flex w-full flex-col overflow-x-hidden overflow-y-hidden text-white md:flex-row">
          <Navigation user={biolink.user} />
          <div className="z-10 h-screen max-h-screen w-full overflow-y-auto">
            <div className="mx-auto w-full max-w-3xl space-y-4 px-4 py-12 pb-32 md:pb-12">
              <DashboardHeading />
              {children}
            </div>
          </div>
        </div>
        <BiolinkPreview biolink={biolink} />
      </div>
    </ThemeProvider>
  );
}
