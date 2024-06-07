import { getCachedBiolink } from "@/server/actions/get-biolink";
import { WebsiteLinkForm } from "./website-link-form";
import { NewWebsiteLinkForm } from "./new-website-link-form";

export default async function WebsiteLinks() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <>
      <NewWebsiteLinkForm />
      <ul className="mt-8 space-y-4">
        {biolink.links.website.map((item, index) => (
          <li key={index}>
            <WebsiteLinkForm item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
