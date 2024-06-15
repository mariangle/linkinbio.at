import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { getCurrentUser } from "@/lib/functions/auth";
import { isValidURL } from "@/lib/utils/media-validation";
import { scrapeMetadata } from "@/server/actions/scrape-metadata";

import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({
      status: 401,
      ok: false,
      data: null,
      message: "Unauthorized",
    });
  }

  const { url } = await req.json();

  if (!url) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "A url is required",
    });
  }

  if (!isValidURL(url)) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "Invalid URL",
    });
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
          id: currentUser.id,
        },
      },
      order: 0, // ! Setting order to 0 for now, will be updated later
    },
  });

  return NextResponse.json({
    status: 200,
    ok: true,
    data: link,
    message: "Website link created successfully",
  });
}
