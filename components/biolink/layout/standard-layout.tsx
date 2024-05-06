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
import { SoundcloudTrack } from "@/components/biolink/modules/soundcloud";
import { Spotify } from "@/components/biolink/modules/spotify";
import { YoutubeVideo } from "@/components/biolink/modules/youtube";
import { LayoutProps } from ".";

export function StandardLayout({
  user,
  config,
  modules,
  links,
  preview,
  backgroundDark,
}: LayoutProps) {
  return (
    <BackgroundContainer
      color={config.background.color}
      className={cn(preview && "relative h-full")}
    >
      <BackgroundMedia
        url={config.background.url}
        className={cn("fixed inset-0", preview && "absolute h-full w-full")}
      />
      <ContentContainer className="relative z-20 flex h-fit w-full flex-col items-center py-32">
        <div className="flex flex-col items-center justify-center">
          <ProfilePicture className="mb-4" src={user.image} nullable />
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
          {user.bio && (
            <Bio
              bio={user.bio}
              whiteText={backgroundDark}
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
          {links.platform.map((link, index) => (
            <TopIcon
              whiteText={backgroundDark}
              options={config.topIcon}
              key={index}
              item={link}
            />
          ))}
        </div>
        <div className="my-8 w-full space-y-4">
          {links.website.map((link, index) => (
            <Button key={index} item={link} config={config.button} />
          ))}
          {links.platform.map((link, index) => (
            <Button key={index} item={link} config={config.button} />
          ))}
        </div>
        <div className="w-full space-y-6">
          <SoundcloudTrack options={modules?.soundcloud} />
          <Spotify options={modules?.spotify} />
          <YoutubeVideo options={modules?.youtube} />
        </div>
      </ContentContainer>
      <Footer textDark={!backgroundDark} />
    </BackgroundContainer>
  );
}
