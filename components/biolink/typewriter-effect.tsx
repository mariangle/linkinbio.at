"use client";
import * as React from "react";
import Typewriter from "typewriter-effect";

export function TypewriterEffect({ words }: { words: string }) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

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
