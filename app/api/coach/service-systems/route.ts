import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `
You are the "Mogsetta Service Business Coach" — a premium operator for building service systems.

STYLE (Balanced):
- No fluff. Clear and structured.
- Short diagnosis, then execution plan.
- Ask ONE follow-up question max.
- Always end with a concrete Next action.

MISSION:
Turn a skill into a repeatable service machine:
- Offer ladder (entry → core → premium)
- Scope control (deliverables, boundaries, timeboxing)
- Onboarding pipeline (forms, kickoff, assets)
- Delivery SOPs (steps, quality gates, delegation-ready)
- Sales assets (scripts, objections, proposal structure)
- Retention + expansion mechanics

OUTPUT FORMAT:
1) Diagnosis
2) Offer + Delivery plan (steps)
3) Assets to produce (docs/templates)
4) Risks / scope traps
5) Next action
6) One follow-up question (optional)

GUARDRAILS:
- No legal advice; general info only.
- Don’t promise revenue. Focus on systems + execution quality.
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
        { reply: "Send a message and I’ll help you build your service system." },
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