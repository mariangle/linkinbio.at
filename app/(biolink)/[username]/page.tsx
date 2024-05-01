import { Layout } from "@/components/biolink/layout";
import { constructMetadata } from "@/lib/utils/construct-metadata";

import type { Biolink } from "@/lib/types";

export async function getServerBiolink(username: string) {
  const res = await fetch(
    `${process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://linkinbio.at"}/api/biolink/${username}`,
    {
      cache: "no-store",
    },
  );
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
    title: biolink.user.title
      ? `${biolink.user.title} (@${biolink.user.username})`
      : `${biolink.user.username}`,
    image: biolink.user.image ?? "",
    description: biolink.user.bio || "Connect with me on social media.",
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

  return <Layout biolink={biolink} />;
}
