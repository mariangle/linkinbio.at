/*"use client";

import * as React from "react";

import { PhoneMockup } from "@/components/phone-mockup";
import { dummyBiolinks } from "@/lib/constants/dummy";

export function HeroShowcase() {
  const [biolinkIndex, setBiolinkIndex] = React.useState(0);
  const [biolink, setBiolink] = React.useState(dummyBiolinks[0]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (biolinkIndex + 1) % dummyBiolinks.length;
      setBiolinkIndex(nextIndex);
      setBiolink(dummyBiolinks[nextIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, [biolinkIndex]);

  return (
    <div>
      <PhoneMockup biolink={biolink} />
    </div>
  );
}
*/
