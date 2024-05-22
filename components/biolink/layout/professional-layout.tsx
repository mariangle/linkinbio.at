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
import { cn } from "@/lib/utils";
import { Widgets } from "@/components/biolink/widgets";
import { LayoutProps } from ".";

export function ProfessionalLayout({
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
      className={cn(!preview && "min-h-screen", preview && "relative")}
      preview={preview}
    >
      <BackgroundMedia
        url={config.background?.url}
        className={cn(
          "absolute inset-x-0 top-0 mx-auto h-60 max-w-screen-lg overflow-hidden md:rounded-b-2xl",
          preview && "rounded-b-none md:rounded-b-none",
        )}
      />
      <ContentContainer className="mb-24 mt-40 p-0">
        <div className="flex w-full flex-col items-start justify-center">
          <div className="flex w-full items-end justify-between">
            <ProfilePicture className="mb-4" src={user.image} />
            {config.icons.position !== "bottom" && (
              <PlatformIconLinks
                links={links.platform}
                config={config.icons}
                className="mt-0 justify-end gap-2"
              />
            )}
          </div>
          <Title
            options={config.profile?.title}
            user={user}
            effect={config.effects?.title}
          />
          {!config.profile?.hideUsername && (
            <Username options={config.profile?.text} username={user.username} />
          )}
          <Bio bio={user.bio} options={config.profile?.text} />
          <Details
            occupation={user.occupation}
            location={user.location}
            options={config.profile?.text}
          />
        </div>
        <WebsiteButtonLinks links={links.website} config={config.buttons} />
        <Widgets widgets={widgets} premium={user.premium} />
        {config.icons.position === "bottom" && (
          <PlatformIconLinks
            links={links.platform}
            config={config.icons}
            className="justify-start gap-2"
          />
        )}
      </ContentContainer>
      <Footer color={config.profile?.text?.color} />
    </BackgroundContainer>
  );
}
