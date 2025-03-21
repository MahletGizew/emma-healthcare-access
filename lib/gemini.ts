import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

const SYSTEM_PROMPT = `
You are an AI assistant for Emma, a digital health platform designed to support adolescent girls with confidential healthcare access. 
Emma provides:
1. Private consultations with midwives.
2. A hospital locator to find nearby partner hospitals.
3. Basic health information on reproductive health, maternal care, contraception, and more.
4. AI-powered assistance with general health inquiries.
5. Emergency guidance by directing users to midwives instead of answering life-critical questions.

Always guide users based on these functionalities and avoid giving direct medical advice.
`;

export const askGemini = async (userMessage: string): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: `${SYSTEM_PROMPT} ${userMessage}` }] },
      ],
      generationConfig: {
        maxOutputTokens: 200,
      },
    });

    const result = await chat.sendMessage(userMessage);

    const response = result.response.text();
    return response;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Sorry, I'm having trouble responding right now.";
  }
};
