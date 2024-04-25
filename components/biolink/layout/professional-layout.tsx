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

export function ProfessionalLayout({
  user,
  config,
  profile,
  links,
  preview,
}: LayoutProps) {
  const backgroundDark = determineBrightness(config.background.color);

  return (
    <BackgroundContainer
      color={config.background.color}
      className={cn(
        "relative flex h-full flex-col items-center justify-between overflow-y-auto p-4",
        !preview && "min-h-screen",
      )}
    >
      <BackgroundMedia
        url={config.background.url}
        className={cn(
          "absolute inset-x-0 top-0 mx-auto h-60 max-w-screen-lg overflow-hidden md:rounded-b-2xl",
          preview && "rounded-b-none md:rounded-b-none",
        )}
      />
      <ContentContainer className="relative mb-24 mt-40 flex w-full flex-col items-center">
        <div className="flex w-full flex-col items-start justify-center">
          <div className="flex w-full items-end justify-between">
            <ProfilePicture className="mb-4" src={profile.image} />
            {config.showTopIcons && (
              <div className="flex gap-4">
                {links.map((link, index) => (
                  <TopIcon
                    options={config.topIcon}
                    key={index}
                    item={link}
                    size="sm"
                    whiteText={backgroundDark}
                  />
                ))}
              </div>
            )}
          </div>
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
        <div className="mt-8 w-full space-y-4">
          {links.map((link, index) => (
            <Button key={index} item={link} config={config.button} />
          ))}
        </div>
      </ContentContainer>
      <Footer textDark={!backgroundDark} />
    </BackgroundContainer>
  );
}
