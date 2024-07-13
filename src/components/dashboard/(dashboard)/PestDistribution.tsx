import DonutChart from "@/components/charts/DonutChart";
import { getTotalPredictionClassCount } from "@/lib/actions/prediction.action";

const PestDistribution = async () => {
  const data = await getTotalPredictionClassCount();

  if (!data) return null;

  const chartData = data?.map((d) => ({
    ...d,
    fill: `var(--color-${d.pest.toLowerCase()})`,
  }));

  return <DonutChart chartData={chartData} />;
};

export default PestDistribution;
