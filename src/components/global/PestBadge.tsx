import { cn } from "@/lib/utils";

const bgVariants: Record<string, string> = {
  Aphids: "bg-blue-700",
  Fruitfly: "bg-green-700",
  ["Pumpkin-Beetle"]: "bg-purple-700",
  ["Serpentine-leafminer"]: "bg-red-600",
  Whitefly: "bg-orange-500",
};

interface PestBadgeProps {
  pest: string;
  value: number;
}

const PestBadge = ({ pest, value }: PestBadgeProps) => {
  return (
    <p
      className={cn(`text-sm text-white px-2 rounded-full ${bgVariants[pest]}`)}
    >
      {pest} {value}
    </p>
  );
};

export default PestBadge;
