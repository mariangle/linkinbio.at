import { getBiolinkServer } from "@/lib/utils/get-biolink";
import { WebsiteLinkForm } from "./website-link-form";
import { NewLinkForm } from "./new-link-form";
import { PlatformLinkForm } from "./platform-link-form";
import { PageWithPreview } from "@/components/dashboard/page";

export default async function Links() {
  const biolink = await getBiolinkServer();

  if (!biolink) return null;

  return (
    <PageWithPreview biolink={biolink}>
      <NewLinkForm />
      <div>
        <h3 className="text-lg font-semibold">Platform Links</h3>
      </div>
      <ul className="mt-4 space-y-4">
        {biolink.links.platform.map((item, index) => (
          <li key={index}>
            <PlatformLinkForm item={item} />
          </li>
        ))}
      </ul>
      <div>
        <h3 className="text-lg font-semibold">Website Links</h3>
      </div>
      <ul className="mt-4 space-y-4">
        {biolink.links.website.map((item, index) => (
          <li key={index}>
            <WebsiteLinkForm item={item} />
          </li>
        ))}
      </ul>
    </PageWithPreview>
  );
}
