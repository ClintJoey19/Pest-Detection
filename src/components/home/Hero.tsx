import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container">
      <div className="h-[50vh] flex items-center justify-center">
        <div className="max-w-[600px] max-md:w-full flex flex-col gap-2">
          <h1 className="text-6xl text-center font-bold">
            Identify <span className="text-primary">Plant Pests</span> Quickly &
            Easily
          </h1>
          <p className="mt-4 text-center">
            Save your crops and peace of mind with our AI-powered pest
            identification tool.
          </p>
          <div className="w-full flex justify-center items-center gap-4 mt-4">
            <Button variant="outline" asChild>
              <Link href={"/documentation"}>Learn more</Link>
            </Button>
            <Button asChild>
              <Link href={"/dashboard"} className="flex items-center gap-2">
                Get Started
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
