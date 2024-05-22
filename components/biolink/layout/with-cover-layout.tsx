import { Bio } from "@/components/biolink/bio";
import { Title } from "@/components/biolink/title";
import { Username } from "@/components/biolink/username";
import { ProfilePicture } from "@/components/biolink/profile-picture";
import {
  BackgroundContainer,
  BackgroundMedia,
} from "@/components/biolink/background";
import { ContentContainer } from "@/components/biolink/content-container";
import { Details } from "@/components/biolink/details";

import { Footer } from "@/components/biolink/footer";
import { cn } from "@/lib/utils";
import { LayoutProps } from ".";
import {
  PlatformIconLinks,
  WebsiteButtonLinks,
} from "@/components/biolink/links-list";
import { Widgets } from "@/components/biolink/widgets";

export function WithCoverLayout({
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
      preview={preview}
    >
      <div className="absolute inset-x-0 top-0 m-2 flex h-60 justify-center overflow-hidden">
        <BackgroundMedia
          url={config.background?.url}
          className={cn(
            "max-w-screen-md rounded-b-md rounded-t-xl",
            preview && "rounded-t-3xl",
          )}
        />
      </div>
      <ContentContainer className="mb-24 mt-40 p-0">
        <div className="flex flex-col items-center justify-center">
          <ProfilePicture className="mb-4" src={user.image} nullable />
          <Title
            options={config.profile?.title}
            user={user}
            effect={config.effects?.title}
          />
          {!config.profile?.hideUsername && (
            <Username username={user.username} options={config.profile?.text} />
          )}
          {user.bio && (
            <Bio
              bio={user.bio}
              options={config.profile?.text}
              className="text-center"
            />
          )}
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
