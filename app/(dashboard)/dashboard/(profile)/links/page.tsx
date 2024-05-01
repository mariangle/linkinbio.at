import { getBiolinkServer } from "@/lib/utils/get-biolink";
import { LinkForm } from "./link-form";
import { NewLinkForm } from "./new-link-form";
import { PageWithPreview } from "@/components/dashboard/page";

export default async function Links() {
  const biolink = await getBiolinkServer();

  if (!biolink) return null;

  return (
    <PageWithPreview biolink={biolink}>
      <NewLinkForm />
      <ul className="mt-4 space-y-4">
        {biolink.links?.map((item) => (
          <li key={item.id}>
            <LinkForm item={item} />
          </li>
        ))}
      </ul>
    </PageWithPreview>
  );
}
