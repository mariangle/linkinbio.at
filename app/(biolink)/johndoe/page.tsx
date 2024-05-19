import * as React from "react";

import { Layout } from "@/components/biolink/layout";
import { constructMetadata } from "@/lib/utils/construct-metadata";
import { Loading } from "@/components/loading";
import { dummyBiolink } from "@/lib/dummy";

export async function generateMetadata({
  params,
}: {
  params: {
    username: string;
  };
}) {
  try {
    return await constructMetadata({
      title: dummyBiolink.user.title ?? dummyBiolink.user.username,
      image: "",
      description: "biolink.user.bio",
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
  return (
    <React.Suspense fallback={<Loading />}>
      <Layout biolink={dummyBiolink} />
    </React.Suspense>
  );
}
