import type {
  BackgroundOptions,
  ButtonOptions,
  EffectsOptions,
  TopIconOptions,
  ProfileOptions,
} from ".";

export interface Config {
  profile: ProfileOptions;
  background: BackgroundOptions;
  button: ButtonOptions;
  topIcon: TopIconOptions;
  effects: EffectsOptions;
}
