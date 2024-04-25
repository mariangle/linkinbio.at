"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Layout } from "@/types/enums";
import { layouts } from "@/constants/layouts";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { dummyBiolink } from "@/constants/dummy";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import { Button } from "@/components/ui/button";

export function LayoutForm() {
  const { biolink, updateBiolink } = useBiolinkPreview();
  const [layout, setLayout] = React.useState<Layout>(Layout.Standard);

  React.useEffect(() => {
    if (!biolink) return;

    updateBiolink({
      ...biolink,
      config: {
        ...biolink.config,
        layout,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layout]);

  return (
    <div>
      <div className="mt-2 flex w-fit flex-wrap items-center justify-start gap-4">
        {layouts.map((item, index) => {
          const selected = layout === item.value;
          return (
            <div
              onClick={() => setLayout(item.value)}
              role="button"
              key={index}
              className={cn(
                "flex flex-col items-center justify-center p-2",
                selected && "rounded-xl border bg-primary/5",
              )}
            >
              <div className="text-xl font-semibold">{item.label}</div>
              <div className="my-4 w-fit">
                <PhoneMockup
                  biolink={dummyBiolink}
                  layout={item.value}
                  scale={false}
                />
              </div>
              <Button>Select</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
