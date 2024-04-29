export interface Link {
  id: string;
  order: number;
  title: string;
  url: string;
  hidden?: boolean;
  archived?: boolean;
  isTopIcon: boolean;
  iconId?: number;
}
