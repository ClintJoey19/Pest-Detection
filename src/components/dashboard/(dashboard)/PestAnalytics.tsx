import { VerticalBarChart } from "@/components/charts/VerticalBarChart";
import { getPredictionsCombinedCount } from "@/lib/actions/prediction.action";

const PestAnalytics = async () => {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const data = await getPredictionsCombinedCount(month + 1, year);

  if (!data) return null;

  return <VerticalBarChart date={date} data={data} />;
};

export default PestAnalytics;
