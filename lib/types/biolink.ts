import type { Config, User, Widgets, WebsiteLink, PlatformLink } from ".";

export interface Biolink {
  user: User;
  config: Config;
  links: {
    website: WebsiteLink[];
    platform: PlatformLink[];
  };
  widgets: Widgets;
}
