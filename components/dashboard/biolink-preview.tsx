"use client";

import * as React from "react";

import { PhoneMockup } from "@/components/phone-mockup";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";
import { getCurrentUserBiolink } from "@/lib/utils/get-biolink";

export function BiolinkPreview() {
  const { biolink, setBiolink, setLoading } = useBiolinkPreview();

  React.useEffect(() => {
    async function fetchAndSetBiolink() {
      const biolink = await getCurrentUserBiolink();
      if (biolink) setBiolink(biolink);
      setLoading(false);
    }
    if (!biolink) fetchAndSetBiolink();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [biolink]);

  return <PhoneMockup biolink={biolink} layout={biolink?.config.layout} />;
}
