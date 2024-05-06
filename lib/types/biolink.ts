import type { Config, User, Modules, WebsiteLink, PlatformLink } from ".";

export interface Biolink {
  user: User;
  config: Config;
  links: {
    website: WebsiteLink[];
    platform: PlatformLink[];
  };
  modules: Modules;
}
