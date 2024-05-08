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
import { Spotify } from "../modules/spotify";

export function WithCoverLayout({
  user,
  config,
  modules,
  links,
  preview,
}: LayoutProps) {
  return (
    <BackgroundContainer
      options={config.background}
      className={cn(preview && "relative h-full")}
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
            options={{
              effect: config.effects.title,
              font: config.profile.title.font,
              color: config.profile.title.color,
            }}
            user={user}
          />
          {!config.profile.hideUsername && user.title && (
            <Username
              username={user.username}
              options={{
                font: config.profile.text.font,
                color: config.profile.text.color,
              }}
            />
          )}
          {user.bio && (
            <Bio
              bio={user.bio}
              options={{
                font: config.profile.text.font,
                color: config.profile.text.color,
              }}
              className="text-center"
            />
          )}
          <Details
            occupation={user.occupation}
            location={user.location}
            options={{
              font: config.profile.text.font,
              color: config.profile.text.color,
            }}
          />
        </div>
        <div className="mt-6 flex gap-4">
          {links.platform.map((link, index) => (
            <TopIcon options={config.topIcon} key={index} item={link} />
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
          <Spotify options={modules?.spotify} />
        </div>
      </ContentContainer>
      <Footer color={config.profile.text.color} />
    </BackgroundContainer>
  );
}
