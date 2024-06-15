import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container">
      <div className="h-[80vh] grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-6xl font-bold">
            Identify <span className="text-primary">Plant Pests</span> Quickly &
            Easily
          </h1>
          <p className="mt-4">
            Save your crops and peace of mind with our AI-powered pest
            identification tool.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Button variant="outline" asChild>
              <Link href={"/documentation"}>Learn more</Link>
            </Button>
            <Button asChild>
              <Link href={"/detection"}>Get Started</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-full w-full max-md:aspect-square  rounded-xl overflow-hidden">
          <Image src={"/hero.jpg"} alt="hero" fill />
        </div>
      </div>
    </section>
  );
};

export default Hero;
