import urlMetadata from "url-metadata";

interface FavIcon {
  rel: string;
  type?: string;
  href: string;
  sizes: string;
}

interface MetaData {
  requestUrl: string;
  url: string;
  title: string;
  image: string;
  favicons: FavIcon[];
  "og:title": string;
  "og:image": string;
  "og:image:secure_url": string;
  "og:image:type": string;
  "og:image:width": string;
  "og:image:height": string;
  "twitter:title": string;
  "twitter:description": string;
  "twitter:image": string;
  "twitter:image:alt": string;
  "twitter:card": string;
  "twitter:site": string;
  "twitter:site:id": string;
  "twitter:url": string;
  responseBody: string;
}

function getLargestFavicon(favicons: FavIcon[]): string {
  if (favicons.length === 0) return "";

  const sortedFavicons = favicons.sort((a, b) => {
    const [aWidth, aHeight] = a.sizes.split("x").map(Number);
    const [bWidth, bHeight] = b.sizes.split("x").map(Number);

    return bWidth * bHeight - aWidth * aHeight;
  });

  return sortedFavicons[0].href;
}

export async function scrapeMetadata(url: string) {
  try {
    const res = await urlMetadata(url);

    const metadata = res as MetaData;

    const title =
      metadata["og:title"] || metadata["twitter:title"] || metadata.title;
    const image =
      metadata["og:image"] ||
      metadata["twitter:image"] ||
      getLargestFavicon(metadata.favicons) ||
      metadata.image;

    return {
      title: title,
      image: image,
    };
  } catch (e) {
    console.error(e);
    return {};
  }
}
