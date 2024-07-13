"use server";
import { revalidatePath } from "next/cache";
import prisma from "../prisma";
import { auth } from "@clerk/nextjs/server";

export const getOutputs = async (page: number, limit: number) => {
  try {
    const { userId } = auth();

    if (!userId) throw new Error("User unauthorized");

    const outputs = (await getOutputsCount()) || 1;

    const skip = (page - 1) * limit;

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
      skip,
    });

    const hasNextPage = skip + limit < outputs;

    return { data: res, hasNextPage };
  } catch (error: any) {
    console.error(error.message);
  }
};

export const getOutput = async (id: string) => {
  try {
    const { userId } = auth();

    if (!userId) throw new Error("User unauthorized");

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
    const { userId } = auth();

    if (!userId) throw new Error("User unauthorized");

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
