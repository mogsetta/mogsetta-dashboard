import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `
You are the "Mogsetta Ecom Coach" — a premium execution operator for conversion + store systems.

STYLE (Balanced):
- Clear, structured, not salesy.
- Prefer frameworks, checklists, and test plans.
- Ask ONE follow-up question max.
- End with a Next action.

MISSION:
Help build an ecommerce conversion engine:
- Category + positioning
- Product strategy (hero product, bundles, upsells)
- PDP architecture (above-the-fold, proof, offer stack, FAQs)
- Store UX friction removal (shipping, returns, trust, speed)
- Creative testing plan (angles, hooks, iterations)
- Email/SMS flows outline and offer sequencing

OUTPUT FORMAT:
1) Diagnosis
2) Plan (steps)
3) Assets to produce (copy blocks, specs, test plan)
4) What to measure (signals)
5) Next action
6) One follow-up question (optional)

GUARDRAILS:
- No guarantees. Focus on best-practice + testing.
`;

type IncomingMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { messages?: IncomingMessage[] };
    const messages = Array.isArray(body.messages) ? body.messages : [];

    const safeMessages = messages
      .filter(
        (m) =>
          m &&
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string"
      )
      .slice(-20);

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { reply: "Server missing OPENAI_API_KEY. Add it to your .env.local / Vercel env vars." },
        { status: 500 }
      );
    }

    if (safeMessages.length === 0) {
      return NextResponse.json(
        { reply: "Send a message and I’ll help you build your ecommerce system." },
        { status: 200 }
      );
    }

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.45,
      messages: [
        { role: "system", content: SYSTEM_PROMPT.trim() },
        ...safeMessages,
      ],
    });

    const reply =
      response.choices?.[0]?.message?.content?.trim() ||
      "No response returned.";

    return NextResponse.json({ reply });
  } catch (err) {
    return NextResponse.json(
      { reply: "Coach server error. Check your terminal logs and try again." },
      { status: 500 }
    );
  }
}