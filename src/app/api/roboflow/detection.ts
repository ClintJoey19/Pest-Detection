import { CanvasRenderingContext2D, createCanvas, loadImage } from "canvas";
import fs from "fs";
import { utapi } from "@/lib/api-provider";
import { auth } from "@clerk/nextjs/server";

type Image = {
  width: number;
  height: number;
};

type Prediction = {
  x: number;
  y: number;
  width: number;
  height: number;
  confidence: number;
  class: string;
  class_id: number;
  detection_id: string;
};

interface DataProps {
  time: number;
  image: Image;
  predictions: Prediction[];
}

const drawBoundingBox = (
  imgWidth: number,
  imgHeight: number,
  data: DataProps,
  context: CanvasRenderingContext2D
) => {
  const colors = [
    "blue",
    "green",
    "indigo",
    "red",
    "darkorange",
    "magenta",
    "brown",
  ];
  const { predictions } = data;
  predictions.forEach((prediction) => {
    const {
      x,
      y,
      width,
      height,
      class: label,
      class_id,
      confidence,
    } = prediction;
    const topLeftX = x - width / 2;
    const topLeftY = y - height / 2;
    context.strokeStyle = colors[class_id];
    context.lineWidth = (Math.sqrt(imgWidth * imgHeight) / 250) * 2;
    context.strokeRect(topLeftX, topLeftY, width, height);

    const textHeight = (Math.sqrt(imgWidth * imgHeight) / 200) * 2;

    // Calculate text positioning
    const textPadding = (Math.sqrt(imgWidth * imgHeight) / 300) * 10; // Adjust padding as needed
    const textX = topLeftX; // Position text at top-left with padding
    const textY = topLeftY + textPadding; // Position text below top edge with padding

    // Draw text background (consider adjusting based on text dimensions)
    context.fillStyle = colors[class_id];
    context.fillRect(textX, topLeftY, width, textHeight + textPadding); // Draw blue background rectangle

    // Draw class and confidence text
    context.fillStyle = "white";
    const fontSize = (Math.sqrt(imgWidth * imgHeight) / 300) * 11;
    context.font = `${fontSize}px Arial`; // Adjust font size and style as needed
    context.fillText(
      `${label} ${(confidence * 100).toFixed(1)}%`,
      textX,
      textY
    );
  });
};

export const detectPlants = async (data: DataProps, imageUrl: string) => {
  try {
    const { userId } = await auth();

    // Create canvas and load image
    const imgWidth = data.image.width;
    const imgHeight = data.image.height;
    const canvas = createCanvas(imgHeight, imgHeight);
    const context = canvas.getContext("2d");
    const imageData = await loadImage(imageUrl);
    context.drawImage(imageData, 0, 0);

    // Draw bounding box(es)
    drawBoundingBox(imgWidth, imgHeight, data, context);

    // Save the image with bounding box
    const buffer = canvas.toBuffer("image/jpeg");

    // const dir = `output/${userId}`;
    // fs.mkdir(dir, (err) => {
    //   if (err) {
    //     return console.error(err);
    //   }
    //   console.log("success");
    // });
    // fs.writeFileSync(`${dir}/output.jpg`, buffer);
    // console.log("Image with bounding box saved successfully!");

    // // Save to uploadthing
    // const response = await utapi.uploadFiles([
    //   new File([`${dir}/output.jpg`], "output.jpg"),
    // ]);

    // fs.rmSync(dir, { recursive: true });
    // console.log("deleted");
  } catch (error: any) {
    console.error(error.message);
  }
};
