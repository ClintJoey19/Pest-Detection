import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, BugOff } from "lucide-react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="container p-4">
      <div className="bg-primary rounded-xl h-[250px] sm:h-[300px] w-full p-4 overflow-hidden relative">
        <h2 className="text-4xl sm:text-6xl lg:text-8xl text-white font-bold mb-2">
          Get Started Now
        </h2>
        <p className="text-white leading-5">
          Take control of your pest problems. Start your pest-free journey
          today!
        </p>
        <Button variant="outline" size="lg" className="mt-2" asChild>
          <Link href={`/sign-in`}>
            Sign In <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
        <BugOff className="w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 text-purple-400 absolute right-0 bottom-0" />
      </div>
    </section>
  );
};

export default CallToAction;
