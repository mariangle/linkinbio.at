import { Layout } from "@/components/biolink/layout";
import { constructMetadata } from "@/lib/utils/construct-metadata";
import { getCachedBiolinkByUsername } from "@/lib/utils/get-biolink";
import { ViewTracker } from "@/components/view-tracker";

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
      description: biolink.user.bio || "Connect with me on social media.",
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

  if (!biolink)
    return (
      <div>
        <h1>User not found</h1>
      </div>
    );

  return (
    <>
      <ViewTracker userId={biolink.user.id} />
      <Layout biolink={biolink} />
    </>
  );
}
