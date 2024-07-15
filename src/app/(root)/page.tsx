import About from "@/components/home/About";
import FAQs from "@/components/home/FAQs";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <Hero />
      <About />
      <FAQs />
    </div>
  );
}
