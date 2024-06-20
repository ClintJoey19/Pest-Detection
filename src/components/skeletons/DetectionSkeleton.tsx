import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const DetectionSkeleton = () => {
  return (
    <div className="h-full w-full relative flex items-center justify-center">
      <Skeleton className="h-full w-full rounded-xl absolute top-0 left-0" />
      <p className="text-lg text-primary font-semibold">Detecting...</p>
    </div>
  );
};

export default DetectionSkeleton;
