import type { Config, User, Settings, Link, Modules } from ".";

export interface Biolink {
  user: User;
  config: Config;
  settings: Settings;
  links: Link[];
  modules?: Modules;
}
