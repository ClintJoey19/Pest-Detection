"use client";
import { useState } from "react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import LineChart from "@/components/charts/LineChart";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Select } from "@/components/ui/select";
import MonthFilter from "@/components/global/MonthFilter";
import YearFilter from "@/components/global/YearFilter";

const formSchema = z.object({
  month: z.string(),
  year: z.string(),
});

const PestAnalytics = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      month: "",
      year: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Pest Analytics</h3>
      <div className="w-full flex max-md:flex-col gap-4">
        <div className="w-full bg-white border border-slate-300 p-4 rounded-xl">
          <LineChart />
        </div>
        <div className="bg-white border border-slate-300 p-4 rounded-xl">
          <h3 className="mb-4">Controls</h3>
          <div className="flex flex-col gap-4">
            <MonthFilter />
            <YearFilter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PestAnalytics;
