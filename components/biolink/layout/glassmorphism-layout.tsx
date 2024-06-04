import { Bio } from "@/components/biolink/bio";
import { Title } from "@/components/biolink/title";
import { Username } from "@/components/biolink/username";
import { ProfilePicture } from "@/components/biolink/profile-picture";
import {
  BackgroundContainer,
  BackgroundMedia,
} from "@/components/biolink/background";
import {
  PlatformIconLinks,
  WebsiteButtonLinks,
} from "@/components/biolink/links-list";
import { ContentContainer } from "@/components/biolink/content-container";
import { Details } from "@/components/biolink/details";
import { Footer } from "@/components/biolink/footer";
import { Widgets } from "@/components/biolink/widgets";
import { cn } from "@/lib/utils";
import { LayoutProps } from ".";

export function GlassmorphismLayout({
  user,
  config,
  links,
  widgets,
  preview,
}: LayoutProps) {
  return (
    <BackgroundContainer
      premium={user.premium}
      options={config.background}
      className={cn(preview && "relative h-full")}
      preview={preview}
    >
      <BackgroundMedia
        url={config.background?.url}
        className={cn("fixed inset-0", preview && "absolute")}
      />
      <div className="my-12 flex w-full max-w-[350px] flex-col items-center justify-center gap-4 md:my-24">
        <ContentContainer className="relative flex h-fit w-full flex-col items-center rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-black/75 to-black/50 p-6 backdrop-blur-xl">
          <div className="flex w-full flex-col items-start justify-start">
            <ProfilePicture
              src={user.image}
              nullable
              className="mb-2 rounded-[1.2rem]"
            />
            <Title
              options={config.profile?.title}
              user={user}
              effect={config.effects?.title}
            />
            {!config.profile?.hideUsername && (
              <Username
                username={user.username}
                options={config.profile?.text}
              />
            )}
            <Bio bio={user.bio} options={config.profile?.text} />
            <Details
              occupation={user.occupation}
              location={user.location}
              options={config.profile?.text}
            />
          </div>
          {config.icons.position !== "bottom" && (
            <PlatformIconLinks
              links={links.platform}
              config={config.icons}
              className="justify-start"
            />
          )}
          <WebsiteButtonLinks links={links.website} config={config.buttons} />
          {config.icons.position === "bottom" && (
            <PlatformIconLinks links={links.platform} config={config.icons} />
          )}
        </ContentContainer>
        <Widgets widgets={widgets} premium={user.premium} />
      </div>
      <Footer color={config.profile?.text?.color} />
    </BackgroundContainer>
  );
}
