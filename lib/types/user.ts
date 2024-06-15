export type Badge = "verified" | "premium" | "donator" | "early" | "creator";

export interface User {
  id: string;
  username: string;
  email: string;
  title?: string;
  image?: string;
  occupation?: string;
  location?: string;
  bio?: string;
  premium: boolean;
  badges: Badge[];
}

export interface SesssionUser {
  id: string;
  username: string;
  email: string;
}
