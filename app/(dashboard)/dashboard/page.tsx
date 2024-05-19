import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { PageWithPreview } from "@/components/dashboard/page";
import { Heading } from "@/components/ui/typography";
import { subDays } from "date-fns";
import { CardsMetric } from "./(account)/analytics/metrics";
import { cn } from "@/lib/utils";
import { constructPlatformUrl } from "@/lib/utils/construct-link";
import { MousePointerClick } from "lucide-react";
import Link from "next/link";

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
async function getAnalytics(): Promise<Analytics | null> {
  const session = await auth();

  if (!session?.user?.id) return null;

  const currentStartDate = subDays(new Date(), 1);
  const currentEndDate = new Date();

  const previousStartDate = subDays(currentStartDate, 1);
  const previousEndDate = subDays(currentEndDate, 1);

  const user = await db.user.findUnique({
    where: {
      id: session.user.id,
    },
    include: {
      views: {
        where: {
          timestamp: {
            gte: currentStartDate,
            lte: currentEndDate,
          },
        },
      },
      websiteLinks: {
        include: {
          clicks: {
            where: {
              timestamp: {
                gte: currentStartDate,
                lte: currentEndDate,
              },
            },
          },
        },
      },
      platformLinks: {
        include: {
          clicks: {
            where: {
              timestamp: {
                gte: currentStartDate,
                lte: currentEndDate,
              },
            },
          },
        },
      },
    },
  });

  if (!user) return null;

  const allLinks = [...user.websiteLinks, ...user.platformLinks];

  const totalClicksCurrent = allLinks
    .filter((link) =>
      link.clicks.some((click) => click.timestamp >= previousEndDate),
    )
    .reduce((total, link) => total + link.clicks.length, 0);

  const totalClicksPrevious = allLinks
    .filter((link) =>
      link.clicks.some((click) => click.timestamp <= currentStartDate),
    )
    .reduce((total, link) => total + link.clicks.length, 0);

  const currentViews = user.views.filter((view) => {
    return view.timestamp >= previousEndDate;
  }).length;

  const previousViews = user.views.filter((view) => {
    return view.timestamp <= previousStartDate;
  }).length;
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

export default async function Analytics() {
  const analytics = await getAnalytics();

  if (!analytics) return null;

  return (
    <PageWithPreview>
      <Heading>Analytics</Heading>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatCard
          label="Views"
          value={analytics.views.current}
          previousValue={analytics.views.previous}
          className="bg-emerald-500"
        />
        <StatCard
          label="Clicks"
          value={analytics.clicks.current}
          previousValue={analytics.clicks.previous}
          className="bg-indigo-500"
        />
        <StatCard
          label="CTR"
          value={analytics.ctr.current}
          previousValue={analytics.ctr.previous}
          className="bg-yellow-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        <div className="col-span-3">
          <div className="mb-4 text-lg font-semibold">Geography</div>
          <div className="bg-glass border-glass rounded-lg border p-4">
            <CardsMetric data={analytics.data} />
          </div>
        </div>
        <div className="col-span-2">
          <div className="mb-4 text-lg font-semibold">Top Links by Clicks</div>
          <div className="grid grid-cols-1 gap-2">
            {analytics.popularLinks.map((link) => (
              <div
                key={link.id}
                className="bg-glass border-glass rounded-lg border p-2"
              >
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[10px] text-muted-foreground"
                >
                  {link.url}
                </Link>
                <div className="mt-1 flex items-center gap-1 text-xs">
                  <MousePointerClick className="size-3" />
                  {link.clicks}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWithPreview>
  );
}

function StatCard({
  label,
  value,
  previousValue,
  className,
}: {
  label: string;
  value: number;
  previousValue?: number;
  className?: string;
}) {
  return (
    <div className="bg-glass border-glass space-y-1 rounded-lg border p-4">
      <div className="flex items-center gap-2">
        <div className={cn("size-2 rounded-full", className)} />
        <div className="text-sm">{label}</div>
      </div>
      <div className="text-xl font-medium">{value}</div>
    </div>
  );
}
