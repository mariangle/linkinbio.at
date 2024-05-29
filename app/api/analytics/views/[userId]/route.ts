import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { startOfDay, endOfDay } from "date-fns";
import { getGeoData } from "@/server/actions/get-geo-data";

export async function POST(
  req: Request,
  { params }: { params: { userId: string } },
) {
  if (!params.userId) {
    return NextResponse.json({
      status: 400,
      ok: false,
      data: null,
      message: "User id is required",
    });
  }

  const data = await getGeoData();

  if (data?.ipAddress) {
    const existingViewToday = await db.userView.findFirst({
      where: {
        userId: params.userId,
        ipAddress: data.ipAddress,
        timestamp: {
          gte: startOfDay(new Date()),
          lte: endOfDay(new Date()),
        },
      },
    });

    if (existingViewToday) {
      return NextResponse.json({
        status: 200,
        ok: true,
        data: existingViewToday,
        message: "View already tracked",
      });
    }
  }

  try {
    const view = await db.userView.create({
      data: {
        userId: params.userId,
        ipAddress: data?.ipAddress,
        country: data?.country,
      },
    });

    return NextResponse.json({
      status: 200,
      ok: true,
      data: view,
      message: "View tracked successfully",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      ok: false,
      data: null,
      message: "Failed to track view",
    });
  }
}
