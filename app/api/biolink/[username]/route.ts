import { NextResponse } from "next/server";

import type {
  Biolink,
  Profile,
  User,
  Configuration,
  Settings,
  Link,
} from "@/types";

export const GET = async (req: Request) => {
  return NextResponse.json("username", { status: 200 });
};

const constructBiolink = ({
  user,
  profile,
  configuration,
  settings,
  links,
}: {
  user: User;
  profile: Profile;
  configuration: Configuration;
  settings: Settings;
  links: Link[];
}): Biolink => {
  return {
    user,
    profile,
    config: configuration,
    settings,
    links,
  };
};
