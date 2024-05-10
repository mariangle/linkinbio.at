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
import { Modules } from "@/components/biolink/modules";
import { LayoutProps } from ".";

export function StandardLayout({
  user,
  config,
  modules,
  links,
  preview,
}: LayoutProps) {
  return (
    <BackgroundContainer
      premium={user.premium}
      options={config.background}
      className={cn(preview && "absolute inset-0")}
    >
      <BackgroundMedia
        url={config.background.url}
        className={cn("fixed inset-0", preview && "absolute h-full w-full")}
      />
      <ContentContainer className="relative z-20 flex h-fit w-full flex-col items-center py-16">
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
              className="text-center"
              options={{
                font: config.profile.text.font,
                color: config.profile.text.color,
              }}
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
        <Modules modules={modules} premium={user.premium} />
      </ContentContainer>
      <Footer color={config.profile.text.color} />
    </BackgroundContainer>
  );
}
