import { Layout } from "@/components/biolink/layout";
import { constructMetadata } from "@/lib/utils/construct-metadata";

import type { Biolink } from "@/types";

async function getBiolink(username: string) {
  try {
    const res = await fetch(`${process.env.DEV_URL}/api/biolink/${username}`, {
      cache: "no-store",
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: {
    username: string;
  };
}) {
  const biolink: Biolink = await getBiolink(params.username);

  return await constructMetadata({
    title: `${biolink.user.title} (@${biolink.user.username})  \u00b7 bio.link`,
    image: biolink.user.image ?? "",
    description: biolink.user.bio ?? "bio.link",
  });
}

export default async function Page({
  params,
}: {
  params: {
    username: string;
  };
}) {
  const biolink: Biolink = await getBiolink(params.username);

  return (
    <div>
      <Layout biolink={biolink} layout={biolink.config.layout} />
    </div>
  );
}
