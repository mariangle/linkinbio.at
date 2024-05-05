import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { constructBiolink } from "@/lib/utils/construct-biolink";
import { ExtendedUser } from "@/lib/utils/construct-biolink";

export async function getBiolinkServer() {
  const session = await auth();

  if (!session?.user?.id) return null;

  const user = await db.user.findUnique({
    where: {
      id: session.user.id,
    },
    include: {
      background: true,
      button: true,
      links: true,
      profile: true,
      topIcon: true,
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
        button: true,
        links: true,
        profile: true,
        topIcon: true,
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
