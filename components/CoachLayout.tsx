"use client";

import { ReactNode } from "react";
import CoachChat from "@/components/CoachChat";

type LessonContext = {
  system: string;
  module: string;
  lesson?: string;
  intent?: "lesson" | "strategy";
};

type CoachLayoutProps = {
  title: string;
  system: string;
  description: string;
  lessonContext?: LessonContext;
  children?: ReactNode;
};

export default function CoachLayout({
  title,
  system,
  description,
  lessonContext,
  children,
}: CoachLayoutProps) {
  const aiContext = lessonContext
    ? {
        ...lessonContext,
        intent: lessonContext.intent ?? "lesson",
      }
    : undefined;

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      {/* Header */}
      <header style={{ marginBottom: 48 }}>
        <p
          style={{
            fontSize: 12,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            opacity: 0.6,
            marginBottom: 12,
          }}
        >
          AI Coach
        </p>

        <h1 style={{ fontSize: 36, marginBottom: 12 }}>
          {title}
        </h1>

        <p
          style={{
            maxWidth: 760,
            fontSize: 16,
            lineHeight: 1.7,
            opacity: 0.75,
            marginBottom: 18,
          }}
        >
          {description}
        </p>

        <div
          style={{
            display: "inline-block",
            padding: "6px 14px",
            borderRadius: 999,
            background: "rgba(212,175,55,0.15)",
            border: "1px solid rgba(212,175,55,0.35)",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.08em",
          }}
        >
          {system}
        </div>
      </header>

      {/* Body */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 24,
        }}
      >
        {/* Chat / Main Area */}
        <div
          style={{
            background: "#0b0c10",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            padding: 24,
            minHeight: 420,
          }}
        >
          {children ?? (
            <CoachChat
              coachId={system as any}
              title={title}
              description={description}
              lessonContext={aiContext}
            />
          )}
        </div>

        {/* System Info */}
        <aside
          style={{
            background: "#0b0c10",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            padding: 22,
          }}
        >
          <h3 style={{ fontSize: 18, marginBottom: 12 }}>
            What this coach helps with
          </h3>

          <ul
            style={{
              paddingLeft: 18,
              lineHeight: 1.7,
              opacity: 0.75,
            }}
          >
            <li>Clarifying decisions</li>
            <li>Structuring systems</li>
            <li>Improving execution</li>
            <li>Reducing trial-and-error</li>
            <li>Scaling with intent</li>
          </ul>
        </aside>
      </section>
    </div>
  );
}