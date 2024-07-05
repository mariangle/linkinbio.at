import type {
  Biolink,
  Config,
  EffectsOptions,
  LinkOptions,
  User,
  Widgets,
} from "@/lib/types";
import { Layout as LayoutEnum } from "@/lib/types/enums";
import { GlassmorphismLayout } from "@/components/biolink/layout/glassmorphism-layout";
import { StandardLayout } from "@/components/biolink/layout/standard-layout";
import { WithCoverLayout } from "@/components/biolink/layout/with-cover-layout";
import { ProfessionalLayout } from "@/components/biolink/layout/professional-layout";
import { BoldLayout } from "@/components/biolink/layout/bold-layout";
import { WeatherEffect } from "@/components/biolink/effects/weather-effect";
import { ModernLayout } from "@/components/biolink/layout/modern-layout";
import { cn } from "@/lib/utils";

export interface LayoutProps {
  user: User;
  config: Config;
  links: LinkOptions;
  widgets?: Widgets;
  preview?: boolean;
}

export function Layout({
  biolink,
  preview,
  layout,
  className,
}: {
  biolink: Biolink;
  preview?: boolean;
  layout?: LayoutEnum;
  className?: string;
}) {
  if (biolink.user.premium) {
    switch (layout ?? biolink.config.profile?.layout) {
      case LayoutEnum.Glassmorphism:
        return (
          <LayoutWrapper
            premium={biolink.user.premium}
            preview={preview}
            effects={biolink.config.effects}
            className={className}
          >
            <GlassmorphismLayout
              widgets={biolink.widgets}
              user={biolink.user}
              links={biolink.links}
              config={biolink.config}
              preview={preview}
            />
          </LayoutWrapper>
        );

      case LayoutEnum.WithCover:
        return (
          <LayoutWrapper
            premium={biolink.user.premium}
            preview={preview}
            effects={biolink.config.effects}
            className={className}
          >
            <WithCoverLayout
              widgets={biolink.widgets}
              user={biolink.user}
              links={biolink.links}
              config={biolink.config}
              preview={preview}
            />
          </LayoutWrapper>
        );

      case LayoutEnum.Professional:
        return (
          <LayoutWrapper
            premium={biolink.user.premium}
            preview={preview}
            effects={biolink.config.effects}
            className={className}
          >
            <ProfessionalLayout
              widgets={biolink.widgets}
              user={biolink.user}
              links={biolink.links}
              config={biolink.config}
              preview={preview}
            />
          </LayoutWrapper>
        );

      case LayoutEnum.Bold:
        return (
          <LayoutWrapper
            premium={biolink.user.premium}
            preview={preview}
            effects={biolink.config.effects}
            className={className}
          >
            <BoldLayout
              widgets={biolink.widgets}
              user={biolink.user}
              links={biolink.links}
              config={biolink.config}
              preview={preview}
            />
          </LayoutWrapper>
        );

      case LayoutEnum.Modern:
        return (
          <LayoutWrapper
            premium={biolink.user.premium}
            preview={preview}
            effects={biolink.config.effects}
            className={className}
          >
            <ModernLayout
              widgets={biolink.widgets}
              user={biolink.user}
              links={biolink.links}
              config={biolink.config}
              preview={preview}
            />
          </LayoutWrapper>
        );
      default:
        break;
    }
  }
  return (
    <LayoutWrapper
      premium={biolink.user.premium}
      preview={preview}
      effects={biolink.config.effects}
      className={className}
    >
      <StandardLayout
        widgets={biolink.widgets}
        user={biolink.user}
        links={biolink.links}
        config={biolink.config}
        preview={preview}
      />
    </LayoutWrapper>
  );
}

export function LayoutWrapper({
  children,
  effects,
  preview,
  premium = true,
  className,
}: {
  children: React.ReactNode;
  effects?: EffectsOptions;
  preview?: boolean;
  premium: boolean;
  className?: string;
}) {
  return (
    <div className={cn("relative h-full w-full overflow-x-hidden", className)}>
      {premium && (
        <WeatherEffect
          preview={preview}
          variant={effects?.weather}
          className="pointer-events-none absolute inset-0 z-10"
        />
      )}
      <div className="relative h-full">{children}</div>
    </div>
  );
}
