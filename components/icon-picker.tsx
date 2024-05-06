import * as React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaGlobe } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { icons, hasRedundantIcon } from "@/lib/constants/icons";

export function IconPicker({
  iconId,
  setIconId,
}: {
  iconId?: number;
  setIconId: (iconId: number) => void;
}) {
  const [search, setSearch] = React.useState("");
  const [filteredIcons, setFilteredIcons] = React.useState(icons);
  const icon = icons.find((icon) => icon.id === iconId);

  React.useEffect(() => {
    hasRedundantIcon();
  }, []); // TODO: Remove this once i've added all the icons to the list

  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "flex rounded-full border border-border bg-foreground p-1",
        )}
      >
        {icon ? (
          <icon.value className="size-4 text-background" />
        ) : (
          <FaGlobe className="size-4 text-background" />
        )}
      </PopoverTrigger>
      <PopoverContent className="bg-secondary">
        <div className="mb-4 flex items-center gap-2">
          <Input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setFilteredIcons(
                icons.filter((icon) =>
                  icon.label.toLowerCase().includes(search.toLowerCase()),
                ),
              );
            }}
          />
          <button
            onClick={() => {
              setSearch("");
              setFilteredIcons(icons);
            }}
          >
            clear
          </button>
        </div>
        <div className="grid h-32 grid-cols-6 gap-2 overflow-y-auto">
          {filteredIcons.map((item, index) => (
            <button
              onClick={() => setIconId(item.id)}
              key={index}
              className="grid size-8 cursor-pointer place-content-center rounded-sm border bg-input"
            >
              <item.value />
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
