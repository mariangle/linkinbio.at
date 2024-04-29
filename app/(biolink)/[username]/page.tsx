import { Layout } from "@/components/biolink/layout";
import { constructMetadata } from "@/lib/utils/construct-metadata";

import type { Biolink } from "@/lib/types";

export async function getServerBiolink(username: string) {
  const res = await fetch(`${process.env.DEV_URL}/api/biolink/${username}`, {
    cache: "no-store",
  });
  const apiResponse = await res.json();
  return apiResponse.data;
}

export async function generateMetadata({
  params,
}: {
  params: {
    username: string;
  };
}) {
  const biolink: Biolink = await getServerBiolink(params.username);

  if (!biolink) return null;

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
  const biolink: Biolink = await getServerBiolink(params.username);

  if (!biolink) return "not found";

  return (
    <div>
      <Layout biolink={biolink} layout={biolink.config.layout} />
    </div>
  );
}
