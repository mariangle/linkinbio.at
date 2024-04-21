import type { Metadata } from "next";
import { siteConfig } from "./config";

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
