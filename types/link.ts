export interface Link {
  id: string;
  order: number;
  title: string;
  url: string;
  hidden?: boolean;
  archived?: boolean;
  icon?: string;
}
