import React from "react";
import { Skeleton } from "../ui/skeleton";

const CardAnalyticsSkeleton = () => {
  return (
    <div className="bg-white flex justify-between gap-4 border border-slate-300 p-4 rounded-xl">
      <Skeleton className="w-14 h-14 rounded-full" />
      <div className="flex flex-col items-end gap-2">
        <Skeleton className="w-40 h-6" />
        <Skeleton className="w-24 h-8" />
      </div>
    </div>
  );
};

export default CardAnalyticsSkeleton;
