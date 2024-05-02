import type { Config, User, Link, Modules } from ".";

export interface Biolink {
  user: User;
  config: Config;
  links: Link[];
  modules: Modules;
}
