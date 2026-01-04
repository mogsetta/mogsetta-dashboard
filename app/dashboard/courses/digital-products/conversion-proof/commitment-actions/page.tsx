

import Link from "next/link";
import CoachChat from "@/components/CoachChat";

const lessonContext = {
  intent: "lesson",
  system: "digital-products",
  module: "conversion-proof",
  lesson: "commitment-actions",
} as const;

export default function CommitmentActionsPage() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Conversion Proof
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>
        Commitment Actions
      </h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        Commitment actions prove real demand. In this lesson, you’ll learn how to design actions that require effort, time, or money — and why those signals matter more than surface-level engagement.
      </p>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          What Counts as Commitment
        </h2>
        <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
          A commitment action forces a user to give something up. That sacrifice is what makes the signal reliable.
        </p>
        <ul style={{ marginTop: 16, lineHeight: 1.8, opacity: 0.85 }}>
          <li>Paying (even a small amount)</li>
          <li>Booking a call</li>
          <li>Joining a waitlist with intent</li>
          <li>Completing a multi-step onboarding</li>
        </ul>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Designing High-Signal Actions
        </h2>
        <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
          Your goal is not to make things difficult — it’s to make them meaningful. The best commitment actions align directly with the value your product promises.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85, lineHeight: 1.7 }}>
          If the action feels like progress toward the outcome, serious users will take it.
        </p>
      </section>

      <div style={{ marginTop: 48 }}>
        <CoachChat
          system="digital-products"
          coachId="commitment-actions"
          lessonContext={lessonContext}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 56,
        }}
      >
        <Link href="/dashboard/courses/digital-products/conversion-proof/price-signal">
          ← Back
        </Link>
        <Link href="/dashboard/courses/digital-products/pricing-positioning/page">
          Next →
        </Link>
      </div>
    </div>
  );
}