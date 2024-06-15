export interface LinkOptions {
  website: WebsiteLink[];
  platform: PlatformLink[];
}

export interface Link {}

export interface WebsiteLink extends Link {
  id?: string;
  url: string;
  title: string;
  order?: number;
  featured?: boolean;
  archived?: boolean;
  imageUrl?: string;
  iconName?: string;
}

export interface PlatformLink extends Link {
  id?: string;
  url?: string;
  order?: number;
  archived?: boolean;
  provider: string;
  username: string;
}
