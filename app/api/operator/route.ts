import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages, system } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        system
          ? { role: "system", content: system }
          : undefined,
        ...(messages || []),
      ].filter(Boolean) as any,
      temperature: 0.4,
    });

    return NextResponse.json({
      message: completion.choices[0].message,
    });
  } catch (error) {
    console.error("Operator API error:", error);
    return NextResponse.json(
      { error: "Operator failed" },
      { status: 500 }
    );
  }
}
