import { cache } from "react";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { constructBiolink } from "@/lib/utils/construct-biolink";
import { ExtendedUser } from "@/lib/utils/construct-biolink";

export async function getBiolink() {
  const session = await auth();

  if (!session?.user?.id) return null;

  const user = await db.user.findUnique({
    where: {
      id: session.user.id,
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
