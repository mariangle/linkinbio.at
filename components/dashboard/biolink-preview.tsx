import { dummyBiolink } from "@/constants/dummy";
import { PhoneMockup } from "@/components/ui/phone-mockup";

export function BiolinkPreview() {
  return (
    <PhoneMockup biolink={dummyBiolink} layout={dummyBiolink.config.layout} />
  );
}
