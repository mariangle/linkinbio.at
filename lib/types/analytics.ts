export interface Analytics {
  views: number;
  clicks: number;
  ctr: number;
  popularLinks: {
    id: string;
    title: string;
    clicks: number;
  }[];
}
