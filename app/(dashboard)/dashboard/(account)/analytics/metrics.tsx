"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function CardsMetric({
  data,
}: {
  data: {
    country: string;
    views: number;
  }[];
}) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"]; // Define color palette

  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="views"
            nameKey="country"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={({ percent }) => `${(percent * 100).toFixed(2)}%`}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-x-2 bottom-2 flex justify-center gap-4">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="size-1.5 rounded-full"
              style={{
                backgroundColor: COLORS[index % COLORS.length],
              }}
            ></div>
            <div className="text-xs">{entry.country}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
