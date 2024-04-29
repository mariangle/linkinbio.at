import type {
  Biolink,
  Config,
  EffectsOptions,
  Link,
  Modules,
  User,
} from "@/lib/types";
import { Layout as LayoutEnum } from "@/lib/types/enums";
import { GlassmorphismLayout } from "@/components/biolink/layout/glassmorphism-layout";
import { StandardLayout } from "@/components/biolink/layout/standard-layout";
import { WithCoverLayout } from "@/components/biolink/layout/with-cover-layout";
import { ProfessionalLayout } from "./professional-layout";
import { WeatherEffect } from "@/components/biolink/effects/weather-effect";
import { determineBrightness } from "@/lib/utils/determine-brightness";

export interface LayoutProps {
  user: User;
  config: Config;
  links: Link[];
  modules?: Modules;
  preview?: boolean;
}

export function Layout({
  biolink,
  preview,
  layout,
}: {
  biolink: Biolink;
  preview?: boolean;
  layout?: LayoutEnum;
}) {
  const useDarkText = biolink.config.background.url
    ? biolink.config.invertTextColor
    : determineBrightness(biolink.config.background.color);

  switch (layout) {
    case LayoutEnum.Glassmorphism:
      return (
        <LayoutWrapper preview={preview} effects={biolink.config.effects}>
          <GlassmorphismLayout
            modules={biolink.modules}
            user={biolink.user}
            links={biolink.links}
            config={biolink.config}
            preview={preview}
          />
        </LayoutWrapper>
      );

    case LayoutEnum.WithCover:
      return (
        <LayoutWrapper preview={preview} effects={biolink.config.effects}>
          <WithCoverLayout
            modules={biolink.modules}
            user={biolink.user}
            links={biolink.links}
            config={biolink.config}
            preview={preview}
          />
        </LayoutWrapper>
      );

    case LayoutEnum.Professional:
      return (
        <LayoutWrapper preview={preview} effects={biolink.config.effects}>
          <ProfessionalLayout
            modules={biolink.modules}
            user={biolink.user}
            links={biolink.links}
            config={biolink.config}
            preview={preview}
          />
        </LayoutWrapper>
      );

    default:
      return (
        <LayoutWrapper preview={preview} effects={biolink.config.effects}>
          <StandardLayout
            modules={biolink.modules}
            user={biolink.user}
            links={biolink.links}
            config={biolink.config}
            preview={preview}
          />
        </LayoutWrapper>
      );
  }
}

export function LayoutWrapper({
  children,
  effects,
  preview,
}: {
  children: React.ReactNode;
  effects: EffectsOptions;
  preview?: boolean;
}) {
  return (
    <div className="absolute inset-0">
      <WeatherEffect preview={preview} variant={effects.weather} />
      {children}
    </div>
  );
}
