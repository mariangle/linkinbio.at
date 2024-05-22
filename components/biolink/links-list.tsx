import { TopIcon } from "@/components/biolink/icon";
import { Button } from "@/components/biolink/button";

import { cn } from "@/lib/utils";
import type {
  PlatformLink,
  WebsiteLink,
  IconOptions,
  ButtonOptions,
} from "@/lib/types";

export function PlatformIconLinks({
  links,
  config,
  className,
}: {
  links: PlatformLink[];
  config: IconOptions;
  className?: string;
}) {
  return (
    <>
      {links.length > 0 && (
        <div
          className={cn(
            "mt-6 flex w-full flex-wrap items-center justify-center gap-4",
            className,
          )}
        >
          {links.map((link, index) => (
            <TopIcon options={config} key={index} item={link} />
          ))}
        </div>
      )}
    </>
  );
}

export function WebsiteButtonLinks({
  links,
  config,
  className,
}: {
  links: WebsiteLink[];
  config: ButtonOptions;
  className?: string;
}) {
  return (
    <>
      {links.length > 0 && (
        <div className={cn("mt-8 w-full space-y-4", className)}>
          {links.map((link, index) => (
            <Button key={index} item={link} config={config} />
          ))}
        </div>
      )}
    </>
  );
}
