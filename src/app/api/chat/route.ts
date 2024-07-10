import { GoogleGenerativeAI } from "@google/generative-ai";
import { StreamingTextResponse, GoogleGenerativeAIStream } from "ai";

export const POST = async (req: Request, res: Response) => {
  const body = await req.json();
  const prompt = body.messages[body.messages.length - 1].content;

  const genAI = new GoogleGenerativeAI(
    process.env.GOOGLE_GENERATIVE_AI_API_KEY!
  );
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const streamingResponse = await model.generateContentStream(prompt);
  return new StreamingTextResponse(GoogleGenerativeAIStream(streamingResponse));
};
