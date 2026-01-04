import CoachChat from "@/components/CoachChat";
import Link from "next/link";

const lessonContext = {
  intent: "lesson",
  system: "digital-products",
  module: "distribution-validation",
  lesson: "early-feedback",
} satisfies {
  intent: "lesson" | "strategy";
  system: "digital-products" | "service-systems" | "ecommerce";
  module: string;
  lesson: string;
};

export default function EarlyFeedbackPage() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Distribution & Validation
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>
        Early Feedback Loops
      </h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        In this lesson, you’ll learn how to get fast, honest feedback on your
        digital product before scaling. The goal is not validation through
        compliments — it’s validation through behavior.
      </p>

      <ul style={{ marginTop: 24, lineHeight: 1.8 }}>
        <li>What counts as real feedback vs vanity signals</li>
        <li>How to test demand before building the full product</li>
        <li>Where to find early users who will actually respond</li>
        <li>How to interpret responses without bias</li>
      </ul>

      <div style={{ marginTop: 32 }}>
        <h3 style={{ fontSize: 18, marginBottom: 8 }}>Your task</h3>
        <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
          Write a short message explaining the problem you’re solving and send it
          to 5–10 people in your chosen channel. Track who replies, what they ask,
          and whether they show real intent — not just encouragement.
        </p>
      </div>

      <p style={{ marginTop: 28, opacity: 0.6 }}>
        Next, you’ll refine the message itself and test which framing actually
        pulls attention.
      </p>

      <div style={{ marginTop: 40 }}>
        <CoachChat
          system="digital-products"
          coachId="early-feedback"
          lessonContext={lessonContext}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 48,
            opacity: 0.85,
          }}
        >
          <Link
            href="/dashboard/courses/digital-products/distribution-validation/channel-selection"
            style={{ textDecoration: "none" }}
          >
            ← Channel Selection
          </Link>

          <Link
            href="/dashboard/courses/digital-products/distribution-validation/conversion-proof"
            style={{ textDecoration: "none", fontWeight: 500 }}
          >
            Conversion Proof →
          </Link>
        </div>
      </div>
    </div>
  );
}