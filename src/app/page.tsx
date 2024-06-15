import Hero from "@/components/home/Hero";
import ObjectDetection from "@/components/home/ObjectDetection";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <Hero />
      <ObjectDetection />
    </div>
  );
}
