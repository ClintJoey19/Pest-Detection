import React from "react";

const SectionHeader = ({ label }: { label: string }) => {
  return (
    <h2 className="inline-block mx-auto text-4xl font-bold relative">
      {label}
      <span className="absolute w-full -bottom-1 left-0 bg-primary p-1"></span>
    </h2>
  );
};

export default SectionHeader;
