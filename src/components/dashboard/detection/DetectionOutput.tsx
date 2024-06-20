import { DataProps } from "@/app/api/roboflow/detection";
import DetectionSkeleton from "@/components/skeletons/DetectionSkeleton";
import { Button } from "@/components/ui/button";
import { formatInference } from "@/lib/utils";
import { ArrowDownToLine, CloudUpload, ImageUp, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DetectionOutputProps {
  outputData: DataProps | null;
  outputImage: string;
  isDetecting: boolean;
  onDownloadOutput: () => void;
  onSubmit: () => void;
}

const DetectionOutput = ({
  outputData,
  outputImage,
  isDetecting,
  onDownloadOutput,
  onSubmit,
}: DetectionOutputProps) => {
  return (
    <div className="flex flex-col gap-2 border bg-white p-4 rounded-xl">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h3 className="text-primary font-semibold mb-2">Output</h3>
          {outputData?.time && !isDetecting && (
            <p className="text-sm">
              Inference time:{" "}
              <span className="text-primary font-semibold">
                {formatInference(outputData.time)}
              </span>
            </p>
          )}
          {outputData?.predictions && !isDetecting && (
            <p className="text-sm">
              Predictions:{" "}
              <span className="text-primary font-semibold">
                {outputData?.predictions.length} detected
              </span>
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-6">
        <div className="relative h-[350px] rounded-lg overflow-hidden">
          {!outputImage && !isDetecting ? (
            <div className="w-full h-full flex flex-col gap-2 items-center justify-center bg-slate-200">
              <ImageUp className="text-slate-700 w-6 h-6" />
              <p className="text-sm text-slate-500 font-semibold">
                No output image.
              </p>
            </div>
          ) : isDetecting ? (
            <div className="h-full w-full">
              <DetectionSkeleton />
            </div>
          ) : (
            <Image
              src={outputImage}
              alt="output-image"
              fill
              className="object-contain"
            />
          )}
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${
            !outputImage && !isDetecting && "hidden"
          }`}
        >
          <Button variant="outline" size="sm" asChild>
            <Link href={`/dashboard/ask-ai`}>
              <Sparkles className="w-4 h-4 mr-2" />
              Ask AI
            </Link>
          </Button>
          <Button size="sm" variant="outline" onClick={onSubmit}>
            <CloudUpload className="w-4 h-4 mr-2" />
            Add to Cloud
          </Button>
          <Button
            size="sm"
            onClick={onDownloadOutput}
            className="md:col-span-2"
          >
            <ArrowDownToLine className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetectionOutput;
