import type { Config, User, Profile, Settings, Link } from ".";

export interface Biolink {
  user: User;
  profile: Profile;
  config: Config;
  settings: Settings;
  links: Link[];
}
