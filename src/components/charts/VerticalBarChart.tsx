"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
import { formatDate } from "@/lib/utils";
const chartData = [
  { pest: "Aphids", detections: 186 },
  { pest: "Fruitfly", detections: 305 },
  { pest: "Pumpkin Beetle", detections: 237 },
  { pest: "Serpentine Leafminer", detections: 73 },
  { pest: "Whitefly", detections: 209 },
];

const chartConfig = {
  detections: {
    label: "Detections",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export type PestData = {
  pest: string;
  detections: number;
};

interface VerticalBarChartProps {
  date: Date;
  data: PestData[] | undefined;
}

export function VerticalBarChart({ date, data }: VerticalBarChartProps) {
  if (!data || data.length === 0) return null;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Pest Analytics</CardTitle>
        <CardDescription>{formatDate(date)}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid />
            <XAxis
              dataKey="pest"
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar
              dataKey="detections"
              fill="var(--color-detections)"
              radius={10}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
