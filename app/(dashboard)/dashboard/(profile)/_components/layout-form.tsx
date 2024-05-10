"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { LayoutPreview } from "@/components/dashboard/layout-preview";

import { Layout } from "@/lib/types/enums";
import { layouts } from "@/lib/constants/layouts";
import { LockedPremiumIcon } from "@/components/dashboard/premium-feature";
import { useBiolinkPreviewStore } from "@/stores/biolink-preview-store";
import { useFormSubmit } from "@/hooks/use-form-submit";
import { Button } from "@/components/ui/button";

export function LayoutForm({
  layout: defaultLayout,
  modified,
  premium,
}: {
  layout: Layout;
  modified?: boolean;
  premium: boolean;
}) {
  const { biolink, setBiolink } = useBiolinkPreviewStore();
  const [layout, setLayout] = React.useState<Layout>(defaultLayout);

  const { loading, dirty, submit } = useFormSubmit({
    initialData: {
      layout: defaultLayout,
    },
    formValues: {
      layout: layout,
    },
    endpoint: "/api/manage/layout",
    modified,
  });

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
      <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-3">
        {layouts.map((item, index) => {
          const selected = layout === item.value;
          const disabled = !premium && item.premium;
          return (
            <div
              onClick={async () => {
                if (premium) setLayout(item.value);
              }}
              role="button"
              key={index}
              className={cn(
                "flex flex-col items-center justify-center gap-2 p-2",
                disabled && "opacity-70",
              )}
            >
              <div className="flex items-center gap-2">
                <div className="text-xl font-semibold">{item.name}</div>
                {disabled && <LockedPremiumIcon />}
              </div>
              <div
                className={cn(
                  "flex w-full justify-center border border-transparent px-4 py-4",
                  selected && "rounded-xl border-border bg-primary/35",
                )}
              >
                <LayoutPreview layout={item.value} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end">
        <Button
          disabled={!dirty}
          loading={loading}
          onClick={async () => await submit()}
          className="w-full max-w-[200px] rounded-full"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
