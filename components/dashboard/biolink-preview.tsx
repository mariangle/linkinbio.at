"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { PhoneMockup } from "@/components/phone-mockup";
import { useBiolinkPreviewStore } from "@/lib/store";
import { Biolink } from "@/lib/types";
import { useMediaQuery } from "@/hooks/use-media-query";
import { EyeIcon, XIcon, Share2, ExternalLink } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";
import { SharePopover } from "@/components/dashboard/share-popover";

export function BiolinkPreview({ biolink }: { biolink: Biolink }) {
  const isMounted = useMounted();
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const [biolinkPreview, setBiolinkPreview] = React.useState<Biolink>(biolink);
  const {
    biolink: biolinkGlobalState,
    setBiolink,
    open,
    setOpen,
  } = useBiolinkPreviewStore();

  React.useEffect(() => {
    if (biolinkGlobalState) {
      setBiolinkPreview(biolinkGlobalState);
    } else {
      setBiolink(biolink);
    }
  }, [biolink, biolinkGlobalState, setBiolink]);

  if (!isMounted) return null; // TODO: Add a loading state

  if (isDesktop) {
    return (
      <div className="border-glass relative grid h-screen w-full max-w-2xl place-content-center overflow-y-auto border-l">
        <BiolinkOptions
          className="absolute right-4 top-4"
          username={biolink.user.username}
        />
        <PhoneMockup biolink={biolinkPreview} />
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="hidden w-fit items-center gap-2 rounded-full bg-primary/80 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-2xl md:fixed md:bottom-4 md:right-4 md:flex xl:hidden"
      >
        <EyeIcon className="size-3" />
        Preview
      </button>
      <div
        className={cn(
          "fixed inset-0 z-[99] grid place-content-center overflow-y-auto bg-background duration-500",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0",
        )}
      >
        <button
          onClick={() => setOpen(false)}
          className="fixed right-4 top-4 z-[9999] flex items-center gap-2 rounded-full bg-primary/80 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-2xl"
        >
          <XIcon className="size-4" />
          Close
        </button>
        <BiolinkOptions
          className="fixed left-4 top-4"
          username={biolink.user.username}
        />
        <PhoneMockup className="pointer-events-none" biolink={biolinkPreview} />
      </div>
    </>
  );
}

function BiolinkOptions({
  username,
  className,
}: {
  username: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <SharePopover username={username}>
        <button className="bg-glass border-glass flex items-center rounded-lg border px-3.5 py-2 text-sm text-white duration-300 hover:opacity-80">
          <Share2 className="mr-2.5 size-4" />
          Share
        </button>
      </SharePopover>
      <Link
        href={`/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-glass border-glass flex items-center rounded-lg border px-3.5 py-2 text-sm text-white duration-300 hover:opacity-80"
      >
        <ExternalLink className="mr-2.5 size-4" />
        View live
      </Link>
    </div>
  );
}
