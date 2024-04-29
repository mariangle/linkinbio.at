import { LayoutForm } from "../../_components/layout-form";

import { getBiolinkServer } from "@/lib/utils/get-biolink";

export default async function page() {
  const biolink = await getBiolinkServer();

  if (!biolink) return null;

  return (
    <div className="space-y-8 py-8">
      <LayoutForm
        data={{
          layout: biolink.config?.layout,
        }}
      />
    </div>
  );
}
