import Image from "next/image";

import { WebsiteLink } from "@/lib/types";
import { useTracking } from "@/hooks/use-tracking";

interface FeaturedLinkOptions {
  borderRadius: number;
}

export function FeaturedLink({
  item,
  config,
}: {
  item: WebsiteLink;
  config: FeaturedLinkOptions;
}) {
  const { trackClick } = useTracking();

  const redirect = async () => {
    window.open(item.url, "_blank");

    if (!item.id) return;

    await trackClick(item.id, false);
  };

  return (
    <button
      onClick={redirect}
      style={{
        borderRadius: config.borderRadius,
      }}
      className="group relative h-[200px] w-full overflow-hidden bg-black text-white md:h-[250px]"
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black"></div>
      {item.imageUrl && (
        <Image
          alt="image"
          width={500}
          height={500}
          className="z-20 h-full w-full object-cover opacity-100 duration-300 group-hover:opacity-75"
          src={item.imageUrl}
          unoptimized
        />
      )}
      <span className="absolute inset-x-0 bottom-0 z-50 p-4 text-lg">
        {item.title}
      </span>
    </button>
  );
}
