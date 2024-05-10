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

export function BoldLayout({
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
      className={cn(preview && "relative h-full")}
    >
      <BackgroundMedia
        url={config.background.url}
        className={cn("fixed inset-0", preview && "absolute h-full w-full")}
      />
      <ContentContainer className="relative z-20 flex h-fit w-full flex-col items-start py-16">
        <div className="flex w-full items-center justify-start gap-4 md:gap-6">
          <ProfilePicture src={user.image} nullable className="md:size-32" />
          <div>
            <Title
              options={{
                effect: config.effects.title,
                font: config.profile.title.font,
                color: config.profile.title.color,
              }}
              user={user}
              className="text-2xl font-bold md:text-3xl"
            />
            {!config.profile.hideUsername && user.title && (
              <Username
                username={user.username}
                options={{
                  font: config.profile.text.font,
                  color: config.profile.text.color,
                }}
                className="mt-0 text-lg"
              />
            )}
          </div>
        </div>
        {user.bio && (
          <Bio
            bio={user.bio}
            options={{
              font: config.profile.text.font,
              color: config.profile.text.color,
            }}
            className="mt-4"
          />
        )}
        <Details
          occupation={user.occupation}
          location={user.location}
          options={{
            font: config.profile.text.font,
            color: config.profile.text.color,
          }}
          className="justify-start"
        />
        <div className="mt-6 flex w-full justify-start gap-4">
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
