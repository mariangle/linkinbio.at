import { db } from "@/server/db";
import { startOfDay, endOfDay } from "date-fns";
import { getGeoData } from "@/server/actions/get-geo-data";

export async function trackView(userId: string) {
  try {
    const data = await getGeoData();

    if (data?.ipAddress) {
      const existingViewToday = await db.userView.findFirst({
        where: {
          userId,
          ipAddress: data.ipAddress,
          timestamp: {
            gte: startOfDay(new Date()),
            lte: endOfDay(new Date()),
          },
        },
      });

      if (existingViewToday) {
        return null;
      }
    }

    await db.userView.create({
      data: {
        userId,
        ipAddress: data?.ipAddress,
        country: data?.country,
      },
    });
  } catch (e) {
    console.error(e);
  }
}

export async function ViewTracker({ userId }: { userId: string }) {
  await trackView(userId);

  return null;
}
