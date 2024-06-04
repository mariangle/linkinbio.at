"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useBiolinkPreviewStore } from "@/lib/store";
import { Biolink } from "@/lib/types";
import { useMediaQuery } from "@/hooks/use-media-query";
import { EyeIcon, XIcon, Share2 } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";
import { SharePopover } from "@/components/dashboard/share-popover";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/biolink/layout";

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
      <div className="h-screen w-full max-w-3xl">
        {biolink && (
          <Layout
            biolink={biolinkPreview}
            preview
            layout={biolinkPreview.config.profile?.layout}
          />
        )}
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
          "fixed inset-0 z-[99] overflow-y-auto bg-background duration-500",
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
          username={biolinkPreview.user.username}
        />
        {biolink && (
          <Layout
            biolink={biolinkPreview}
            preview
            layout={biolinkPreview.config.profile?.layout}
          />
        )}
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
        <Button variant="secondary">
          <Share2 className="mr-2.5 size-4" />
          Share
        </Button>
      </SharePopover>
    </div>
  );
}
