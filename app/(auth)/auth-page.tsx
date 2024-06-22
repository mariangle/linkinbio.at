import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { BackgroundCellCore } from "@/components/ui/background-ripple-effect";
import { AuthForm } from "./auth-form";
import { getCurrentUser, getSession } from "@/lib/functions/auth";

import { redirect } from "next/navigation";

export default async function AuthPage({
  variant,
}: {
  variant: "sign-in" | "sign-up";
}) {
  const session = await getSession();

  if (session) redirect("/dashboard");

  return (
    <div className="relative grid h-screen w-full place-content-center overflow-x-hidden bg-[#0B363C] p-6 text-[#E3FFCC]">
      <BackgroundCellCore />
      <div className="pointer-events-none absolute left-6 top-6 z-50">
        <Link href="/" className="pointer-events-auto flex items-center gap-2">
          <ChevronLeft className="size-4" />
          Back
        </Link>
      </div>
      <div className="pointer-events-none relative z-50">
        <AuthForm variant={variant} />
      </div>
    </div>
  );
}
