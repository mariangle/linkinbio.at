import Image from "next/image";
import Link from "next/link";

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white p-6 text-black">
      <div></div>
      <div className="flex flex-col items-center text-center">
        <Image
          src="/icon.svg"
          className="size-14 invert"
          height={100}
          width={100}
          alt="logo"
        />
        <div className="mt-6 space-y-2">
          <h1 className="text-xl font-semibold">
            The page you are looking for doesn&apos;t exist.
          </h1>
          <p className="text-base">
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
  );
}
