import DonutChart from "@/components/charts/DonutChart";
import CardsAnalytics from "@/components/dashboard/(dashboard)/CardsAnalytics";
import PestAnalytics from "@/components/dashboard/(dashboard)/PestAnalytics";
import PestDistribution from "@/components/dashboard/(dashboard)/PestDistribution";
import RecentImages from "@/components/dashboard/(dashboard)/RecentImages";
import CardAnalyticsSkeleton from "@/components/skeletons/CardAnalyticsSkeleton";
import RecentImagesSkeleton from "@/components/skeletons/RecentImagesSkeleton";
import { getOutputsCount } from "@/lib/actions/output.action";
import { getPredictionsCount } from "@/lib/actions/prediction.action";
import { Bug, Image } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const page = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="header">Dashboard</h2>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Suspense fallback={<CardAnalyticsSkeleton />}>
            <CardsAnalytics
              label="Output Images"
              iconLabel={<Image className="h-8 w-8 text-primary" />}
              getValue={getOutputsCount}
            />
          </Suspense>
          <Suspense fallback={<CardAnalyticsSkeleton />}>
            <CardsAnalytics
              label="Pest Detected"
              iconLabel={<Bug className="h-8 w-8 text-primary" />}
              getValue={getPredictionsCount}
            />
          </Suspense>
        </div>
        <div className="">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Recent Images</h3>
              <Link
                href="/dashboard/images"
                className="md:hidden text-primary hover:underline transition-all"
              >
                More
              </Link>
            </div>
            <Suspense fallback={<RecentImagesSkeleton length={4} />}>
              <RecentImages />
            </Suspense>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <PestAnalytics />
          </div>
          <div className="">
            <PestDistribution />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
