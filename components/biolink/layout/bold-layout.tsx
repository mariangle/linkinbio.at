import { Bio } from "@/components/biolink/bio";
import { Title } from "@/components/biolink/title";
import { Username } from "@/components/biolink/username";
import { ProfilePicture } from "@/components/biolink/profile-picture";
import { Footer } from "@/components/biolink/footer";
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
import { cn } from "@/lib/utils";
import { Widgets } from "@/components/biolink/widgets";
import { LayoutProps } from ".";

export function BoldLayout({
  user,
  config,
  widgets,
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
        url={config.background?.url}
        className={cn("fixed inset-0", preview && "absolute")}
      />
      <ContentContainer className="relative z-20 flex h-fit w-full flex-col items-start p-0 py-16">
        <div className="flex w-full items-center justify-start gap-4 md:gap-6">
          <ProfilePicture
            src={user.image}
            nullable
            className={cn("md:size-32", preview && "md:size-24")}
          />
          <div>
            <Title
              options={config.profile?.title}
              user={user}
              effect={config.effects?.title}
            />
            {!config.profile?.hideUsername && (
              <Username
                username={user.username}
                options={config.profile?.text}
                className="mt-0 text-base"
              />
            )}
          </div>
        </div>
        <Bio bio={user.bio} options={config.profile?.text} className="mt-4" />
        <Details
          occupation={user.occupation}
          location={user.location}
          options={config.profile?.text}
          className="justify-start"
        />
        {config.icons.position !== "bottom" && (
          <PlatformIconLinks
            links={links.platform}
            config={config.icons}
            className="justify-start"
          />
        )}
        <WebsiteButtonLinks links={links.website} config={config.buttons} />
        {config.icons.position === "bottom" && (
          <PlatformIconLinks
            links={links.platform}
            config={config.icons}
            className="justify-start"
          />
        )}
        <Widgets widgets={widgets} premium={user.premium} />
      </ContentContainer>
      <Footer color={config.profile?.text?.color} />
    </BackgroundContainer>
  );
}
