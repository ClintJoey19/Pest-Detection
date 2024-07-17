import { getOutputs } from "@/lib/actions/output.action";
import ImageLayout from "./ImageLayout";
import ImagesInfiniteScroll from "./ImagesInfiniteScroll";

export type Prediction = {
  id: string;
  userId: string;
  confidence: number;
  class: string;
  classId: number;
  outputId: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type Output = {
  id: string;
  userId: string;
  image: string;
  time: number;
  createdAt: Date;
  updatedAt: Date;
  predictions: Prediction[];
};

export interface Outputs {
  data: Output[];
  hasNextPage: boolean;
}

const Images = async () => {
  const outputs: Outputs | undefined = await getOutputs(1, 12);

  if (!outputs?.data || outputs.data.length === 0)
    return <div>No saved image yet.</div>;

  return (
    <ImagesInfiniteScroll
      data={outputs.data}
      hasNextPage={outputs.hasNextPage}
    />
  );
};

export default Images;
