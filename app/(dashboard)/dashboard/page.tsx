import { CardsMetric } from "./_components/metrics";
import { cn } from "@/lib/utils";
import { MousePointerClick } from "lucide-react";
import Link from "next/link";
import { getAnalytics } from "@/server/actions/get-analytics";
import { Heading } from "@/components/ui/typography";

export const metadata = {
  title: "Dashboard",
};

export default async function Analytics() {
  const analytics = await getAnalytics();

  if (!analytics) return null;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatCard
          label="Views"
          value={`${analytics.views.current}`}
          previousValue={analytics.views.previous}
          className="bg-emerald-500"
        />
        <StatCard
          label="Clicks"
          value={`${analytics.clicks.current}`}
          previousValue={analytics.clicks.previous}
          className="bg-indigo-500"
        />
        <StatCard
          label="CTR"
          value={`${analytics.ctr.current.toFixed(2)}%`}
          previousValue={analytics.ctr.previous}
          className="bg-yellow-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        <div className="col-span-3">
          <Heading>Geography</Heading>
          <div className="glassmorphism dark:glassmorphism rounded-lg border p-4">
            <CardsMetric data={analytics.data} />
          </div>
        </div>
        <div className="col-span-2">
          <Heading>Top Links by Clicks</Heading>
          <div className="grid grid-cols-1 gap-2">
            {analytics.popularLinks.map((link) => (
              <div
                key={link.id}
                className="glassmorphism rounded-lg border p-2"
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
    </>
  );
}

function StatCard({
  label,
  value,
  previousValue,
  className,
}: {
  label: string;
  value: string;
  previousValue?: number;
  className?: string;
}) {
  return (
    <div className="glassmorphism space-y-1 rounded-lg border p-4">
      <div className="flex items-center gap-2">
        <div className={cn("size-2 rounded-full", className)} />
        <div className="text-sm">{label}</div>
      </div>
      <div className="text-xl font-medium">{value}</div>
    </div>
  );
}
