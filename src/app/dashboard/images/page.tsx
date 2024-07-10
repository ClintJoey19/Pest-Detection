import Images from "@/components/dashboard/images/Images";
import ImagesSkeleton from "@/components/skeletons/ImagesSkeleton";
import { Suspense } from "react";

const page = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="header">Images</h2>
      <Suspense fallback={<ImagesSkeleton length={12} />}>
        <Images />
      </Suspense>
    </section>
  );
};

export default page;
