import { getCachedBiolink } from "@/server/actions/get-biolink";
import { TypographyForm } from "./typography-form";

export default async function Typography() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return (
    <div>
      <div className="my-4 flex items-center gap-4 text-base font-semibold">
        <div className="whitespace-nowrap">Border</div>
        <div className="h-px w-full bg-border"></div>
      </div>
      <TypographyForm data={biolink.config?.profile} />
    </div>
  );
}
