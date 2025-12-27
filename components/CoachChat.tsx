"use client";

import React, { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type CoachId = "digital-products" | "service-systems" | "ecommerce";

type CoachChatProps = {
  coachId: CoachId;
  title: string;
  description: string;
};

type CoachResponse = {
  reply: string;
};

const STARTER_PROMPTS: Record<CoachId, string[]> = {
  "digital-products": [
    "Help me define a strong digital product offer",
    "Create a product outline from my idea",
    "What should I build first?",
    "Write a high-conversion sales page structure",
  ],
  "service-systems": [
    "Help me structure a clear service offer",
    "Define scope and pricing",
    "Create onboarding and delivery SOPs",
    "How do I make this service repeatable?",
  ],
  ecommerce: [
    "Audit my product offer",
    "Improve my product page",
    "Create upsell and bundle ideas",
    "What should I test first?",
  ],
};

export default function CoachChat({
  coachId,
  title,
  description,
}: CoachChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text?: string) {
    const content = (text ?? input).trim();
    if (!content || loading) return;

    const nextMessages: Message[] = [
      ...messages,
      { role: "user", content },
    ];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`/api/coach/${coachId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = (await res.json()) as CoachResponse;

      const replyText = data.reply || "No response returned.";

      const chunks = replyText
        .split(/\n\n+/)
        .map((c) => c.trim())
        .filter(Boolean);

      let updatedMessages = [...nextMessages];

      for (let i = 0; i < chunks.length; i++) {
        await new Promise((r) => setTimeout(r, 300));
        updatedMessages = [
          ...updatedMessages,
          { role: "assistant", content: chunks[i] },
        ];
        setMessages(updatedMessages);
      }
    } catch {
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        maxWidth: 860,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 140px)",
      }}
    >
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 32, marginBottom: 6 }}>{title}</h1>
        <p style={{ opacity: 0.7 }}>{description}</p>
      </header>

      {messages.length === 0 && (
        <div style={{ marginBottom: 20 }}>
          <p style={{ opacity: 0.6, marginBottom: 10 }}>
            Suggested starting points:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {STARTER_PROMPTS[coachId].map((prompt) => (
              <button
                key={prompt}
                onClick={() => sendMessage(prompt)}
                style={{
                  padding: "10px 14px",
                  borderRadius: 12,
                  background: "#0f0f13",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          background: "#070708",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
          padding: 20,
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent:
                m.role === "user" ? "flex-end" : "flex-start",
              marginBottom: 14,
            }}
          >
            <div
              style={{
                maxWidth: "75%",
                padding: "12px 16px",
                borderRadius: 14,
                lineHeight: 1.6,
                background:
                  m.role === "user"
                    ? "linear-gradient(135deg,#2b2fdf,#5b5fff)"
                    : "#0f0f13",
                color: m.role === "user" ? "#fff" : "#d4af37",
                border:
                  m.role === "assistant"
                    ? "1px solid rgba(212,175,55,0.25)"
                    : "none",
              }}
            >
              {m.content}
            </div>
          </div>
        ))}

        {loading && (
          <p style={{ opacity: 0.5 }}>Coach is thinking…</p>
        )}

        <div ref={bottomRef} />
      </div>

      <div
        style={{
          display: "flex",
          gap: 10,
          marginTop: 14,
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask the coach anything…"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          style={{
            flex: 1,
            padding: "14px 16px",
            borderRadius: 14,
            background: "#0f0f13",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        />

        <button
          onClick={() => sendMessage()}
          disabled={loading}
          style={{
            padding: "14px 18px",
            borderRadius: 14,
            background: "#d4af37",
            color: "#000",
            fontWeight: 700,
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}