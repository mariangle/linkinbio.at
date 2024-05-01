import { Sidebar } from "@/components/dashboard/sidebar";
import { Navbar } from "@/components/dashboard/navbar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import type { User } from "@prisma/client";
import { UsernameDialog } from "@/components/dashboard/username-modal";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) redirect("/");

  const user = session.user as User;

  return (
    <>
      <UsernameDialog isOpen={!user.username} />
      <div className="relative flex flex-col overflow-hidden bg-secondary md:flex-row">
        <Sidebar />
        <div className="h-screen w-full bg-background">
          <Navbar user={user} />
          {children}
        </div>
      </div>
    </>
  );
}
