import { NextResponse } from "next/server";

import urlMetadata from "url-metadata";

export async function POST(req: Request) {
  const { url } = await req.json();

  if (!url) {
    return NextResponse.json({
      status: 400,
      ok: false,
      message: "Url is required",
    });
  }

  try {
    const metadata = await urlMetadata(url);

    const title =
      metadata["og:title"] || metadata["twitter:title"] || metadata.title;
    const description =
      metadata["og:description"] ||
      metadata["twitter:description"] ||
      metadata.description;
    const image =
      metadata["og:image"] || metadata["twitter:image"] || metadata.image;
    console.log({
      title,
      description,
      image,
    });
    // @ts-ignore - will create a metadata type
    const favicons = metadata.favicons.map((favicon) => favicon.href);
    const imageUrl = favicons.length > 0 ? favicons[0] : image;

    console.log(metadata);

    return NextResponse.json({
      status: 200,
      ok: true,
      data: {
        title,
        description,
        image: imageUrl,
      },
      message: "Meta image extracted successfully",
    });
  } catch (error) {
    console.error("Error fetching and parsing HTML:", error);
    return NextResponse.json({
      status: 500,
      ok: false,
      message: "Failed to fetch and parse meta data",
    });
  }
}
