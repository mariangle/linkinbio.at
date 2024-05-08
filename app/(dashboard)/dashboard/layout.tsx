import Image from "next/image";
import DashboardBackgroundDark from "@/public/dashboard-background-dark.jpg";
import DashboardBackgroundLight from "@/public/dashboard-background-light.jpg";

import { Navigation } from "@/components/dashboard/navigation";
import { getCachedBiolink } from "@/lib/utils/get-biolink";
import { UsernameDialog } from "@/components/dashboard/username-modal";
import { ThemeProvider } from "@/components/theme-provider";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const biolink = await getCachedBiolink();

  if (!biolink?.user) redirect("/");

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="relative bg-white dark:bg-transparent">
        <Image
          src={DashboardBackgroundDark}
          width={1000}
          height={1000}
          alt="abstract background image"
          className="fixed inset-0 hidden h-full w-full scale-110 object-cover blur-2xl brightness-[60%] hue-rotate-[340deg] dark:block"
        />
        <Image
          src={DashboardBackgroundLight}
          width={1000}
          height={1000}
          alt="abstract background image"
          className="fixed inset-0 block h-full w-full scale-110 object-cover blur-2xl dark:hidden"
        />
        <UsernameDialog isOpen={!biolink.user.username} />
        <div className="relative flex flex-col overflow-hidden md:flex-row">
          <Navigation user={biolink.user} />
          <div className="h-screen w-full">{children}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}
