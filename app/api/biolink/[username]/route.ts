import { NextResponse } from "next/server";
import { dummyBiolink } from "@/lib/constants/dummy";

import type { Biolink, User, Config, Settings, Link } from "@/types";

export async function GET(req: Request): Promise<NextResponse<Biolink>> {
  const biolink = constructBiolink({
    user: dummyBiolink.user,
    config: dummyBiolink.config,
    settings: dummyBiolink.settings,
    links: dummyBiolink.links || [],
  });

  return NextResponse.json(biolink, { status: 200 });
}

const constructBiolink = ({
  user,
  config,
  settings,
  links,
}: {
  user: User;
  config: Config;
  settings: Settings;
  links: Link[];
}): Biolink => {
  return {
    user,
    config,
    settings,
    links,
  };
};
