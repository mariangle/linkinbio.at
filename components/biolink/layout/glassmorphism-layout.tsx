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
import { Modules } from "@/components/biolink/modules";
import { cn } from "@/lib/utils";
import { LayoutProps } from ".";

export function GlassmorphismLayout({
  user,
  config,
  links,
  modules,
  preview,
}: LayoutProps) {
  return (
    <BackgroundContainer
      options={config.background}
      className={cn(preview && "relative h-full")}
    >
      <BackgroundMedia
        url={config.background.url}
        className={cn("fixed inset-0", preview && "absolute")}
      />
      <div className="my-12 flex w-full max-w-[350px] flex-col items-center justify-center gap-8 md:my-24">
        <ContentContainer className="relative flex h-fit w-full flex-col items-center rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-black/75 to-black/50 p-6 backdrop-blur-xl">
          <div className="mx-auto flex max-w-md flex-col items-start justify-center">
            <ProfilePicture
              src={user.image}
              nullable
              className="rounded-[1.2rem]"
            />
            <Title
              options={{
                effect: config.effects.title,
                font: config.profile.title.font,
                color: config.profile.title.color,
              }}
              user={user}
              className="mt-3"
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
          <div className="mt-4 flex w-full justify-start gap-4">
            {links.platform.map((link, index) => (
              <TopIcon options={config.topIcon} key={index} item={link} />
            ))}
          </div>
          <div className="my-6 w-full space-y-4">
            {links.website.map((link, index) => (
              <Button key={index} item={link} config={config.button} />
            ))}
            {links.platform.map((link, index) => (
              <Button key={index} item={link} config={config.button} />
            ))}
          </div>
        </ContentContainer>
        <Modules modules={modules} />
      </div>
      <Footer />
    </BackgroundContainer>
  );
}
