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

export function GlassmorphismLayout({
  biolink,
  preview,
}: {
  biolink: Biolink;
  preview?: boolean;
}) {
  const { user, config, profile, links } = biolink;
  const { effects, background } = config;

  return (
    <BackgroundContainer
      color={config.background.color}
      className={cn(
        "relative flex h-full items-center justify-center",
        !preview && "min-h-screen",
      )}
    >
      <WeatherEffect preview={preview} variant={effects.weather} />
      <BackgroundMedia
        url={background.url}
        className={cn("fixed inset-0", preview && "absolute")}
      />
      <ContentContainer className="relative m-4 flex h-fit w-full max-w-lg flex-col items-center rounded-[3rem] border border-white/10 bg-gray-950/50 backdrop-blur-2xl">
        <ProfilePicture className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" />
        {config.showTopIcons && (
          <div className="absolute right-5 top-6 flex gap-4 rounded-[2.4rem] border border-white/5 bg-white/5 px-3 py-2 backdrop-blur-xl">
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
        <div className="flex flex-col items-center justify-center">
          <div className="h-12"></div>
          <Title
            whiteText={true}
            typewriter={effects.titleTypewriter}
            sparkles={effects.titleSparkles}
            options={config.title}
          >
            {profile.title}
          </Title>
          <Username whiteText={true}>{user.username}</Username>
          <Bio whiteText={true}>{profile.bio}</Bio>
        </div>
        <div className="mt-6 w-full space-y-4 rounded-[2.8rem] border border-white/5 bg-white/5 px-4 py-6">
          {links.map((link, index) => (
            <Button key={index} item={link} config={config.button} />
          ))}
        </div>
      </ContentContainer>
    </BackgroundContainer>
  );
}
