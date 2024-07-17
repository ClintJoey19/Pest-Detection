"use server";
import { auth } from "@clerk/nextjs/server";
import prisma from "../prisma";
import { PestData } from "@/components/charts/VerticalBarChart";
import { PestClassCount } from "@/components/charts/DonutChart";

export const getPredictions = async () => {
  try {
    const { userId } = auth();

    if (!userId) throw new Error("User unauthorized");

    const res = await prisma.prediction.findMany({
      where: {
        userId,
      },
    });

    return res;
  } catch (error: any) {
    console.error(error.message);
  }
};

export const getPrediction = async (id: string) => {
  try {
    const prediction = await prisma.prediction.findUnique({
      where: {
        id,
      },
    });

    return prediction;
  } catch (error: any) {
    console.error(error.message);
  }
};

export const getPredictionsCount = async (classId?: number) => {
  try {
    const { userId } = auth();

    if (!userId) throw new Error("User unauthorized");

    const count = await prisma.prediction.count({
      where: {
        userId,
        classId,
      },
    });

    return count;
  } catch (error: any) {
    console.error(error.message);
  }
};

export const getTotalPredictionClassCount = async () => {
  try {
    const { userId } = auth();

    if (!userId) throw new Error("User unauthorized");

    const data: PestClassCount[] = await prisma.$queryRaw`
      SELECT class as pest, CAST(COUNT(*) AS INT) as count
      FROM "Prediction"
      WHERE user_id = ${userId}
      GROUP BY class
      ORDER BY class ASC
    `;

    return data;
  } catch (error: any) {
    console.error(error.message);
  }
};

export const getPredictionsCombinedCount = async (
  month: number,
  year: number
): Promise<PestData[] | undefined> => {
  try {
    const { userId } = auth();

    if (!userId) throw new Error("User unauthorized");

    const predictionsData: PestData[] = await prisma.$queryRaw`
    SELECT class as pest, CAST(COUNT(*) AS INT) as detections FROM "Prediction" 
    WHERE user_id = ${userId} AND 
    EXTRACT(MONTH FROM created_at) = ${month} AND 
    EXTRACT(YEAR FROM created_at) = ${year} 
    GROUP BY class ORDER BY class ASC
  `;

    return predictionsData;
  } catch (error: any) {
    console.error(error.message);
  }
};
