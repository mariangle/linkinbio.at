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
import { LayoutProps } from ".";

export function ProfessionalLayout({
  user,
  config,
  links,
  modules,
  preview,
  backgroundDark,
}: LayoutProps) {
  return (
    <BackgroundContainer
      options={config.background}
      className={cn(!preview && "min-h-screen", preview && "relative")}
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
            <ProfilePicture className="mb-4" src={user.image} />
            <div className="flex gap-4">
              {links.platform.map((link, index) => (
                <TopIcon
                  options={config.topIcon}
                  key={index}
                  item={link}
                  whiteText={backgroundDark}
                />
              ))}
            </div>
          </div>
          <Title
            options={{
              effect: config.effects.title,
              font: config.profile.title.font,
              color: config.profile.title.color,
            }}
            whiteText={backgroundDark}
            user={user}
          />
          {!config.profile.hideUsername && user.title && (
            <Username whiteText={backgroundDark} username={user.username} />
          )}
          {user.bio && <Bio bio={user.bio} whiteText={backgroundDark} />}
          <Details
            occupation={user.occupation}
            location={user.location}
            whiteText={backgroundDark}
          />
        </div>
        <div className="mt-8 w-full space-y-4">
          {links.website.map((link, index) => (
            <Button key={index} item={link} config={config.button} />
          ))}
          {links.platform.map((link, index) => (
            <Button key={index} item={link} config={config.button} />
          ))}
        </div>
      </ContentContainer>
      <Footer textDark={!backgroundDark} />
    </BackgroundContainer>
  );
}
