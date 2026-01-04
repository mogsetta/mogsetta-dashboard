

import Link from "next/link";
import CoachChat from "@/components/CoachChat";

const lessonContext = {
  intent: "lesson",
  system: "digital-products",
  module: "distribution-validation",
  lesson: "messaging-tests",
} satisfies {
  intent: "lesson" | "strategy";
  system: "digital-products" | "service-systems" | "ecommerce";
  module: string;
  lesson: string;
};

export default function MessagingTestsPage() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Distribution Validation
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>Messaging Tests</h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        In this lesson, you will validate whether your messaging actually
        resonates with your market. This is not about perfection — it’s about
        clarity, signal, and response.
      </p>

      <div style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 22, marginBottom: 8 }}>
          What You’re Testing
        </h2>
        <ul style={{ lineHeight: 1.8, opacity: 0.85 }}>
          <li>If people understand your offer in under 10 seconds</li>
          <li>If your language mirrors the customer’s words</li>
          <li>If curiosity or intent is triggered</li>
          <li>If objections surface naturally</li>
        </ul>
      </div>

      <div style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 22, marginBottom: 8 }}>
          How to Run a Messaging Test
        </h2>
        <ol style={{ lineHeight: 1.8, opacity: 0.85 }}>
          <li>Write one clear core message (no features)</li>
          <li>Post it in a real channel (DMs, comments, forums)</li>
          <li>Watch replies, questions, and confusion</li>
          <li>Refine based on what people actually say</li>
        </ol>
      </div>

      <div style={{ marginTop: 48 }}>
        <CoachChat
          system="digital-products"
          coachId="messaging-tests"
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
        <Link href="/dashboard/courses/digital-products/distribution-validation/channel-selection">
          ← Channel Selection
        </Link>
        <Link href="/dashboard/courses/digital-products/distribution-validation/early-feedback">
          Next Lesson →
        </Link>
      </div>
    </div>
  );
}