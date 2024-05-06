import Image from "next/image";
import DashboardBackgroundDark from "@/public/dashboard-background-dark.jpg";
import DashboardBackgroundLight from "@/public/dashboard-background-light.jpg";

import { Navigation } from "@/components/dashboard/navigation";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import type { User } from "@prisma/client";
import { UsernameDialog } from "@/components/dashboard/username-modal";
import { ThemeProvider } from "@/components/theme-provider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) redirect("/");

  const user = session.user as User;

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
        <UsernameDialog isOpen={!user.username} />
        <div className="relative flex flex-col overflow-hidden md:flex-row">
          <Navigation user={user} />
          <div className="h-screen w-full">{children}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}
