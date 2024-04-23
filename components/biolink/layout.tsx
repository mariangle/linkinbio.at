import { Bio } from "@/components/biolink/bio";
import { Title } from "@/components/biolink/title";
import { Button } from "@/components/biolink/button";
import { Username } from "@/components/biolink/username";
import { ProfilePicture } from "@/components/biolink/profile-picture";
import {
  BackgroundContainer,
  BackgroundMedia,
} from "@/components/biolink/background";
import { ContentContainer } from "@/components/biolink/content-container";

import { WeatherEffect } from "@/components/biolink/weather-effect";

import type { Biolink } from "@/types";
import { cn } from "@/lib/utils";

export enum Layout {
  Classic = "classic",
  Minimal = "minimal",
  Glassmorphism = "glassmorphism",
}

export function ClassicLayout({
  biolink,
  preview,
}: {
  biolink: Biolink;
  preview?: boolean;
}) {
  const { user, config, profile, links } = biolink;
  return (
    <BackgroundContainer
      className={cn(
        "relative flex h-full items-start justify-center py-24",
        preview && "py-12",
        !preview && "min-h-screen",
      )}
    >
      <WeatherEffect preview={preview} variant={config.visuals.weather} />
      <BackgroundMedia
        url={config.background.url}
        className={cn("fixed inset-0", preview && "absolute")}
      />
      <ContentContainer className="relative flex h-full w-full flex-col items-center">
        <div className="flex flex-col items-center justify-center">
          <ProfilePicture className="mb-4" />
          <Title>{profile.title}</Title>
          <Username>{user.username}</Username>
          <Bio>{profile.bio}</Bio>
        </div>
        <div className="mt-4 w-full space-y-4">
          {links.map((link, index) => (
            <Button key={index} item={link} />
          ))}
        </div>
      </ContentContainer>
    </BackgroundContainer>
  );
}

export function GlassmorphismLayout({
  biolink,
  preview,
}: {
  biolink: Biolink;
  preview?: boolean;
}) {
  const { user, config, profile, links } = biolink;

  return (
    <BackgroundContainer
      className={cn(
        "relative flex h-full items-center justify-center",
        !preview && "min-h-screen",
      )}
    >
      <BackgroundMedia
        url={config.background.url}
        className={cn("fixed inset-0", preview && "absolute")}
      />
      <ContentContainer className="relative m-4 flex w-full max-w-lg flex-col items-center rounded-[2.4rem] bg-black/50 backdrop-blur-lg">
        <div className="flex flex-col items-center justify-center">
          <ProfilePicture className="mb-4" />
          <Title>{profile.title}</Title>
          <Username>{user.username}</Username>
          <Bio>{profile.bio}</Bio>
        </div>
        <div className="mt-4 w-full space-y-4">
          {links.map((link, index) => (
            <Button key={index} item={link} />
          ))}
        </div>
      </ContentContainer>
    </BackgroundContainer>
  );
}
