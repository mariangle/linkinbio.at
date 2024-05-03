"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { TopIcon } from "@/components/biolink/top-icon";
import { TopIconStyle } from "@/lib/types";

const spotifyLink = {
  title: "Spotify",
  url: "https://spotify.com/username",
  isTopIcon: true,
};

const discordLink = {
  title: "Discord",
  url: "https://discord.com/username",
  isTopIcon: true,
};

const twitchLink = {
  title: "Twitch",
  url: "https://twitch.tv/username",
  isTopIcon: true,
};

const instagramLink = {
  title: "Instagram",
  url: "https://instagram.com/username",
  isTopIcon: true,
};

const twitterLink = {
  title: "Twitter",
  url: "https://twitter.com/username",
  isTopIcon: true,
};

const websiteLink = {
  title: "Website",
  url: "https://website.com/username",
  isTopIcon: true,
};

const youtubeLink = {
  title: "Youtube",
  url: "https://youtube.com/username",
  isTopIcon: true,
};

const tiktokLink = {
  title: "Tiktok",
  url: "https://tiktok.com/username",
  isTopIcon: true,
};

export const InfiniteMovingIcons = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
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
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-md overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex w-max min-w-full shrink-0 flex-nowrap items-center gap-4 py-4 text-white",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        <TopIcon
          whiteText
          options={{
            shadow: true,
            style: TopIconStyle.NoBackgroundSocialColor,
          }}
          item={spotifyLink}
        />
        <TopIcon
          whiteText
          options={{
            shadow: true,
            style: TopIconStyle.SocialBackgroundWhiteColor,
          }}
          item={discordLink}
        />
        <TopIcon
          whiteText
          options={{
            shadow: false,
            style: TopIconStyle.SocialBackgroundWhiteColor,
          }}
          item={instagramLink}
        />
        <TopIcon
          whiteText
          options={{
            shadow: true,
          }}
          item={websiteLink}
        />
        <TopIcon
          whiteText
          options={{
            shadow: false,
            style: TopIconStyle.WhiteBackgroundSocialColor,
          }}
          item={twitchLink}
        />
        <TopIcon
          whiteText
          options={{
            shadow: false,
            style: TopIconStyle.WhiteBackgroundBlackColor,
          }}
          item={youtubeLink}
        />
        <TopIcon
          whiteText
          options={{
            shadow: true,
            style: TopIconStyle.BlackBackgroundWhiteColor,
          }}
          item={tiktokLink}
        />
        <TopIcon
          whiteText
          options={{
            shadow: true,
            style: TopIconStyle.WhiteBackgroundSocialColor,
          }}
          item={twitterLink}
        />
      </ul>
    </div>
  );
};
