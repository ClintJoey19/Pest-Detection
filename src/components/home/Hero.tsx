import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container flex flex-col gap-4">
      <div className="flex items-center justify-center mt-4">
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
      <div className="w-full aspect-video relative">
        <Image
          src="/hero-demo.jpeg"
          alt="hero-img"
          fill
          className="border-[8px] md:border-[12px] border-primary rounded-xl object-scale-down"
        />
      </div>
    </section>
  );
};

export default Hero;
