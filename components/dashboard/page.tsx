import { cn } from "@/lib/utils";

import { BiolinkPreview } from "@/components/dashboard/biolink-preview";
import { Biolink } from "@/lib/types";

export function PageWithPreview({
  biolink,
  children,
  className,
}: {
  biolink?: Biolink;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex flex-row">
      <div
        className={cn(
          "mx-auto max-h-screen w-full overflow-y-auto overflow-x-hidden p-4 pt-12",
          className,
        )}
      >
        <div className="mx-auto max-w-screen-md space-y-8">{children}</div>
      </div>
      {biolink && <BiolinkPreview biolink={biolink} />}
    </div>
  );
}

export function PageHeading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mb-3 whitespace-nowrap text-lg font-semibold tracking-wide">
      {children}
    </h1>
  );
}
