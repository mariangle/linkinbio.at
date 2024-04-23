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

export function CleanLayout({
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
      <BackgroundMedia
        url={config.background.url}
        className={cn(
          "absolute inset-x-0 top-0 mx-auto h-60 max-w-screen-lg overflow-hidden md:rounded-b-2xl",
          preview && "rounded-b-none sm:rounded-b-none",
        )}
      />
      <ContentContainer className="relative flex h-full w-full flex-col items-center">
        <div className="flex w-full flex-col items-start justify-center">
          <div className="flex w-full items-end justify-between">
            <ProfilePicture className="mb-4" />
            {config.showTopIcons && (
              <div className="flex gap-4 rounded-[2.4rem] border border-white/5 bg-white/5 px-3 py-2 backdrop-blur-xl">
                {links.map((link, index) => (
                  <TopIcon
                    options={config.topIcon}
                    key={index}
                    item={link}
                    size="sm"
                  />
                ))}
              </div>
            )}
          </div>
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
        <div className="mt-8 w-full space-y-4">
          {links.map((link, index) => (
            <Button key={index} item={link} config={config.button} />
          ))}
        </div>
      </ContentContainer>
    </BackgroundContainer>
  );
}
