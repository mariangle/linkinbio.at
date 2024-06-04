import { Bio } from "@/components/biolink/bio";
import { Title } from "@/components/biolink/title";
import { Username } from "@/components/biolink/username";
import {
  PlatformIconLinks,
  WebsiteButtonLinks,
} from "@/components/biolink/links-list";
import {
  BackgroundContainer,
  BackgroundMedia,
} from "@/components/biolink/background";
import { ContentContainer } from "@/components/biolink/content-container";
import { Details } from "@/components/biolink/details";
import { cn } from "@/lib/utils";
import { Widgets } from "@/components/biolink/widgets";
import { LayoutProps } from ".";

export function ModernLayout({
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
      className={cn("p-2", preview && "relative")}
      preview={preview}
    >
      <BackgroundMedia
        url={config.background?.url}
        className={cn("fixed inset-0", preview && "absolute")}
      />
      <div className="mt-[200px] flex h-full w-full flex-col justify-end">
        <ContentContainer
          className={cn(
            "h-full justify-between rounded-2xl bg-black/25 pt-8 backdrop-blur-2xl md:h-fit",
            preview && "!h-fit",
          )}
        >
          <div className="flex w-full flex-col items-center justify-center">
            <Title
              options={config.profile?.title}
              user={user}
              effect={config.effects?.title}
              className="text-2xl"
            />
            {!config.profile?.hideUsername && user.title && (
              <Username
                username={user.username}
                options={config.profile?.text}
              />
            )}
            <Bio
              bio={user.bio}
              className="text-center"
              options={config.profile?.text}
            />
            <Details
              occupation={user.occupation}
              location={user.location}
              options={config.profile?.text}
            />
            {config.icons.position !== "bottom" && (
              <PlatformIconLinks links={links.platform} config={config.icons} />
            )}
            <WebsiteButtonLinks links={links.website} config={config.buttons} />
            <Widgets widgets={widgets} premium={user.premium} />
          </div>
          {config.icons.position === "bottom" && (
            <PlatformIconLinks links={links.platform} config={config.icons} />
          )}
        </ContentContainer>
      </div>
    </BackgroundContainer>
  );
}
