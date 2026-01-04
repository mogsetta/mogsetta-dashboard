

import Link from "next/link";
import CoachChat from "@/components/CoachChat";

export default function ClosingLesson() {
  const title = "Closing";

  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Sales System
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>{title}</h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        Closing isn’t about pressure — it’s about alignment. If your offer,
        positioning, and trust are correct, the close should feel natural and
        inevitable.
      </p>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85, marginTop: 16 }}>
        In this lesson, you’ll learn how to structure your close so the buyer
        feels confident saying yes, understands exactly what happens next, and
        feels zero friction moving forward.
      </p>

      <div style={{ marginTop: 40 }}>
        <CoachChat
          system="digital-products"
          coachId="closing"
          lessonContext={{
            intent: "lesson",
            system: "digital-products",
            module: "sales-system",
            lesson: "closing",
          }}
        />
      </div>

      <div
        style={{
          marginTop: 64,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/dashboard/courses/digital-products/sales-system/objection-handling"
          style={{
            padding: "12px 18px",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.15)",
            textDecoration: "none",
            opacity: 0.8,
          }}
        >
          ← Previous Lesson
        </Link>

        <Link
          href="/dashboard/courses/digital-products"
          style={{
            padding: "12px 22px",
            borderRadius: 8,
            background: "linear-gradient(135deg, #d4af37, #f5e6a8)",
            color: "#000",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Complete Sales System →
        </Link>
      </div>
    </div>
  );
}