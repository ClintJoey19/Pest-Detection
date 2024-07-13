"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { months } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

const MonthFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const onMonthChange = () => {
    // todo
  };

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a month" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Months</SelectLabel>
          {months.map(({ value, label }) => (
            <SelectItem key={label} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default MonthFilter;
