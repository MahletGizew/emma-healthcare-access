import { NextRequest, NextResponse } from "next/server";
import { askGemini } from "../../../lib/gemini";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const aiResponse = await askGemini(message);

    return NextResponse.json({ response: aiResponse }, { status: 200 });
  } catch (error) {
    console.error("Error handling chat request:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
