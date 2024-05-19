import type {
  BackgroundOptions,
  ButtonOptions,
  EffectsOptions,
  IconOptions,
  ProfileOptions,
} from ".";

export interface Config {
  profile: ProfileOptions;
  background: BackgroundOptions;
  buttons: ButtonOptions;
  icons: IconOptions;
  effects: EffectsOptions;
}
