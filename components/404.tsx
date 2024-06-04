import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { BackgroundCellCore } from "@/components/ui/background-ripple-effect";

export function NotFound() {
  return (
    <div className="relative h-screen overflow-x-hidden bg-[#0B363C] p-6 text-[#B8CEC1]">
      <BackgroundCellCore />
      <div className="pointer-events-none relative z-50 flex h-full flex-col items-center justify-between">
        <div></div>
        <div className="flex flex-col items-center text-center">
          <Logo className="size-10 fill-[#E3FFCC]" />
          <div className="mt-6 space-y-2">
            <h1 className="text-xl font-semibold">
              The page you are looking for doesn&apos;t exist.
            </h1>
            <p className="pointer-events-auto text-base">
              Want to create your own biolink page?{" "}
              <Link href="/sign-up" className="underline">
                Create your linkinbio now.
              </Link>
            </p>
          </div>
        </div>
        <Link href="/" className="font-medium">
          linkinbio.at
        </Link>
      </div>
    </div>
  );
}
