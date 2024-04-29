import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { constructBiolink } from "@/lib/utils/construct-biolink";
import { ExtendedUser } from "@/lib/utils/construct-biolink";

export async function getCurrentUserBiolink() {
  const res = await fetch(`/api/biolink/me`, {
    cache: "no-store",
  });
  const apiResponse = await res.json();

  return apiResponse.data;
}

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
      config: true,
      links: true,
      userTitle: true,
      topIcon: true,
      embed: true,
      effect: true,
    },
  });

  if (!user) return null;

  const biolink = constructBiolink({
    user: user as ExtendedUser,
  });

  return biolink;
}
