"use client";

import { useMemo, useState } from "react";

type Msg = {
  role: "user" | "assistant";
  content: string;
};

type ApiOk = { message: string };

type ApiErr = { error: string };

function isApiOk(v: unknown): v is ApiOk {
  return !!v && typeof v === "object" && "message" in v && typeof (v as any).message === "string";
}

function isApiErr(v: unknown): v is ApiErr {
  return !!v && typeof v === "object" && "error" in v && typeof (v as any).error === "string";
}

export default function ServiceSystemsChat() {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const canSend = useMemo(() => !loading && input.trim().length > 0, [loading, input]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    setError(null);

    const updated: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/coach/service-systems", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });

      const data: unknown = await res.json().catch(() => ({}));

      if (!res.ok) {
        const msg = isApiErr(data) ? data.error : "AI request failed";
        setError(msg);
        setMessages([...updated, { role: "assistant", content: `Error: ${msg}` }]);
        return;
      }

      if (!isApiOk(data)) {
        setError("Invalid response from server");
        setMessages([...updated, { role: "assistant", content: "Error: Invalid response from server" }]);
        return;
      }

      setMessages([...updated, { role: "assistant", content: data.message }]);
    } catch (e) {
      setError("Network error");
      setMessages([...updated, { role: "assistant", content: "Error: Network error" }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 900 }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 32, marginBottom: 6 }}>Service Systems Coach</h1>
        <p style={{ opacity: 0.7 }}>
          Design scalable service offers, delivery systems, and retention workflows.
        </p>
        {error ? (
          <p style={{ marginTop: 10, color: "#ff6b6b", opacity: 0.95 }}>{error}</p>
        ) : null}
      </header>

      {/* Chat Window */}
      <div
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 14,
          padding: 20,
          minHeight: 380,
          marginBottom: 16,
          background: "#0b0c10",
        }}
      >
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 14 }}>
            <strong>{m.role === "user" ? "You" : "Coach"}:</strong>
            <p style={{ opacity: 0.85, lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{m.content}</p>
          </div>
        ))}

        {loading && <p style={{ opacity: 0.75 }}>Thinking…</p>}
      </div>

      {/* Input */}
      <div style={{ display: "flex", gap: 10 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              void sendMessage();
            }
          }}
          placeholder="Describe your service or offer..."
          style={{
            flex: 1,
            padding: 12,
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "#0b0c10",
            color: "#fff",
            outline: "none",
          }}
        />
        <button
          onClick={() => void sendMessage()}
          disabled={!canSend}
          style={{
            padding: "12px 18px",
            borderRadius: 10,
            background: canSend ? "#d4af37" : "rgba(212,175,55,0.35)",
            color: "#000",
            fontWeight: 600,
            border: "none",
            cursor: canSend ? "pointer" : "not-allowed",
            opacity: canSend ? 1 : 0.8,
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}