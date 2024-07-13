"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import MonthFilter from "../global/MonthFilter";

const chartConfig = {
  visitors: {
    label: "Detections",
  },
  aphid: {
    label: "Aphid",
    color: "blue",
  },
  fruitfly: {
    label: "Fruitfly",
    color: "green",
  },
  ["pumpkin-beetle"]: {
    label: "Pumpkin-Beetle",
    color: "indigo",
  },
  ["serpentine-leafminer"]: {
    label: "Serpintine-Leafminer",
    color: "red",
  },
  whitefly: {
    label: "Whitefly",
    color: "orange",
  },
} satisfies ChartConfig;

export default function HorizontalBarChart() {
  const chartData = [
    { browser: "aphid", visitors: 275, fill: "var(--color-aphid)" },
    { browser: "fruitfly", visitors: 200, fill: "var(--color-fruitfly)" },
    {
      browser: "pumpkin-beetle",
      visitors: 187,
      fill: "var(--color-pumpkin-beetle)",
    },
    {
      browser: "serpentine-leafminer",
      visitors: 173,
      fill: "var(--color-serpentine-leafminer)",
    },
    { browser: "whitefly", visitors: 90, fill: "var(--color-whitefly)" },
  ];

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <div className="flex justify-between items-center gap-4">
          <CardTitle>Pest Analytics</CardTitle>
          <MonthFilter />
        </div>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="browser"
              type="category"
              width={100}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="visitors" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="visitors" layout="vertical" radius={10} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
