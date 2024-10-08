import type { Metadata } from "next";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "linkinbio.at",
  description:
    "Introducing your advanced, no-cost solution for engaging with your audience, offering full customization without any themes.",
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://linkinbio.at",
  paymentLink:
    process.env.NODE_ENV === "development"
      ? "https://buy.stripe.com/test_8wMg2Y5rBdAjgA8aEE"
      : "",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://linkinbio.at"),
  title: {
    default: `${siteConfig.name}`,
    template: `%s \u00b7 ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [
      {
        url: "/icon.svg",
        href: "/icon.svg",
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
        url: "/landing.png",
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
        url: "/landing.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "EMM",
      },
    ],
  },
};
