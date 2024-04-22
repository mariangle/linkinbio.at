import type { Configuration, User, Profile, Settings, Link } from ".";

export interface Biolink {
  user: User;
  profile: Profile;
  config: Configuration;
  settings: Settings;
  links: Link[];
}
