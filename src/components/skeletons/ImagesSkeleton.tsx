import React from "react";
import { Skeleton } from "../ui/skeleton";

const ImagesSkeleton = ({ length }: { length: number }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({ length }).map((_, i) => (
        <Skeleton key={i} className="w-full h-[250px] rounded-xl" />
      ))}
    </div>
  );
};

export default ImagesSkeleton;
