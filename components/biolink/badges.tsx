import { Badge } from "@/lib/types";

import { FaCrown, FaGift, FaDove } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { MdVerified } from "react-icons/md";
import { Tooltip } from "@/components/ui/tooltip";

const badgeDetails: Record<Badge, { icon: IconType; name: string }> = {
  premium: { icon: IoDiamond, name: "Premium" },
  donator: { icon: FaGift, name: "Donator" },
  early: { icon: FaDove, name: "Early" },
  verified: {
    icon: MdVerified,
    name: "Verified",
  },
  creator: { icon: FaCrown, name: "Creator" },
};

interface BadgeOptions {
  color: string;
}

export function Badges({
  badges,
  options,
}: {
  badges: Badge[];
  options?: BadgeOptions;
}) {
  if (badges.length === 0) return null;

  return (
    <div className="flex gap-2">
      {badges.map((badge) => {
        const { icon: Icon, name } = badgeDetails[badge];
        return (
          <Tooltip key={badge} content={name} className="bottom-2">
            <Icon
              className="size-4"
              style={{
                color: options?.color,
              }}
            />
          </Tooltip>
        );
      })}
    </div>
  );
}
