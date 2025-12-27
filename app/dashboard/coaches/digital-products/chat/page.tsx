"use client";

import { useState } from "react";

export default function DigitalProductsChat() {
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; content: string }[]
  >([
    {
      role: "ai",
      content:
        "I’m your Digital Products Coach. Tell me what you’re building — offer, course, template, or system — and I’ll help you structure it.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  function sendMessage() {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      { role: "ai", content: "Thinking…" },
    ]);

    setInput("");
    setLoading(true);

    // TEMP placeholder (real AI comes later)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "ai",
          content:
            "Got it. First, we’ll define the outcome, scope, and buyer clarity. What result should this product guarantee?",
        },
      ]);
      setLoading(false);
    }, 900);
  }

  return (
    <div style={{ maxWidth: 1000 }}>
      {/* Header */}
      <header style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 28, marginBottom: 6 }}>
          Digital Products Coach
        </h1>
        <p style={{ opacity: 0.7 }}>
          Build, structure, and launch digital products with execution clarity.
        </p>
      </header>

      {/* Chat Window */}
      <div
        style={{
          background: "#0b0c10",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
          padding: 20,
          height: 460,
          overflowY: "auto",
          marginBottom: 20,
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent:
                msg.role === "user" ? "flex-end" : "flex-start",
              marginBottom: 14,
            }}
          >
            <div
              style={{
                maxWidth: "70%",
                padding: "10px 14px",
                borderRadius: 12,
                background:
                  msg.role === "user"
                    ? "#d4af37"
                    : "rgba(255,255,255,0.08)",
                color: msg.role === "user" ? "#000" : "#fff",
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe what you’re building…"
          style={{
            flex: 1,
            padding: "12px 14px",
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "#050506",
            color: "#fff",
            outline: "none",
          }}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          style={{
            padding: "12px 18px",
            borderRadius: 10,
            background: "#d4af37",
            color: "#000",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
            opacity: loading ? 0.6 : 1,
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}