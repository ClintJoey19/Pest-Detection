import { streamText } from "ai";
import { google } from "@ai-sdk/google";

export const POST = async (req: Request, res: Response) => {
  const { messages } = await req.json();
  const prompt = messages[messages.length - 1].content;

  const result = await streamText({
    model: google("models/gemini-1.5-flash-latest"),
    prompt: prompt,
  });

  return result.toAIStreamResponse();
};
