/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import BackgroundImage from "@/public/background.png";
import BackgroundWhiteImage from "@/public/background-white.png";

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
        <img
          src="https://i.pinimg.com/736x/b2/fb/21/b2fb21f206c56acc2007ed7e587d9770.jpg"
          alt="abstract background image"
          className="fixed inset-0 hidden h-full w-full scale-110 object-cover blur-2xl brightness-[75%] hue-rotate-[340deg] dark:block"
        />
        <img
          src="https://images6.alphacoders.com/514/514564.jpg"
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
