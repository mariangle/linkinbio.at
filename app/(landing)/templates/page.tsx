import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/typography";
import { IndustrialBackground } from "@/components/ui/industrial-background";

export default function Page() {
  return (
    <IndustrialBackground>
      <Container variant="landing" page>
        <Heading className="text-center">Templates</Heading>
      </Container>
    </IndustrialBackground>
  );
}
