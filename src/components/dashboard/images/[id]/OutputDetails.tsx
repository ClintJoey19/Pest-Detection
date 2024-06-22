"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { deleteOutput } from "@/lib/actions/output.action";
import { formatInference } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
  const router = useRouter();
  const { toast } = useToast();

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
      </div>
      <Button
        variant="outline"
        className="mt-4"
        disabled={isSubmitting}
        onClick={handleDelete}
      >
        <Trash2 className="h-4 w-4 text-destructive mr-2" />
        Delete
      </Button>
    </div>
  );
};

export default OutputDetails;
