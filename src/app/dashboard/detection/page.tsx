import DetectionForm from "@/components/dashboard/detection/form/DetectionForm";
import React from "react";

const page = () => {
  return (
    <section className="h-[87vh] flex flex-col gap-4">
      <h2 className="header">Pest Detection</h2>
      <DetectionForm />
    </section>
  );
};

export default page;
