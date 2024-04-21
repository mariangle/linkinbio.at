import Link from "next/link";

import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <>
      <div className="horizontal-line"></div>
      <Container className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <div className="text-xs text-muted-foreground">
          © webvaerk.com. All rights reserved.
        </div>
        <div className="text-xs text-muted-foreground">
          Udviklet og designet af{" "}
          <Link
            href="https://mariangle.com"
            className="text-foreground underline underline-offset-2"
          >
            Maria
          </Link>
        </div>
      </Container>
    </>
  );
}
