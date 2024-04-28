import type { Config, User, Profile, Settings, Link, Modules } from ".";

export interface Biolink {
  user: User;
  profile: Profile;
  config: Config;
  settings: Settings;
  links?: Link[];
  modules?: Modules;
}
