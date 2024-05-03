import { Layout } from "@/components/biolink/layout";
import { constructMetadata } from "@/lib/utils/construct-metadata";
import { getBiolinkByUsername } from "@/lib/utils/get-biolink";

export async function generateMetadata({
  params,
}: {
  params: {
    username: string;
  };
}) {
  try {
    const biolink = await getBiolinkByUsername(params.username);

    if (!biolink) return null;

    return await constructMetadata({
      title: biolink.user.title
        ? `${biolink.user.title} (@${biolink.user.username})`
        : `${biolink.user.username}`,
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
  const biolink = await getBiolinkByUsername(params.username);

  if (!biolink) return "not found";

  return <Layout biolink={biolink} />;
}
