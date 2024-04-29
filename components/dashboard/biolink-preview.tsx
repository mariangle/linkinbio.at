"use client";

import * as React from "react";

import { usePathname } from "next/navigation";
import { biolinkLinks } from "@/lib/constants/nav-links";
import type { Biolink } from "@/types";
import { PhoneMockup } from "@/components/phone-mockup";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";

export async function fetchBiolink(username: string) {
  try {
    const res = await fetch(`/api/biolink/${username}`, {
      cache: "no-store",
    });
    console.log("fetching");
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function BiolinkPreview() {
  const { biolink, updateBiolink, setLoading } = useBiolinkPreview();
  const isBiolinkPage = usePathname().includes(biolinkLinks[0].href);

  React.useEffect(() => {
    async function fetchAndSetBiolink() {
      const biolink: Biolink = await fetchBiolink("johndoe");
      updateBiolink(biolink);
      setLoading(false);
    }
    if (!biolink) fetchAndSetBiolink();
  }, [biolink, updateBiolink, setLoading]);
  return (
    <>
      <PhoneMockup biolink={biolink} layout={biolink?.config.layout} />
    </>
  );
}
