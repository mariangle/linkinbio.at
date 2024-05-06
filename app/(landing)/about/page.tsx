import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/typography";
import { IndustrialBackground } from "@/components/ui/industrial-background";

export default function Page() {
  return (
    <IndustrialBackground>
      <Container variant="landing" page>
        <Heading className="bg-gradient-to-b from-indigo-200 to-indigo-50 bg-clip-text text-center text-transparent">
          About
        </Heading>
        <p className="mx-auto mb-12 max-w-prose text-center text-slate-300">
          linkinbio.at provides a complimentary link-in-bio tool equipped with
          all of Linktree&apos;s premium features and more, without any charges.
          In addition to its core functionality, it boasts an intuitive, modern
          interface for creating and managing links, as well as a variety of new
          features.
        </p>
        <p className="mx-auto mb-12 max-w-prose text-center text-slate-300">
          Designed and developed by{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/maria-nguyen-le"
            className="text-white"
          >
            Maria
          </Link>
          .
        </p>
      </Container>
    </IndustrialBackground>
  );
}
