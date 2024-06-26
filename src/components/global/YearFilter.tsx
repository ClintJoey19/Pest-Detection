"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const months = [
  {
    value: "01",
    label: "January",
  },
  {
    value: "02",
    label: "February",
  },
  {
    value: "03",
    label: "March",
  },
  {
    value: "04",
    label: "April",
  },
  {
    value: "05",
    label: "May",
  },
  {
    value: "06",
    label: "June",
  },
  {
    value: "07",
    label: "July",
  },
  {
    value: "08",
    label: "August",
  },
  {
    value: "09",
    label: "September",
  },
  {
    value: "10",
    label: "October",
  },
  {
    value: "11",
    label: "November",
  },
  {
    value: "12",
    label: "December",
  },
];

const YearFilter = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a year" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
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

export default YearFilter;
