import { PricePackages } from "@/components/landing/price-packages";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/typography";
import { IndustrialBackground } from "@/components/ui/industrial-background";

export default function Page() {
  return (
    <IndustrialBackground>
      <Container variant="landing" page>
        <Heading className="mb-12 bg-gradient-to-b from-indigo-200 to-indigo-50 bg-clip-text text-center text-transparent">
          Simple, transparent pricing
        </Heading>
        <PricePackages />
      </Container>
    </IndustrialBackground>
  );
}
