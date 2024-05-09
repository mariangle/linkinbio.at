"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { PhoneMockup } from "@/components/phone-mockup";
import { useBiolinkPreviewStore } from "@/stores/biolink-preview-store";
import { Biolink } from "@/lib/types";
import { useMediaQuery } from "@/hooks/use-media-query";
import { EyeIcon, XIcon } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";
import { SharePopover } from "@/components/dashboard/share-dialog";

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
        <div className="absolute right-4 top-4">
          <SharePopover username={biolink.user.username} />
        </div>
        <PhoneMockup className="pointer-events-none" biolink={biolinkPreview} />
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
        <PhoneMockup className="pointer-events-none" biolink={biolinkPreview} />
      </div>
    </>
  );
}
