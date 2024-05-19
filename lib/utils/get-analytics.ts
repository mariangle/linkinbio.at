import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { constructPlatformUrl } from "@/lib/utils/construct-link";

export interface Analytics {
  views: {
    current: number;
    previous: number;
  };
  clicks: {
    current: number;
    previous: number;
  };
  ctr: {
    current: number;
    previous: number;
  };
  popularLinks: {
    id: string;
    url: string;
    clicks: number;
  }[];
  data: {
    country: string;
    views: number;
  }[];
}

export async function getAnalytics(): Promise<Analytics | null> {
  const session = await auth();

  if (!session?.user?.id) return null;

  const user = await db.user.findUnique({
    where: {
      id: session.user.id,
    },
    include: {
      views: true,
      websiteLinks: {
        include: {
          clicks: true,
        },
      },
      platformLinks: {
        include: {
          clicks: true,
        },
      },
    },
  });

  if (!user) return null;

  const allLinks = [...user.websiteLinks, ...user.platformLinks];

  const totalClicksCurrent = allLinks
    /*.filter((link) =>
      link.clicks.some((click) => click.timestamp >= previousEndDate),
    )*/
    .reduce((total, link) => total + link.clicks.length, 0);

  const totalClicksPrevious = allLinks
    /*.filter((link) =>
      link.clicks.some((click) => click.timestamp <= currentStartDate),
    )*/
    .reduce((total, link) => total + link.clicks.length, 0);

  const currentViews = user.views.length;

  const previousViews = user.views.length;
  const currentCtr =
    currentViews !== 0
      ? Math.min((totalClicksCurrent / currentViews) * 100, 100)
      : 0;

  const previousCtr =
    previousViews !== 0
      ? Math.min((totalClicksPrevious / previousViews) * 100, 100)
      : 0;

  const sortedLinks = allLinks
    .map((link) => ({
      id: link.id,
      url:
        //@ts-ignore
        link.url ??
        constructPlatformUrl({
          //@ts-ignore
          provider: link.provider,
          //@ts-ignore
          username: link.username,
        }),
      clicks: link.clicks.length,
    }))
    .sort((a, b) => b.clicks - a.clicks);

  const popularLinks = sortedLinks.map((link) => ({
    id: link.id,
    url: link.url,
    clicks: link.clicks,
  }));

  const countryViewsMap = user.views.reduce(
    (
      acc: {
        [country: string]: number;
      },
      view,
    ) => {
      if (view.country) {
        acc[view.country] = (acc[view.country] || 0) + 1;
      }
      return acc;
    },
    {},
  );

  const countryViews = Object.entries(countryViewsMap).map(
    ([country, views]) => ({
      country,
      views,
    }),
  );

  return {
    views: {
      current: currentViews,
      previous: previousViews,
    },
    clicks: {
      current: totalClicksCurrent,
      previous: totalClicksPrevious,
    },
    ctr: {
      current: currentCtr,
      previous: previousCtr,
    },
    popularLinks,
    data: countryViews,
  };
}
