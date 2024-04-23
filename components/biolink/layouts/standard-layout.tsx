"use client"; // Using to dertermine brightness of the background color

import { Bio } from "@/components/biolink/bio";
import { Title } from "@/components/biolink/title";
import { Button } from "@/components/biolink/button";
import { Username } from "@/components/biolink/username";
import { ProfilePicture } from "@/components/biolink/profile-picture";
import { TopIcon } from "@/components/biolink/top-icon";
import {
  BackgroundContainer,
  BackgroundMedia,
} from "@/components/biolink/background";
import { ContentContainer } from "@/components/biolink/content-container";

import { WeatherEffect } from "@/components/biolink/weather-effect";
import { useBackgroundBrightness } from "@/hooks/use-background-brightness";

import type { Biolink } from "@/types";
import { cn } from "@/lib/utils";

export function StandardLayout({
  biolink,
  preview,
}: {
  biolink: Biolink;
  preview?: boolean;
}) {
  const { user, config, profile, links } = biolink;
  const { effects, background } = config;
  const { isDark } = useBackgroundBrightness({
    color: config.background.color,
    url: config.background.url,
  });

  return (
    <BackgroundContainer
      className={cn(
        "relative flex h-full items-start justify-center py-24",
        preview && "py-12",
        !preview && "min-h-screen",
      )}
    >
      <WeatherEffect preview={preview} variant={config.effects.weather} />
      <BackgroundMedia
        url={config.background.url}
        className={cn("fixed inset-0", preview && "absolute")}
      />
      <ContentContainer className="relative flex h-full w-full flex-col items-center">
        <div className="flex flex-col items-center justify-center">
          <ProfilePicture className="mb-4" />
          <Title
            typewriter={effects.titleTypewriter}
            sparkles={effects.titleSparkles}
          >
            {profile.title}
          </Title>
          <Username>{user.username}</Username>
          <Bio typewriter={effects.bioTypewriter}>{profile.bio}</Bio>
        </div>
        {config.showTopIcons && (
          <div className="mt-6 flex gap-4">
            {links.map((link, index) => (
              <TopIcon options={config.topIcon} key={index} item={link} />
            ))}
          </div>
        )}
        <div className="mt-8 w-full space-y-4">
          {links.map((link, index) => (
            <Button key={index} item={link} config={config.button} />
          ))}
        </div>
      </ContentContainer>
    </BackgroundContainer>
  );
}
