"use client";

import * as React from "react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

import { Layout } from "@/lib/types/enums";
import { layouts } from "@/lib/constants/layouts";
import { PhoneMockup } from "@/components/phone-mockup";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import { Button } from "@/components/ui/button";

export function LayoutForm({
  layout: defaultLayout,
  customized,
}: {
  layout: Layout;
  customized?: boolean;
}) {
  const { biolink, setBiolink } = useBiolinkPreview();
  const [layout, setLayout] = React.useState<Layout>(defaultLayout);
  const [hasCustomized, setHasCustomized] = React.useState(customized);

  React.useEffect(() => {
    if (!biolink) return;

    setBiolink({
      ...biolink,
      config: {
        ...biolink.config,
        profile: {
          ...biolink.config.profile,
          layout: layout,
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layout]);

  return (
    <div>
      <div className="mt-2 flex w-fit flex-wrap items-center justify-start gap-x-4 gap-y-6">
        {layouts.map((item, index) => {
          const selected = layout === item.value;
          return (
            <div
              onClick={async () => {
                setLayout(item.value);

                const res = await fetch("/api/manage/layout", {
                  method: hasCustomized ? "PATCH" : "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ layout: item.value }),
                });
                const { message, ok } = await res.json();

                if (ok) {
                  toast.success(message);
                  setHasCustomized(true);
                } else {
                  toast.error(message);
                }
              }}
              role="button"
              key={index}
              className={cn(
                "flex flex-col items-center justify-center border border-transparent p-2",
                selected && "rounded-xl border-border bg-primary/5",
              )}
            >
              <div className="text-xl font-semibold">{item.name}</div>
              <div className="my-8 w-fit">
                <PhoneMockup
                  biolink={biolink}
                  layout={item.value}
                  scale={false}
                  className="pointer-events-none"
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
