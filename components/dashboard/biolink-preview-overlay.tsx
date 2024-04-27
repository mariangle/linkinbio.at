"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Eye, X } from "lucide-react";
import { BiolinkPreview } from "./biolink-preview";

export function BiolinkPreviewMobile() {
  const [previewOpen, setPreviewOpen] = React.useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-[100]">
        <button
          onClick={() => setPreviewOpen(!previewOpen)}
          className="flex items-center gap-2 rounded-full bg-primary/50 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-2xl"
        >
          {previewOpen ? <X className="size-4" /> : <Eye className="size-4" />}
          {previewOpen ? "Close" : "Preview"}
        </button>
      </div>
      <div
        className={cn(
          "fixed inset-0 z-[99] grid place-content-center overflow-y-auto bg-background duration-500",
          previewOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0",
        )}
      >
        <BiolinkPreview />
      </div>
    </>
  );
}
