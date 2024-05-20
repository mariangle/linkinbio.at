import { Bio } from "@/components/biolink/bio";
import { Title } from "@/components/biolink/title";
import { Button } from "@/components/biolink/button";
import { Username } from "@/components/biolink/username";
import { ProfilePicture } from "@/components/biolink/profile-picture";
import { TopIcon } from "@/components/biolink/icon";
import { Footer } from "@/components/biolink/footer";
import {
  BackgroundContainer,
  BackgroundMedia,
} from "@/components/biolink/background";
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
      className={cn(preview && "absolute inset-0")}
    >
      <BackgroundMedia
        url={config.background?.url}
        className={cn("fixed inset-0", preview && "absolute h-full w-full")}
      />
      <ContentContainer className="relative z-20 flex h-fit w-full flex-col items-center py-16">
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
        {links.platform.length > 0 && (
          <div className="mt-6 flex gap-4">
            {links.platform.map((link, index) => (
              <TopIcon options={config.icons} key={index} item={link} />
            ))}
          </div>
        )}
        {links.website.length > 0 && (
          <div className="mt-8 w-full space-y-4">
            {links.website.map((link, index) => (
              <Button key={index} item={link} config={config.buttons} />
            ))}
          </div>
        )}
        <Widgets widgets={widgets} premium={user.premium} />
      </ContentContainer>
      <Footer color={config.profile?.text?.color} />
    </BackgroundContainer>
  );
}
