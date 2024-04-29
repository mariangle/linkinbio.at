import { getBiolinkServer } from "@/lib/utils/get-biolink";
import { LinkForm } from "./link-form";
import { NewLinkForm } from "./new-link-form";

export default async function Links() {
  const biolink = await getBiolinkServer();

  if (!biolink) return null;

  return (
    <div>
      <NewLinkForm />
      <div className="mt-4">
        <div>
          <div>Your links</div>
          <ul className="mt-4 space-y-4">
            {biolink.links?.map((item) => (
              <li key={item.id}>
                <LinkForm item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
