"use client";

import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";

export function UpgradeToPremiumBanner() {
  const [dismissed, setDismissed] = React.useState(false);

  if (dismissed) return null;

  return (
    <div className="relative h-[150px] rounded-2xl border border-white/10 bg-indigo-900 p-6">
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-3 size-3 cursor-pointer"
      >
        <X className="size-4" />
      </button>
      <div>
        <h2 className="text-lg font-semibold text-white">Upgrade to Premium</h2>
        <p className="mb-3 mt-1 text-sm text-gray-100 dark:text-gray-300">
          Unlock advanced customization options for your biolink page and get
          access to premium features.
        </p>
        <Link
          href="https://buy.stripe.com/test_8wMg2Y5rBdAjgA8aEE"
          className={cn(buttonVariants())}
        >
          Upgrade Now
        </Link>
      </div>
    </div>
  );
}
