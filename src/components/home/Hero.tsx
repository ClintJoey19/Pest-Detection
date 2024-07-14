import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container flex flex-col gap-4 mb-4">
      <div className="flex items-center justify-center my-4">
        <div className="max-w-[600px] max-md:w-full flex flex-col gap-2">
          <h1 className="text-4xl md:text-6xl text-center font-bold">
            Identify <span className="text-primary">Plant Pests</span> Quickly &
            Easily
          </h1>
          <p className="text-sm md:text-base mt-4 text-center">
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
      <div className="w-[95%] md:w-[80%] border border-slate-300 rounded-xl mx-auto aspect-video flex flex-col shadow-xl">
        <div className="flex items-center gap-2 p-2 md:p-3 border-b border-slate-300">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-orange-500"></div>
          <div className="h-2 w-2 rounded-full bg-green-400"></div>
        </div>
        <div className="w-full h-full relative">
          <Image
            src="/hero.png"
            alt="hero-img"
            fill
            className="rounded-xl object-fill"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
