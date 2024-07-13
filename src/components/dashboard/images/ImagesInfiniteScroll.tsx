"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Output } from "./Images";
import ImageLayout from "./ImageLayout";
import { LoaderCircle } from "lucide-react";
import { getOutputs } from "@/lib/actions/output.action";

interface ImagesInfiniteScrollProps {
  data: Output[] | undefined;
  hasNextPage: boolean;
}

const ImagesInfiniteScroll = ({
  data,
  hasNextPage,
}: ImagesInfiniteScrollProps) => {
  const [images, setImages] = useState(data);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState<boolean>(hasNextPage || false);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const loadMoreImages = async () => {
    const newImages = await getOutputs(page + 1, 12);
    if (newImages) {
      setImages((prev) => {
        if (Array.isArray(prev)) {
          return [...prev, ...newImages?.data];
        }
      });
      setNextPage(newImages?.hasNextPage || false);
      setPage(page + 1);
    }
  };

  useEffect(() => {
    if (inView) loadMoreImages();
  }, [inView]);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images?.map((output) => (
          <ImageLayout key={output.id} id={output.id} image={output.image} />
        ))}
      </div>
      {nextPage && (
        <div className="flex justify-center items-center gap-2" ref={ref}>
          <LoaderCircle className="h-8 w-8 text-primary animate-spin" />
        </div>
      )}
    </div>
  );
};

export default ImagesInfiniteScroll;
