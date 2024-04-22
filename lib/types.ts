import { IconType } from "react-icons/lib";

export interface Link {
  id: string;
  order: number;
  title: string;
  url: string;
  hidden?: boolean;
  archived?: boolean;
  icon?: string; // cannot be saved in db. use string intead
}

export interface SocialLink {
  icon: IconType;
  label: string;
  url: string;
  color: string;
}
