"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const benefits = [
  "Fonts, layouts and unlimited colors",
  "Embed spotify, youtube and soundcloud content",
  "Remove linkinbio.at branding and much more",
];

export function UpgradeToPremiumBanner() {
  const [closed, setClosed] = React.useState(false);

  if (closed) {
    return null;
  }

  return (
    <div className="relative rounded-2xl border border-white/10 bg-indigo-900 p-6">
      <button className="absolute right-4 top-4">
        <X onClick={() => setClosed(true)} className="size-4 text-white" />
      </button>
      <div>
        <h2 className="text-xl font-semibold text-white">
          Unlock premium features
        </h2>
        <p className="mb-3 mt-1 max-w-prose text-sm text-gray-100 dark:text-gray-300">
          Unlock advanced customization options for your biolink page and get
          access to premium features for only €14.99 forever.
        </p>
        <ul className="mb-4 list-inside list-disc space-y-1 text-sm text-gray-100 dark:text-gray-300">
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
        <Button className="rounded-full">Upgrade now</Button>
      </div>
    </div>
  );
}
