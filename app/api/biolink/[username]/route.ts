import { NextResponse } from "next/server";
import { dummyBiolink } from "@/constants/dummy";

import type { Biolink, Profile, User, Config, Settings, Link } from "@/types";

export async function GET(req: Request): Promise<NextResponse<Biolink>> {
  const biolink = constructBiolink({
    user: dummyBiolink.user,
    profile: dummyBiolink.profile,
    config: dummyBiolink.config,
    settings: dummyBiolink.settings,
    links: dummyBiolink.links,
  });

  return NextResponse.json(biolink, { status: 200 });
}

const constructBiolink = ({
  user,
  profile,
  config,
  settings,
  links,
}: {
  user: User;
  profile: Profile;
  config: Config;
  settings: Settings;
  links: Link[];
}): Biolink => {
  return {
    user,
    profile,
    config,
    settings,
    links,
  };
};
