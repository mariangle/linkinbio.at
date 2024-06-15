import { cache } from "react";
import { db } from "@/server/db";
import { constructBiolink } from "@/server/utils/construct-biolink";
import { ExtendedUser } from "@/server/utils/construct-biolink";

import { dummyBiolinks } from "@/lib/constants/dummy";
import { getCurrentUser } from "@/lib/functions/auth";

export async function getBiolink() {
  const currentUser = await getCurrentUser();

  if (!currentUser) return null;

  const user = await db.user.findUnique({
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
    },
  });

  if (!user) return null;

  const biolink = constructBiolink({
    user: user as ExtendedUser,
  });

  return biolink;
}

export async function getBiolinkByUsername(username: string) {
  const dummyBiolinkUsernames = dummyBiolinks.map(
    (biolink) => biolink.user.username,
  );

  if (dummyBiolinkUsernames.includes(username)) {
    const biolink = dummyBiolinks.find(
      (biolink) => biolink.user.username === username,
    );

    return biolink;
  }

  try {
    const user = await db.user.findFirst({
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
      },
    });

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

export const getCachedBiolinkByUsername = cache(getBiolinkByUsername);
export const getCachedBiolink = cache(getBiolink);
