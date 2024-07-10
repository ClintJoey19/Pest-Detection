import React from "react";
import { Skeleton } from "../ui/skeleton";

const RecentImagesSkeleton = ({ length }: { length: number }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
      {Array.from({ length }).map((_, i) => (
        <Skeleton key={i} className="w-full h-[250px] rounded-xl" />
      ))}
    </div>
  );
};

export default RecentImagesSkeleton;
