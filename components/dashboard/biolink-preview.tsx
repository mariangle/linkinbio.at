"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { useBiolinkPreviewStore } from "@/lib/store";
import { Biolink } from "@/lib/types";
import { useMediaQuery } from "@/hooks/use-media-query";
import { EyeIcon, ExternalLink } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";
import { Button, buttonVariants } from "@/components/ui/button";
import { Layout } from "@/components/biolink/layout";

export function BiolinkPreview({ biolink }: { biolink: Biolink }) {
  const isMounted = useMounted();
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const [biolinkPreview, setBiolinkPreview] = React.useState<Biolink>(biolink);
  const {
    biolink: biolinkGlobalState,
    setBiolink,
    open,
  } = useBiolinkPreviewStore();

  React.useEffect(() => {
    if (biolinkGlobalState) {
      setBiolinkPreview(biolinkGlobalState);
    } else {
      setBiolink(biolink);
    }
  }, [biolink, biolinkGlobalState, setBiolink]);

  if (!isMounted) return null;

  // h-[calc(100%-70px)]

  if (isDesktop) {
    return (
      <div className="glassmorphism z-10 h-screen w-full max-w-xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-b-white/10 p-4">
          <Button variant="secondary">
            <EyeIcon className="mr-2 size-4" />
            Preview
          </Button>
          <Link
            href={`/${biolinkPreview.user.username}`}
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            <ExternalLink className="mr-2 size-4" />
            View live
          </Link>
        </div>
        <div className="relative flex h-full justify-center overflow-y-auto pt-24">
          <div className="h-[calc(100%-70px)] max-h-[700px] w-[344px] rounded-[1.6rem] border bg-white p-1 shadow-2xl dark:bg-zinc-800">
            {biolink && (
              <Layout
                biolink={biolinkPreview}
                preview
                layout={biolinkPreview.config.profile?.layout}
                className="overflow-y-auto rounded-[1.4rem]"
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-[99] overflow-y-auto duration-300",
        open ? " opacity-100" : "pointer-events-none opacity-0",
      )}
    >
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
