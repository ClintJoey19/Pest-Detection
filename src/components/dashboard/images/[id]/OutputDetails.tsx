"use client";
import PestBadge from "@/components/global/PestBadge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { deleteOutput } from "@/lib/actions/output.action";
import { formatInference } from "@/lib/utils";
import { Sparkles, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface OutputDetailsProps {
  id: string;
  time: number;
  predictions: {
    id: string;
    confidence: number;
    class: string;
    classId: number;
    outputId: string | null;
  }[];
}

const OutputDetails = ({ id, time, predictions }: OutputDetailsProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [detections, setDetections] = useState<Record<string, number>>({});
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const pestCount: Record<string, number> = {};

    if (predictions) {
      for (const detection of predictions) {
        const pest = detection.class;
        if (pestCount[pest]) {
          pestCount[pest]++;
        } else {
          pestCount[pest] = 1;
        }
      }
    }

    setDetections(pestCount);
  }, [predictions]);

  const onAskAi = () => {
    const pests = Object.keys(detections).toString();

    router.push(`/dashboard/ask-ai?pests=${pests}`);
  };

  const handleDelete = async () => {
    try {
      setIsSubmitting(true);
      await deleteOutput(id);
      toast({
        title: "Image deleted",
      });
      router.replace("/dashboard/images");
    } catch (error: any) {
      console.error(error.message);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between gap-4">
          <p>Inference Time</p>{" "}
          <span className="text-primary font-semibold">
            {formatInference(time)}
          </span>
        </div>
        <div className="flex justify-between gap-4">
          <p>Predictions</p>{" "}
          <span className="text-primary font-semibold">
            {predictions.length} predicted
          </span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          {predictions &&
            Object.entries(detections).map(([pest, value]) => (
              <PestBadge key={pest} pest={pest} value={value} />
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <Button
          variant="outline"
          size="sm"
          disabled={!detections}
          onClick={onAskAi}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Ask AI
        </Button>
        <Button
          variant="outline"
          disabled={isSubmitting}
          onClick={handleDelete}
        >
          <Trash2 className="h-4 w-4 text-destructive mr-2" />
          Delete
        </Button>
      </div>
    </div>
  );
};

export default OutputDetails;
