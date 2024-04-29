export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "linkinbio",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, amet.",
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://valorant-boosting.vercel.app",
};
