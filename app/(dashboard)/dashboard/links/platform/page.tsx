import { getCachedBiolink } from "@/server/actions/get-biolink";
import { PlatformLinkForm } from "./platform-link-form";
import { PlatformOptions } from "./platform-options";

export default async function PlatformLinks() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <div>
      <PlatformOptions />
      <ul className="mt-8 space-y-4">
        {biolink.links.platform.map((item, index) => (
          <li key={index}>
            <PlatformLinkForm item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
