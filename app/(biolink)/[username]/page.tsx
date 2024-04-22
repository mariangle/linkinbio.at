import {
  ClassicLayout,
  GlassmorphismLayout,
} from "@/components/biolink/layout";
import { dummyBiolink } from "@/constants/dummy";
import { constructMetadata } from "@/actions/construct-metadata";

import type { Biolink } from "@/types";

export async function generateMetadata({
  params,
}: {
  params: {
    username: string;
  };
}) {
  const biolink = dummyBiolink;

  return await constructMetadata({
    title: `${biolink.profile.title} (@${biolink.user.username})  \u00b7 bio.link`,
    image: biolink.profile.image,
    description: biolink.profile.bio,
  });
}

async function getBiolink(username: string) {
  try {
    const res = await fetch(`${process.env.URL}/api/biolink/${username}`);
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function Page({
  params,
}: {
  params: {
    username: string;
  };
}) {
  const biolink: Biolink = await getBiolink(params.username);

  if (params.username === "a") {
    return (
      <div>
        <ClassicLayout biolink={dummyBiolink} />
      </div>
    );
  }
  return (
    <div>
      <GlassmorphismLayout biolink={dummyBiolink} />
    </div>
  );
}
