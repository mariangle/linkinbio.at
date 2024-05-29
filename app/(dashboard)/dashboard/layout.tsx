import Image from "next/image";

import { Navigation } from "@/components/dashboard/navigation";
import { getCachedBiolink } from "@/server/actions/get-biolink";
import { redirect } from "next/navigation";

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
    <div className="relative bg-white dark:bg-transparent">
      <Image
        src="/dashboard.jpg"
        width={1000}
        height={1000}
        alt="abstract background image"
        className="fixed inset-0 block h-full w-full scale-110 object-cover blur-3xl saturate-50 dark:hidden"
      />
      <div className="relative flex flex-col overflow-hidden md:flex-row">
        <Navigation user={biolink.user} />
        <div className="h-screen w-full">{children}</div>
      </div>
    </div>
  );
}
