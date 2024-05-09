"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { LayoutPreview } from "@/components/dashboard/layout-preview";

import { Layout } from "@/lib/types/enums";
import { layouts } from "@/lib/constants/layouts";
import { PhoneMockup } from "@/components/phone-mockup";
import { useBiolinkPreviewStore } from "@/stores/biolink-preview-store";
import { useFormSubmit } from "@/hooks/use-form-submit";
import { Button } from "@/components/ui/button";

export function LayoutForm({
  layout: defaultLayout,
  modified,
}: {
  layout: Layout;
  modified?: boolean;
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
          return (
            <div
              onClick={async () => {
                setLayout(item.value);
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
