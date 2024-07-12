import { streamText } from "ai";
import { google } from "@ai-sdk/google";

export const POST = async (req: Request) => {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: google("models/gemini-1.5-flash-latest"),
      messages: messages,
    });

    return result.toAIStreamResponse();
  } catch (error: any) {
    console.error(error.message);
  }
};
