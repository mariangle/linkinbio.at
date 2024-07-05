import { cache } from "react";
import { db } from "@/server/db";
import { constructBiolink } from "@/server/utils/construct-biolink";
import { ExtendedUser } from "@/server/utils/construct-biolink";

import { getCurrentUser } from "@/lib/functions/auth";
export async function getBiolink(username?: string) {
  try {
    let user;

    if (username) {
      user = await db.user.findFirst({
        where: {
          username: username,
        },
        include: {
          background: true,
          buttons: true,
          websiteLinks: true,
          platformLinks: true,
          profile: true,
          icons: true,
          effect: true,
          spotify: true,
          youtube: true,
          soundcloud: true,
          views: true,
        },
      });
    } else {
      const currentUser = await getCurrentUser();
      if (!currentUser) return null;

      user = await db.user.findUnique({
        where: {
          id: currentUser.id,
        },
        include: {
          background: true,
          buttons: true,
          websiteLinks: true,
          platformLinks: true,
          profile: true,
          icons: true,
          effect: true,
          spotify: true,
          youtube: true,
          soundcloud: true,
          views: true,
        },
      });
    }

    if (!user) return null;

    const biolink = constructBiolink({
      user: user as ExtendedUser,
    });

    return biolink;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export const getCachedBiolink = cache(getBiolink);
