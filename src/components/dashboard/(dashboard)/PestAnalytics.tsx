import LineChart from "@/components/charts/LineChart";
import MonthFilter from "@/components/global/MonthFilter";
import { formatDate } from "@/lib/utils";

const PestAnalytics = async () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Pest Analytics</h3>
        <MonthFilter />
      </div>
      <div className="w-full flex max-md:flex-col gap-4">
        <div className="w-full flex flex-col gap-4 items-center bg-white border border-slate-300 p-4 rounded-xl">
          <h3 className="font-semibold">{formatDate(new Date())}</h3>
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default PestAnalytics;
