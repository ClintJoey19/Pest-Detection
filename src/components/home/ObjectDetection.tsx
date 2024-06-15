"use client";
import { useState } from "react";
import FileUpload from "../global/FileUpload";
import SectionHeader from "../global/SectionHeader";
import Image from "next/image";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";

const ObjectDetection = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleImageUrl = (url: string) => {
    setImageUrl(url);
  };

  const handleDetection = async () => {
    try {
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container flex flex-col gap-4">
      <div className="flex flex-col items-center gap-4">
        <SectionHeader label="Object Detection" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
          dolore.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-lg font-semibold">Upload Image</h3>
          <div className="aspect-video">
            <FileUpload
              endpoint="uploadImage"
              onChange={(url) => {
                if (url) handleImageUrl(url);
              }}
            />
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Output</h3>
          {!imageUrl ? (
            <p>No image uploaded</p>
          ) : (
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src={imageUrl} alt="image" fill />
            </div>
          )}
          {imageUrl && (
            <Button className="mt-2" disabled={isSubmitting}>
              {isSubmitting && (
                <LoaderCircle className="h-4 w-4 mr-2 animate-spin" />
              )}
              Detect
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ObjectDetection;
