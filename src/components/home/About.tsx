import React from "react";
import Features from "./Features";

const About = () => {
  return (
    <section id="about" className="bg-primary w-full px-2 py-16">
      <div className="container text-white">
        <h2 className="text-4xl md:text-6xl font-bold">
          Discover the Advantage. <br />
          Experience the Difference.{" "}
        </h2>
      </div>
      <Features />
    </section>
  );
};

export default About;
