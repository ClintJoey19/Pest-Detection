"use client";
import { useState } from "react";
import FileUpload from "@/components/global/FileUpload";
import { Button } from "@/components/ui/button";
import {
  ArrowDownToLine,
  ImageUp,
  LoaderCircle,
  Sparkles,
  Upload,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DetectionForm = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [outputImage, setOutputImage] = useState<string>("");

  const handleToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleImageChange = (url: string) => {
    setImageUrl(url);
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
    <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-4">
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste at
            accusamus velit culpa enim provident!
          </p>
        </div>
        <div className="mt-6">
          {!isEditing ? (
            <div className="flex flex-col gap-6">
              {imageUrl ? (
                <div className="relative h-[350px] rounded-lg overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt="image"
                    fill
                    className="object-contain"
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
              <div className="text-end">
                <Button disabled={imageUrl ? false : true}>
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
      <div className="flex flex-col gap-2 border bg-white p-4 rounded-xl">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h3 className="text-primary font-semibold">Output</h3>
            {/* <Button
              variant="outline"
              size="sm"
              asChild
            >
              <Link href={`/dashboard/ask-ai`}>
                <Sparkles className="w-4 h-4 mr-2" />
                Ask AI
              </Link>
            </Button> */}
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste at
            accusamus velit culpa enim provident!
          </p>
        </div>
        <div className="flex flex-col gap-6 mt-6">
          <div className="relative h-[350px] rounded-lg overflow-hidden">
            {!outputImage ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-slate-200">
                <ImageUp className="text-slate-700 w-6 h-6" />
                <p className="text-sm text-slate-500 font-semibold">
                  No output image.
                </p>
              </div>
            ) : (
              <Image
                src={`/hero.jpg`}
                alt="output-image"
                fill
                className="object-contain"
              />
            )}
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${
              !outputImage && "hidden"
            }`}
          >
            <Button variant="outline" size="sm" asChild>
              <Link href={`/dashboard/ask-ai`}>
                <Sparkles className="w-4 h-4 mr-2" />
                Ask AI
              </Link>
            </Button>
            <Button size="sm">
              <ArrowDownToLine className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetectionForm;