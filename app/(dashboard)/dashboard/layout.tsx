import { Sidebar } from "@/components/dashboard/sidebar";
import { Navbar } from "@/components/dashboard/navbar";
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
      <UsernameDialog isOpen={!user.username} />
      <div className="relative flex flex-col overflow-hidden bg-background dark:bg-secondary md:flex-row">
        <Sidebar />
        <div className="h-screen w-full bg-secondary dark:bg-background">
          <Navbar user={user} />
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
}
