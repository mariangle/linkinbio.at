import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [
      {
        url: "/redux.svg",
        href: "/redux.svg",
      },
    ],
  },
  openGraph: {
    title: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    type: "website",
    images: [
      {
        url: "https://simple-carry.com/cdn/shop/files/RadiantRankBoosting_550x.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "EMM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "https://simple-carry.com/cdn/shop/files/RadiantRankBoosting_550x.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "EMM",
      },
    ],
  },
};
