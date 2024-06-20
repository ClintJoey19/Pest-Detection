"use client";
import { useState } from "react";
import axios from "axios";
import FileUpload from "@/components/global/FileUpload";
import { Button } from "@/components/ui/button";
import { ImageUp, LoaderCircle, Upload, X } from "lucide-react";
import Image from "next/image";
import { DataProps } from "@/app/api/roboflow/detection";
import DetectionOutput from "../DetectionOutput";

const DetectionForm = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isDetecting, setIsDetecting] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [outputData, setOutputData] = useState<DataProps | null>(null);
  const [outputImage, setOutputImage] = useState<string>("");

  const handleToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleImageChange = (url: string) => {
    setImageUrl(url);
  };

  const onDetect = async () => {
    try {
      setIsSubmitting(true);
      setIsDetecting(true);

      const res = await axios.post("http://localhost:3000/api/roboflow", {
        imageUrl,
      });

      const { data, bufferedOutput } = await res.data;
      setOutputImage(bufferedOutput);
      setOutputData(data);
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setIsSubmitting(false);
      setIsDetecting(false);
    }
  };

  const onDownloadOutput = () => {
    const link = document.createElement("a");
    link.href = outputImage;
    link.download = "output-image.jpg";
    link.click();
  };

  const onSubmit = async () => {
    try {
      console.log();
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <div className="flex flex-col gap-2 border bg-white p-4 rounded-xl">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h3 className="text-primary font-semibold">Upload Image</h3>
              {!isEditing ? (
                <Button variant="outline" size="sm" onClick={handleToggle}>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload
                </Button>
              ) : (
                <Button variant="outline" size="sm" onClick={handleToggle}>
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              )}
            </div>
            <p className="text-sm">
              This current model is able to identify the following pest/insects:
              Whitefly, Aphids, Pumpkin-Beetle, Fruitfly, Serpentine-leafminer.
              Try uploading{" "}
              <span className="font-semibold">(jpg, jpeg, png only)</span>.
            </p>
          </div>
          <div className="mt-6">
            {!isEditing ? (
              <div className="flex flex-col gap-6">
                {imageUrl ? (
                  <div className="relative h-[350px] rounded-lg overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt="input-image"
                      className="h-full object-contain mx-auto"
                      fill
                    />
                  </div>
                ) : (
                  <div className="relative h-[350px] flex items-center justify-center bg-slate-200 rounded-lg">
                    <div className="flex flex-col items-center gap-2">
                      <ImageUp className="text-slate-700 w-6 h-6" />
                      <p className="text-sm text-slate-500 font-semibold">
                        No uploaded image.
                      </p>
                    </div>
                  </div>
                )}
                <div className="h-full text-end">
                  <Button disabled={imageUrl ? false : true} onClick={onDetect}>
                    {isSubmitting && (
                      <LoaderCircle className="w-4 h-4 mr-2 animate-spin" />
                    )}
                    Run Detection
                  </Button>
                </div>
              </div>
            ) : (
              <div className="aspect-video">
                <FileUpload
                  endpoint="uploadImage"
                  onChange={(url) => {
                    if (url) {
                      handleImageChange(url);
                      setIsEditing(false);
                    }
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <DetectionOutput
        outputData={outputData}
        outputImage={outputImage}
        isDetecting={isDetecting}
        onDownloadOutput={onDownloadOutput}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default DetectionForm;
