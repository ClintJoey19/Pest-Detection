"use server";
import { auth } from "@clerk/nextjs/server";
import prisma from "../prisma";

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

export const getPredictionsCount = async () => {
  try {
    const { userId } = auth();

    if (!userId) throw new Error("User unauthorized");

    const count = await prisma.prediction.count({
      where: {
        userId,
      },
    });

    return count;
  } catch (error: any) {
    console.error(error.message);
  }
};
