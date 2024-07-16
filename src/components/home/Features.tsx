import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
      <div className="p-4 bg-white rounded-xl relative">
        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
          <Image src="/card-1.png" alt="dashboard analytics" fill />
        </div>
        <div className="mt-2 text-center">
          <p className="text-xl md:text-2xl font-bold">
            Discover & Manage Pest
          </p>
        </div>
      </div>
      <div className="bg-slate-100 rounded-xl sm:col-span-2 flex flex-col gap-2 overflow-hidden">
        <div className="flex sm:flex-row flex-col">
          <div className="relative w-full aspect-square">
            <Image src="/card-4.png" alt="upload-photo" fill />
          </div>
          <div className="relative w-full aspect-square">
            <Image src="/card-5.png" alt="detection-photo" fill />
          </div>
        </div>
        <div className="px-4 pb-2">
          <p className="text-lg font-bold">
            Image Upload and Pest Detection has never been this easy.
          </p>
        </div>
      </div>
      <div className="p-4 max-sm:aspect-square bg-white rounded-xl relative overflow-hidden">
        <Image src="/card-7.jpg" alt="cloud storage" fill />
        <p className="text-white text-2xl font-bold absolute top-2 drop-shadow-md z-10">
          Secure Cloud Storage
        </p>
      </div>
      <div className="max-sm:aspect-square max-lg:order-first p-4 bg-white rounded-xl relative">
        <div className="max-sm:absolute top-0 left-0 right-0 bottom-0 sm:h-full flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="pestscope ai logo"
            height={90}
            width={180}
          />
        </div>
      </div>

      <div className="p-4 bg-white rounded-xl lg:row-span-2 flex flex-col gap-2">
        <div className="relative w-full aspect-square sm:h-[250px] md:h-[300px] lg:h-[550px]">
          <Image
            src="/card-6.png"
            alt="ask-ai"
            fill
            className="rounded-lg max-lg:object-cover max-lg:object-top"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">
            Delivering Pest Solution Through{" "}
            <span className="text-primary">AI</span>
          </p>
          <p className="leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            pariatur aut perferendis! Totam, nihil molestias.
          </p>
        </div>
      </div>
      <div className="p-4 bg-slate-100 rounded-xl sm:col-span-2 relative overflow-hidden">
        <div className="flex sm:flex-row flex-col lg:absolute top-0 right-0 left-0">
          <div className="relative w-full aspect-square">
            <Image src="/card-2.png" alt="bar-graph" fill />
          </div>
          <div className="relative w-full aspect-square">
            <Image src="/card-3.png" alt="pie-graph" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
