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

export function GlassmorphismLayout({
  user,
  config,
  links,
  modules,
  preview,
}: LayoutProps) {
  return (
    <BackgroundContainer
      color={config.background.color}
      className={cn(
        "fixed inset-0 flex h-full flex-col items-center justify-between overflow-y-auto p-4",
        preview && "relative h-full",
      )}
    >
      <BackgroundMedia
        url={config.background.url}
        className={cn("fixed inset-0", preview && "absolute")}
      />
      <div className="flex h-full w-full items-center justify-center">
        <ContentContainer className="relative m-4 mb-12 mt-32 flex h-fit w-full max-w-lg flex-col items-center rounded-[3rem] border border-white/10 bg-gray-950/50 backdrop-blur-2xl">
          <ProfilePicture
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
            src={user.image}
          />
          <div className="flex flex-col items-center justify-center">
            <div className="h-12"></div>
            <Title
              whiteText={true}
              typewriter={config.effects.titleTypewriter}
              sparkles={config.effects.titleSparkles}
              options={config.title}
              title={user.title || `@${user.username}`}
            />
            {!config.hideUsername && user.title && (
              <Username whiteText={true} username={user.username} />
            )}
            {user.bio && (
              <Bio
                bio={user.bio}
                whiteText={true}
                typewriter={config.effects.bioTypewriter}
              />
            )}
            <Details occupation={user.occupation} location={user.location} />
          </div>
          <div className="mt-4 flex gap-4 rounded-[2.4rem] border border-white/5 bg-white/5 px-3 py-2">
            {links?.map((link, index) => (
              <TopIcon
                options={config.topIcon}
                key={index}
                item={link}
                size="sm"
              />
            ))}
          </div>
          <div className="mt-6 w-full space-y-4 rounded-[2.8rem] border border-white/5 bg-white/5 px-4 py-6">
            {links?.map((link, index) => (
              <Button key={index} item={link} config={config.button} />
            ))}
          </div>
        </ContentContainer>
      </div>
      <Footer textDark={false} />
    </BackgroundContainer>
  );
}
