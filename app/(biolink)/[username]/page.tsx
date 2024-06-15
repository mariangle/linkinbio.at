import * as React from "react";

import { Layout } from "@/components/biolink/layout";
import { constructMetadata } from "@/lib/utils/construct-metadata";
import { getCachedBiolinkByUsername } from "@/server/actions/get-biolink";
import { ViewTracker } from "@/components/view-tracker";
import { NotFound } from "@/components/404";
import { Loading } from "@/components/loading";

export async function generateMetadata({
  params,
}: {
  params: {
    username: string;
  };
}) {
  try {
    const biolink = await getCachedBiolinkByUsername(params.username);

    if (!biolink) return null;

    return await constructMetadata({
      title: biolink.user.title ? biolink.user.title : biolink.user.username,
      image: biolink.user.image ?? "",
      description: biolink.user.bio ?? "",
      icon: biolink.user.image,
    });
  } catch (e) {
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
  const biolink = await getCachedBiolinkByUsername(params.username);

  if (!biolink) return <NotFound />;

  return (
    <React.Suspense fallback={<Loading />}>
      <ViewTracker userId={biolink.user.id} />
      <Layout biolink={biolink} />
    </React.Suspense>
  );
}
