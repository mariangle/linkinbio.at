"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { PhoneMockup } from "@/components/phone-mockup";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import { Biolink } from "@/lib/types";
import { useMediaQuery } from "@/hooks/use-media-query";
import { EyeIcon, XIcon } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";

export function BiolinkPreview({ biolink }: { biolink: Biolink }) {
  const isMounted = useMounted();
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const [previewOpen, setPreviewOpen] = React.useState(false);
  const [biolinkPreview, setBiolinkPreview] = React.useState<Biolink>(biolink);
  const { biolink: biolinkGlobalState, setBiolink } = useBiolinkPreview();

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
      <div className="grid h-screen w-full max-w-2xl place-content-center overflow-y-auto border-l">
        <PhoneMockup biolink={biolinkPreview} />
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-[100]">
      <button
        onClick={() => setPreviewOpen(!previewOpen)}
        className="absolute bottom-0 right-0 z-[9999] flex items-center gap-2 rounded-full bg-primary/50 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-2xl"
      >
        {previewOpen ? (
          <XIcon className="size-4" />
        ) : (
          <EyeIcon className="size-4" />
        )}
        {previewOpen ? "Close" : "Preview"}
      </button>
      <div
        className={cn(
          "fixed inset-0 z-[99] grid place-content-center overflow-y-auto bg-background duration-500",
          previewOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0",
        )}
      >
        <PhoneMockup biolink={biolinkPreview} />
      </div>
    </div>
  );
}
