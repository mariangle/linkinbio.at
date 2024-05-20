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
      className={cn("p-2", preview && "absolute inset-0")}
    >
      <BackgroundMedia
        url={config.background?.url}
        className={cn("fixed inset-0", preview && "absolute h-full w-full")}
      />
      <div className="mt-[200px] flex h-full w-full flex-col">
        <ContentContainer
          className={cn(
            "relative z-20 flex h-full w-full flex-col items-center justify-between rounded-2xl bg-white pt-8 md:h-fit",
            preview && "!h-full",
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
            {links.website.length > 0 && (
              <div className="mt-8 w-full space-y-4">
                {links.website.map((link, index) => (
                  <Button key={index} item={link} config={config.buttons} />
                ))}
              </div>
            )}
            <Widgets widgets={widgets} premium={user.premium} />
          </div>
          {links.platform.length > 0 && (
            <div className="mt-6 flex gap-4">
              {links.platform.map((link, index) => (
                <TopIcon options={config.icons} key={index} item={link} />
              ))}
            </div>
          )}
        </ContentContainer>
      </div>
    </BackgroundContainer>
  );
}
