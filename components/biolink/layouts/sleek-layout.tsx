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
import { Layout as LayoutEnum } from "@/types/enums";

export function SleekLayout({
  biolink,
  preview,
}: {
  biolink: Biolink;
  preview?: boolean;
}) {
  const { user, config, profile, links } = biolink;
  const { effects, background } = config;
  const { backgroundDark } = useBackgroundBrightness({
    color: config.background.color,
  });

  return (
    <BackgroundContainer
      color={config.background.color}
      className={cn(
        "relative flex h-full items-start justify-center pt-44",
        !preview && "min-h-screen",
      )}
    >
      <WeatherEffect preview={preview} variant={config.effects.weather} />
      <div className="absolute inset-x-0 top-0 m-2 flex h-60 justify-center overflow-hidden">
        <BackgroundMedia
          url={config.background.url}
          className={cn(
            "max-w-screen-md rounded-b-md rounded-t-xl",
            preview && "rounded-t-3xl",
          )}
        />
      </div>
      <ContentContainer className="relative flex h-full w-full flex-col items-center">
        <div className="flex flex-col items-center justify-center">
          <ProfilePicture className="mb-4" />
          <Title
            whiteText={backgroundDark}
            typewriter={effects.titleTypewriter}
            sparkles={effects.titleSparkles}
            options={config.title}
          >
            {profile.title}
          </Title>
          <Username whiteText={backgroundDark}>{user.username}</Username>
          <Bio whiteText={backgroundDark} typewriter={effects.bioTypewriter}>
            {profile.bio}
          </Bio>
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
