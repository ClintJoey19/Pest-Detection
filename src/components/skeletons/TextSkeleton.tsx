import React from "react";
import { Skeleton } from "../ui/skeleton";

const TextSkeleton = ({ height }: { height: string }) => {
  return <Skeleton className={`${height} w-full rounded-md`} />;
};

export default TextSkeleton;
