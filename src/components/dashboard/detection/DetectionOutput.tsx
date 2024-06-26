"use client";
import { useEffect, useState } from "react";
import { DataProps } from "@/app/api/roboflow/detection";
import DetectionSkeleton from "@/components/skeletons/DetectionSkeleton";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { createOutput } from "@/lib/actions/output.action";
import { formatInference } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { ArrowDownToLine, CloudUpload, ImageUp, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PestBadge from "@/components/global/PestBadge";

interface DetectionOutputProps {
  outputData: DataProps | null;
  outputImage: string;
  isDetecting: boolean;
}

const DetectionOutput = ({
  outputData,
  outputImage,
  isDetecting,
}: DetectionOutputProps) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [detections, setDetections] = useState<Record<string, number>>({});
  const router = useRouter();
  const { toast } = useToast();
  const { userId } = useAuth();

  useEffect(() => {
    const pestCount: Record<string, number> = {};

    if (outputData) {
      for (const detection of outputData?.predictions) {
        const pest = detection.class;
        if (pestCount[pest]) {
          pestCount[pest]++;
        } else {
          pestCount[pest] = 1;
        }
      }
    }

    setDetections(pestCount);
  }, [outputData]);

  const onAskAi = () => {
    router.push(`/dashboard/ask-ai`);
  };

  const onDownloadOutput = () => {
    const link = document.createElement("a");
    link.href = outputImage;
    link.download = "output-image.png";
    link.click();
  };

  const onSubmit = async () => {
    try {
      setIsSubmitting(true);

      if (!userId) return console.error("User unauthorized");

      if (!outputData) return console.error("No output found");

      const { time, predictions } = outputData;

      const extracted = predictions.map((prediction) => ({
        userId,
        class: prediction.class,
        classId: prediction.class_id,
        confidence: prediction.confidence,
      }));

      await createOutput(outputImage, time, extracted);
      toast({
        title: "Output saved to cloud",
        variant: "success",
      });
    } catch (error: any) {
      console.error(error.message);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="mt-2 flex items-center gap-2">
            {outputData?.predictions &&
              !isDetecting &&
              Object.entries(detections).map(([pest, value]) => (
                <PestBadge key={pest} pest={pest} value={value} />
              ))}
          </div>
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
          <Button
            variant="outline"
            size="sm"
            disabled={isDetecting}
            onClick={onAskAi}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Ask AI
          </Button>
          <Button
            size="sm"
            variant="outline"
            disabled={
              isDetecting ||
              isSubmitting ||
              outputData?.predictions.length === 0
            }
            onClick={onSubmit}
          >
            <CloudUpload className="w-4 h-4 mr-2" />
            Add to Cloud
          </Button>
          <Button
            size="sm"
            disabled={isDetecting}
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
