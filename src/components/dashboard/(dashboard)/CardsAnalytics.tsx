import { Image } from "lucide-react";
import React from "react";

interface CardsAnalyticsProps {
  label: string;
  iconLabel: React.ReactNode;
  getValue: () => Promise<number | undefined>;
}

const CardsAnalytics = async ({
  label,
  iconLabel,
  getValue,
}: CardsAnalyticsProps) => {
  const value = (await getValue()) || 0;

  return (
    <div className="bg-white flex justify-between gap-4 border border-slate-300 p-4 rounded-xl">
      <div className="w-14 h-14 bg-purple-200 flex justify-center items-center rounded-full">
        {iconLabel}
      </div>
      <div className="flex flex-col items-end gap-2">
        <p className="font-semibold">{label}</p>
        <span className="text-2xl text-primary font-semibold">{value}</span>
      </div>
    </div>
  );
};

export default CardsAnalytics;
