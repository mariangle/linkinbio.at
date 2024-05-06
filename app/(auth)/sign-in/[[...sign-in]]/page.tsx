import Image from "next/image";
import Link from "next/link";
import DashboardImage from "@/public/dashboard.png";
import { AuthForm } from "../../auth-form";
import { ChevronLeft } from "lucide-react";

export default function Page() {
  return (
    <div className="relative flex h-screen justify-between overflow-x-hidden bg-[#030010] bg-gradient-to-br from-indigo-900/10 to-blue-950/5">
      <div className="relative grid w-full place-content-center p-6 xl:flex-[2]">
        <div className="absolute left-6 top-6">
          <Link href="/" className="flex items-center gap-2 text-white">
            <ChevronLeft className="size-4" />
            Back
          </Link>
        </div>
        <AuthForm variant="sign-in" />
      </div>
      <div className="hidden h-full w-full xl:flex xl:flex-[3] xl:items-center xl:justify-center">
        <div className="relative">
          <div className="absolute inset-0 h-full w-full scale-105 transform rounded-full bg-gradient-to-r from-indigo-800/25 to-blue-800/50 blur-3xl" />
          <div className="border-rotate rounded-2xl rounded-r-none">
            <div className="relative overflow-hidden rounded-2xl rounded-r-none border border-r-0 border-white/10 shadow-2xl shadow-indigo-950/25">
              <Image
                src={DashboardImage}
                alt="abstract background image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
