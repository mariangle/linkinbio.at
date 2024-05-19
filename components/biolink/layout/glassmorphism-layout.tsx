import { Bio } from "@/components/biolink/bio";
import { Title } from "@/components/biolink/title";
import { Button } from "@/components/biolink/button";
import { Username } from "@/components/biolink/username";
import { ProfilePicture } from "@/components/biolink/profile-picture";
import { TopIcon } from "@/components/biolink/icon";
import {
  BackgroundContainer,
  BackgroundMedia,
} from "@/components/biolink/background";
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
    >
      <BackgroundMedia
        url={config.background?.url}
        className={cn("fixed inset-0", preview && "absolute")}
      />
      <div className="my-12 flex w-full max-w-[350px] flex-col items-center justify-center gap-8 md:my-24">
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
          {links.platform.length > 0 && (
            <div className="mt-4 flex w-full justify-start gap-4">
              {links.platform.map((link, index) => (
                <TopIcon options={config.icons} key={index} item={link} />
              ))}
            </div>
          )}
          {links.website.length > 0 && (
            <div className="my-6 w-full space-y-4">
              {links.website.map((link, index) => (
                <Button key={index} item={link} config={config.buttons} />
              ))}
            </div>
          )}
        </ContentContainer>
        <Widgets widgets={widgets} premium={user.premium} />
      </div>
      <Footer color={config.profile?.text?.color} />
    </BackgroundContainer>
  );
}
