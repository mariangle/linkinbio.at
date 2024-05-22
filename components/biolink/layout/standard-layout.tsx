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

export function StandardLayout({
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
      className={cn(preview && "absolute inset-0 p-0")}
      preview={preview}
    >
      <BackgroundMedia url={config.background?.url} className="fixed inset-0" />
      <ContentContainer className="h-fit py-16">
        <div className="flex flex-col items-center justify-center">
          <ProfilePicture className="mb-4" src={user.image} nullable />
          <Title
            options={config.profile?.title}
            user={user}
            effect={config.effects?.title}
          />
          {!config.profile?.hideUsername && user.title && (
            <Username username={user.username} options={config.profile?.text} />
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
        </div>
        {config.icons.position !== "bottom" && (
          <PlatformIconLinks links={links.platform} config={config.icons} />
        )}
        <WebsiteButtonLinks links={links.website} config={config.buttons} />
        <Widgets widgets={widgets} premium={user.premium} />
        {config.icons.position === "bottom" && (
          <PlatformIconLinks links={links.platform} config={config.icons} />
        )}
      </ContentContainer>
      <Footer color={config.profile?.text?.color} />
    </BackgroundContainer>
  );
}
