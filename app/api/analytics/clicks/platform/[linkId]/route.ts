import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { startOfDay, endOfDay } from "date-fns";
import { getGeoData } from "@/lib/utils/get-geo-details";

export async function POST(
  req: Request,
  { params }: { params: { linkId: string } },
) {
  if (!params.linkId) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "Link id is required",
    });
  }

  const data = await getGeoData();

  if (data?.ipAddress) {
    const existingClick = await db.websiteClick.findFirst({
      where: {
        linkId: params.linkId,
        ipAddress: data.ipAddress,
        timestamp: {
          gte: startOfDay(new Date()),
          lte: endOfDay(new Date()),
        },
      },
    });

    if (existingClick) {
      return NextResponse.json({
        status: 200,
        ok: true,
        data: existingClick,
        message: "Click already tracked",
      });
    }
  }

  try {
    const click = await db.platformClick.create({
      data: {
        linkId: params.linkId,
        ipAddress: data?.ipAddress,
      },
    });

    return NextResponse.json({
      status: 200,
      ok: true,
      data: click,
      message: "Click tracked successfully",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      ok: false,
      data: null,
      message: "Failed to track click",
    });
  }
}
