"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Layout } from "@/types/enums";
import { layouts } from "@/constants/layouts";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { dummyBiolink } from "@/constants/dummy";

import { Button } from "@/components/ui/button";

export function LayoutForm() {
  const [layout, setLayout] = React.useState<Layout>(Layout.Standard);

  return (
    <div className="rounded-lg bg-secondary p-4">
      <div className="w-full">
        <div className="mt-3 font-semibold">Weather Effect</div>
        <div className="mt-2 flex flex-col items-center justify-center gap-4">
          {layouts.map((item, index) => {
            const selected = layout === item;
            return (
              <div
                key={index}
                className={cn(
                  "flex flex-col items-center justify-center p-2",
                  selected && "rounded-xl border",
                )}
              >
                <div className="text-xl font-semibold">{item}</div>
                <div className="my-4">
                  <PhoneMockup biolink={dummyBiolink} layout={item} />
                </div>
                <Button onClick={() => setLayout(item)}>Select</Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
