import { Bio } from "@/components/biolink/bio";
import { Title } from "@/components/biolink/title";
import { Button } from "@/components/biolink/button";
import { Username } from "@/components/biolink/username";
import { ProfilePicture } from "@/components/biolink/profile-picture";
import { TopIcon } from "@/components/biolink/top-icon";
import { Footer } from "@/components/biolink/footer";
import {
  BackgroundContainer,
  BackgroundMedia,
} from "@/components/biolink/background";
import { ContentContainer } from "@/components/biolink/content-container";
import { Details } from "@/components/biolink/details";
import { cn } from "@/lib/utils";
import { determineBrightness } from "@/lib/utils/determine-brightness";

import { LayoutProps } from ".";

export function StandardLayout({
  user,
  config,
  profile,
  links,
  preview,
}: LayoutProps) {
  const backgroundDark = determineBrightness(config.background.color); // TODO: Check  if theres not a background image

  // TODO: fix redundant classes in ContentContainer and BackgroundContainer

  return (
    <BackgroundContainer
      color={config.background.color}
      className={cn(
        "fixed inset-0 flex h-screen flex-col items-center justify-between overflow-y-auto p-4",
        preview && "py-12",
        !preview && "min-h-screen",
      )}
    >
      <BackgroundMedia
        url={config.background.url}
        className={cn("fixed inset-0", preview && "absolute")}
      />
      <ContentContainer className="relative flex h-fit w-full flex-col items-center py-32">
        <div className="flex flex-col items-center justify-center">
          <ProfilePicture className="mb-4" src={profile.image} />
          <Title
            whiteText={backgroundDark}
            typewriter={config.effects.titleTypewriter}
            sparkles={config.effects.titleSparkles}
            options={config.title}
            title={profile.title ?? `@${user.username}`}
          />
          {!config.hideUsername && profile.title && (
            <Username whiteText={backgroundDark} username={user.username} />
          )}
          {profile.bio && (
            <Bio
              bio={profile.bio}
              whiteText={backgroundDark}
              typewriter={config.effects.bioTypewriter}
            />
          )}
          <Details
            occupation={profile.occupation}
            location={profile.location}
            whiteText={backgroundDark}
          />
        </div>
        {config.showTopIcons && (
          <div className="mt-6 flex gap-4">
            {links.map((link, index) => (
              <TopIcon
                whiteText={backgroundDark}
                options={config.topIcon}
                key={index}
                item={link}
              />
            ))}
          </div>
        )}
        <div className="my-8 w-full space-y-4">
          {links.map((link, index) => (
            <Button key={index} item={link} config={config.button} />
          ))}
        </div>
      </ContentContainer>
      <Footer textDark={!backgroundDark} />
    </BackgroundContainer>
  );
}
