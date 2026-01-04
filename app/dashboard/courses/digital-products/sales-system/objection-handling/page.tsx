

import Link from "next/link";
import CoachChat from "@/components/CoachChat";

export default function ObjectionHandlingLesson() {
  const title = "Objection Handling";

  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Sales System
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>{title}</h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        In this lesson, you’ll learn how to handle objections without sounding
        defensive, salesy, or pushy. Objections aren’t rejection — they’re
        signals of uncertainty. Your job is to resolve that uncertainty with
        clarity and confidence.
      </p>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85, marginTop: 16 }}>
        We’ll break down the most common objections, why they actually happen,
        and how to neutralize them before they even come up — using structure,
        positioning, and proof.
      </p>

      <div style={{ marginTop: 40 }}>
        <CoachChat
          system="digital-products"
          coachId="objection-handling"
          lessonContext={{
            intent: "lesson",
            system: "digital-products",
            module: "sales-system",
            lesson: "objection-handling",
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
          href="/dashboard/courses/digital-products/sales-system"
          style={{
            padding: "12px 18px",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.15)",
            textDecoration: "none",
            opacity: 0.8,
          }}
        >
          ← Back to Sales System
        </Link>

        <Link
          href="/dashboard/courses/digital-products/sales-system/closing"
          style={{
            padding: "12px 22px",
            borderRadius: 8,
            background: "linear-gradient(135deg, #d4af37, #f5e6a8)",
            color: "#000",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Next Lesson →
        </Link>
      </div>
    </div>
  );
}