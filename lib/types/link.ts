export interface LinkOptions {
  website: WebsiteLink[];
  platform: PlatformLink[];
}

export interface Link {
  id?: string;
  url: string;
  title: string;
  order: number;
  archived: boolean;
}

export interface WebsiteLink extends Link {
  iconId: number;
}

export interface PlatformLink extends Link {
  provider: string;
  username: string;
  isTopIcon: boolean;
}
