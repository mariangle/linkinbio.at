import Image from "next/image";
import Link from "next/link";
import BackgroundImage from "@/public/background.png";
import { AuthForm } from "../../auth-form";
import { ChevronLeft } from "lucide-react";

export default function Page() {
  return (
    <div className="relative flex h-screen justify-between bg-[#090D15] p-8">
      <div className="relative grid w-full place-content-center xl:flex-[2]">
        <div className="absolute left-0 top-0">
          <Link href="/" className="flex items-center gap-2">
            <ChevronLeft className="size-4 text-white" />
            Back
          </Link>
        </div>
        <AuthForm variant="sign-up" />
      </div>
      <div className="hidden h-full w-full overflow-hidden rounded-3xl xl:block xl:flex-[3]">
        <Image
          src={BackgroundImage}
          alt="abstract background image"
          className="h-full w-full scale-105 object-cover blur-md brightness-75"
        />
      </div>
    </div>
  );
}
