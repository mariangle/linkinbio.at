"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Syne } from "next/font/google";

const kumarOneOutline = Syne({
  subsets: ["latin"],
  display: "swap",
  weight: "800",
});

export const InfiniteMovingHighlights = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  secondary,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  secondary?: boolean;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "160s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-3 md:py-4",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {features.map((feature, index) => {
          const words = feature.split(" ");
          const lastWord = words.pop();
          const firstPart = words.join(" ");

          return (
            <li
              key={index}
              className={cn(
                "text-shadow flex items-center gap-8 text-base font-medium uppercase text-background text-white dark:text-neutral-800 md:text-lg",
                kumarOneOutline.className,
              )}
            >
              <div className="flex items-center gap-4">
                <span className={cn("text-black dark:text-neutral-200")}>
                  {firstPart}
                </span>
                <span
                  className="hidden dark:block"
                  style={{
                    WebkitTextStroke: "1px #CFFF04",
                  }}
                >
                  {lastWord}
                </span>
                <span
                  className="dark:hidden"
                  style={{
                    WebkitTextStroke: "1px #000000",
                  }}
                >
                  {lastWord}
                </span>
              </div>
              <div
                className={cn(
                  "rotate-[35deg] text-black dark:text-neutral-200",
                )}
              >
                ✦
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const features = [
  "Fully customizable buttons",
  "Weather Effects",
  "Embeddable Widgets",
  "6 Beautiful Layouts",
  "Universal Icon Library",
  "Text Effects",
  "Video and GIF Support",
  "Custom Fonts",
  "Unlimited Colors",
  "Gradient Backgrounds",
  "SEO Optimized",
  "Analytics",
];
