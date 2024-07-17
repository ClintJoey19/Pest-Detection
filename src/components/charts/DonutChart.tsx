"use client";

import { useMemo } from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

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

const chartConfig = {
  count: {
    label: "Count",
  },
  aphids: {
    label: "Aphids",
    color: "blue",
  },
  fruitfly: {
    label: "Fruitfly",
    color: "green",
  },
  ["pumpkin-beetle"]: {
    label: "Pumpkin Beetle",
    color: "hsl(var(--primary))",
  },
  ["serpentine-leafminer"]: {
    label: "Serpentine Leafminer",
    color: "red",
  },
  whitefly: {
    label: "Whitefly",
    color: "orange",
  },
} satisfies ChartConfig;

export type PestClassCount = {
  pest: string;
  count: number;
  fill: string;
};

export default function DonutChart({
  chartData,
}: {
  chartData: PestClassCount[] | undefined;
}) {
  if (!chartData || chartData.length === 0) return null;

  const totalPests = useMemo(() => {
    return chartData?.reduce((acc, curr) => acc + curr.count, 0);
  }, [chartData]);

  return (
    <Card className="h-full flex justify-between flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pest Count Distribution</CardTitle>
        <CardDescription>
          Breakdown of pest population by species.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="pest"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalPests?.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
