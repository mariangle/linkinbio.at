"use client";

import * as React from "react";
import Typewriter from "typewriter-effect";

import { useMounted } from "@/hooks/use-mounted";

export function TypewriterEffect({ words }: { words: string }) {
  const isMounted = useMounted();

  if (!isMounted) return <div className="h-[24px]" />;

  return (
    <Typewriter
      options={{
        strings: words,
        autoStart: true,
        loop: true,
      }}
    />
  );
}
