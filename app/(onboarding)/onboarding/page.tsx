import { UsernameForm } from "@/components/dashboard/username-form";
import { Logo } from "@/components/ui/logo";
import { getCachedBiolink } from "@/server/actions/get-biolink";
import { redirect } from "next/navigation";

export default async function Onboarding() {
  const biolink = await getCachedBiolink();

  if (!biolink?.user) redirect("/");

  if (biolink.user?.username) redirect("/dashboard");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-foreground">
      <div className="flex flex-col items-center text-center">
        <Logo className="size-14 fill-black dark:fill-white" />
        <div className="mt-6 max-w-prose space-y-6">
          <div className="space-y-2">
            <h1 className="text-xl font-semibold">Welcome onboard 👋</h1>
            <p className="text-base">
              Let&apos;s get started and setup your username. You can change
              this later in your account settings.
            </p>
          </div>
          <UsernameForm />
        </div>
      </div>
    </div>
  );
}
