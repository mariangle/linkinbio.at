import { platforms } from "@/lib/constants/platforms";

export function getPlatformByProvider(provider: string) {
  const foundPlatform = platforms.find(
    (link) => link.name.toLowerCase() === provider.toLowerCase(),
  );

  return foundPlatform;
}
