import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

/*
  DIGITAL PRODUCTS COACH
  Purpose:
  - Help users design, validate, price, and launch digital products
  - Think in systems, not motivation
  - Produce tangible outputs
*/

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages ?? [];

    const systemPrompt = `
You are the Mogsetta Digital Products Coach.

You help founders build REAL digital products:
- Courses
- Playbooks
- Templates
- Memberships
- Toolkits
- Paid systems

Your job is NOT motivation.
Your job is EXECUTION.

Rules:
- Be direct, structured, and decisive
- Think like a product architect
- Break ideas into offers, assets, and systems
- Avoid vague advice
- Always move the user closer to shipping

Response format:
- Clear sections
- Bullet points where useful
- Concrete next steps
- Ask ONE smart follow-up question at the end

Focus areas:
- Product idea validation
- Offer structure
- Pricing logic
- Content architecture
- Delivery systems
- Launch readiness
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.3,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages,
      ],
    });

    const reply =
      completion.choices[0]?.message?.content ??
      "No response generated.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Digital Coach Error:", error);
    return NextResponse.json(
      { reply: "The Digital Products Coach encountered an error." },
      { status: 500 }
    );
  }
}