import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { auth } from "@/server/auth";

import { isValidURL } from "@/lib/utils/media-validation";
import { scrapeMetadata } from "@/server/actions/scrape-metadata";

export async function createLink({ url }: { url: string }) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({
      status: 401,
      ok: false,
      data: null,
      message: "Unauthorized",
    });
  }

  if (!url) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "A url is required",
    });
  }

  if (!isValidURL(url)) {
    return {
      status: 400,
      ok: false,
      data: null,
      message: "Invalid URL",
    };
  }

  const { title, image } = await scrapeMetadata(url);

  const link = await db.websiteLink.create({
    data: {
      title: title || "Untitled",
      url,
      archived: false,
      imageUrl: image || null,
      user: {
        connect: {
          id: session.user.id,
        },
      },
      order: 0, // ! Setting order to 0 for now, will be updated later
    },
  });

  return {
    status: 200,
    ok: true,
    data: link,
    message: "Website link created successfully",
  };
}
