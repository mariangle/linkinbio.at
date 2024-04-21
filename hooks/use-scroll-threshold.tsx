import { useState, useEffect } from "react";

export function useScrollThreshold(threshold: number = 0) {
  const [hasScrolledPastThreshold, setHasScrolledPastThreshold] =
    useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setHasScrolledPastThreshold(window.scrollY > threshold);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    hasScrolledPastThreshold,
  };
}
