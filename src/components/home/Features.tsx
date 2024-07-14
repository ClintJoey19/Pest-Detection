import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="container grid grid-cols-4 gap-4">
      <div className="p-4 bg-white rounded-xl flex flex-col gap-4">
        <div className="h-[180px] w-full relative">
          <Image
            src="/card-1.png"
            alt="statistics"
            className="rounded-lg"
            fill
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Hey there</p>
          <span className="text-sm leading-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            qui ut nulla odio temporibus enim.
          </span>
        </div>
      </div>
      <div className="p-4 bg-white rounded-xl col-span-3 flex flex-col gap-4">
        <div className="h-[350px] grid grid-cols-2 gap-2">
          <div className="w-full h-full relative">
            <Image
              src="/card-4.png"
              alt="upload-photo"
              className="rounded-lg"
              fill
            />
          </div>
          <div className="w-full relative">
            <Image
              src="/card-5.png"
              alt="detect-photo"
              className="rounded-lg"
              fill
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Easy File Upload and Pest Detection</p>
        </div>
      </div>
      <div className="p-4 bg-white rounded-xl col-span-2"></div>
      <div className="p-4 bg-white rounded-xl"></div>
      <div className="p-4 bg-white rounded-xl row-span-2 flex flex-col gap-4">
        <div className="h-[450px] relative">
          <Image src="/card-6.png" alt="" fill />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">AI Advice</p>
          <span className="text-sm leading-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            qui ut nulla odio temporibus enim.
          </span>
        </div>
      </div>
      <div className="p-4 bg-white rounded-xl"></div>
      <div className="p-4 bg-white rounded-xl col-span-2 flex flex-col gap-2"></div>
    </div>
  );
};

export default Features;
