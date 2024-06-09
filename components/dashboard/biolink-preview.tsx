"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useBiolinkPreviewStore } from "@/lib/store";
import { Biolink } from "@/lib/types";
import { useMediaQuery } from "@/hooks/use-media-query";
import { EyeIcon, ExternalLink } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";
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
  } = useBiolinkPreviewStore();

  React.useEffect(() => {
    if (biolinkGlobalState) {
      setBiolinkPreview(biolinkGlobalState);
    } else {
      setBiolink(biolink);
    }
  }, [biolink, biolinkGlobalState, setBiolink]);

  if (!isMounted) return null;

  if (isDesktop) {
    return (
      <div className="glassmorphism h-screen w-full overflow-hidden lg:max-w-lg xl:max-w-2xl">
        <div className="flex items-center justify-between border-b border-b-white/10 p-1 px-2">
          <div className="flex items-center gap-2 font-medium text-foreground">
            <EyeIcon className="size-4" />
            Preview
          </div>
          <Button variant="secondary">
            <ExternalLink className="mr-2 size-4" />
            View live
          </Button>
        </div>
        <div className="relative h-[calc(100%-43px)] p-2">
          {biolink && (
            <Layout
              biolink={biolinkPreview}
              preview
              layout={biolinkPreview.config.profile?.layout}
              className="rounded-sm"
            />
          )}
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
