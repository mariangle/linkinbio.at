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
import { Details } from "@/components/biolink/details";

import { Footer } from "@/components/biolink/footer";
import { cn } from "@/lib/utils";
import { determineBrightness } from "@/lib/utils/determine-brightness";
import { LayoutProps } from ".";
import { Spotify } from "../modules/spotify";

export function WithCoverLayout({
  user,
  config,
  modules,
  links,
  preview,
}: LayoutProps) {
  const backgroundDark = config.profile.invertTextColor
    ? !determineBrightness(config.background.color)
    : determineBrightness(config.background.color);
  return (
    <BackgroundContainer
      color={config.background.color}
      className={cn(
        "fixed inset-0 flex h-full flex-col items-center justify-between overflow-y-auto p-4",
        preview && "relative h-full",
      )}
    >
      <div className="absolute inset-x-0 top-0 m-2 flex h-60 justify-center overflow-hidden">
        <BackgroundMedia
          url={config.background.url}
          className={cn(
            "max-w-screen-md rounded-b-md rounded-t-xl",
            preview && "rounded-t-3xl",
          )}
        />
      </div>
      <ContentContainer className="relative mb-24 mt-40 flex w-full flex-col items-center">
        <div className="flex flex-col items-center justify-center">
          <ProfilePicture className="mb-4" src={user.image} nullable />
          <Title
            whiteText={backgroundDark}
            options={{
              typewriter: config.effects.titleTypewriter,
              sparkles: config.effects.titleSparkles,
              font: config.profile.title.font,
              color: config.profile.title.color,
            }}
            title={user.title || `@${user.username}`}
          />
          {!config.profile.hideUsername && user.title && (
            <Username whiteText={backgroundDark} username={user.username} />
          )}
          {user.bio && (
            <Bio
              bio={user.bio}
              whiteText={backgroundDark}
              typewriter={config.effects.bioTypewriter}
              className="text-center"
            />
          )}
          <Details
            occupation={user.occupation}
            location={user.location}
            whiteText={backgroundDark}
          />
        </div>
        <div className="mt-6 flex gap-4">
          {links?.map((link, index) => (
            <TopIcon
              whiteText={backgroundDark}
              options={config.topIcon}
              key={index}
              item={link}
            />
          ))}
        </div>
        <div className="my-8 w-full space-y-4">
          {links?.map((link, index) => (
            <Button key={index} item={link} config={config.button} />
          ))}
        </div>
        <div className="w-full space-y-6">
          <Spotify options={modules?.spotify} />
        </div>
      </ContentContainer>
      <Footer textDark={!backgroundDark} />
    </BackgroundContainer>
  );
}
