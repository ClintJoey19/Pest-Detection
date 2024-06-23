"use server";
import { revalidatePath } from "next/cache";
import prisma from "../prisma";
import { auth } from "@clerk/nextjs/server";

export const getOutputs = async (limit?: number) => {
  try {
    const { userId } = auth();

    if (!userId) throw new Error("User unauthorized");

    const res = await prisma.output.findMany({
      where: {
        userId,
      },
      include: {
        predictions: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: limit,
    });

    return res;
  } catch (error: any) {
    console.error(error.message);
  }
};

export const getOutput = async (id: string) => {
  try {
    const output = await prisma.output.findUnique({
      where: {
        id,
      },
      include: {
        predictions: true,
      },
    });

    return output;
  } catch (error: any) {
    console.error(error.message);
  }
};

type Extract = {
  userId: string;
  class: string;
  classId: number;
  confidence: number;
};

export const createOutput = async (
  image: string,
  time: number,
  extracted: Extract[]
) => {
  try {
    const { userId } = auth();

    if (!userId) throw new Error("User unauthorized");

    await prisma.output.create({
      data: {
        userId: userId,
        image,
        time,
        predictions: {
          create: extracted,
        },
      },
    });

    revalidatePath("/dashboard/images");
  } catch (error: any) {
    console.error(error.message);
  }
};

export const deleteOutput = async (id: string) => {
  try {
    await prisma.output.delete({
      where: {
        id,
      },
      include: {
        predictions: true,
      },
    });

    revalidatePath("/dashboard/images");
  } catch (error: any) {
    console.error(error.message);
  }
};

export const getOutputsCount = async () => {
  try {
    const { userId } = auth();

    if (!userId) throw new Error("User unauthorized");

    const count = await prisma.output.count({
      where: {
        userId,
      },
    });

    return count;
  } catch (error: any) {
    console.error(error.message);
  }
};
