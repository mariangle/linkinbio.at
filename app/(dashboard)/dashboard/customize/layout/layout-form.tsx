"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { LayoutPreview } from "@/components/dashboard/layout-preview";

import { Layout } from "@/lib/types/enums";
import { layouts } from "@/lib/constants/layouts";
import { useBiolinkPreviewStore } from "@/lib/store";
import { useFormSubmit } from "@/hooks/use-form-action";
import { Button } from "@/components/ui/button";

export function LayoutForm({ layout: defaultLayout }: { layout?: Layout }) {
  const { biolink, setBiolink } = useBiolinkPreviewStore();
  const [layout, setLayout] = React.useState<Layout>(
    defaultLayout ?? Layout.Standard,
  );

  const { loading, dirty, submit } = useFormSubmit({
    initialData: {
      layout: defaultLayout,
    },
    formValues: {
      layout: layout,
    },
    endpoint: "/api/manage/layout",
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
                "flex flex-col items-center justify-center gap-2 p-2",
              )}
            >
              <div className="text-lg font-semibold">{item.name}</div>
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
