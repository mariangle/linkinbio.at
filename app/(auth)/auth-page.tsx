import Link from "next/link";
import { AuthForm } from "./auth-form";
import { ChevronLeft } from "lucide-react";
import { BackgroundCellCore } from "../(landing)/_components/background-ripple-effect";

export default function AuthPage({
  variant,
}: {
  variant: "sign-in" | "sign-up";
}) {
  return (
    <div className="relative grid h-screen w-full place-content-center overflow-x-hidden p-6 dark:bg-neutral-950">
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
