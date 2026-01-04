

import Link from "next/link";
import CoachChat from "@/components/CoachChat";

const lessonContext = {
  intent: "lesson",
  system: "digital-products",
  module: "distribution-validation",
  lesson: "conversion-proof",
} satisfies {
  intent: "lesson" | "strategy";
  system: "digital-products" | "service-systems" | "ecommerce";
  module: string;
  lesson: string;
};

export default function ConversionProofPage() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Distribution Validation
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>Conversion Proof</h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        This lesson is about proving—without guessing—that your offer converts.
        You will identify real buying signals, remove false positives, and
        confirm demand before scaling distribution.
      </p>

      {/* Section 1 */}
      <section style={{ marginTop: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>What Counts as Proof</h2>
        <p style={{ opacity: 0.85, lineHeight: 1.6 }}>
          Conversion proof is not likes, impressions, or compliments. Proof is
          action. Replies, payments, booked calls, or time committed are the
          only signals that matter.
        </p>
      </section>

      {/* Section 2 */}
      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>Separating Signal from Noise</h2>
        <ul style={{ opacity: 0.85, lineHeight: 1.8 }}>
          <li>Positive feedback without commitment is not proof</li>
          <li>Interest without follow-up is not proof</li>
          <li>Questions that don’t move toward a decision are noise</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>Your Validation Threshold</h2>
        <p style={{ opacity: 0.85, lineHeight: 1.6 }}>
          Before scaling, define the minimum level of proof required to move
          forward. This could be a number of paid users, booked calls, or
          consistent inbound interest over time.
        </p>
      </section>

      <div style={{ marginTop: 48 }}>
        <CoachChat
          system="digital-products"
          coachId="conversion-proof"
          lessonContext={lessonContext}
        />
      </div>

      {/* FOOTER NAV */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 48,
          opacity: 0.85,
        }}
      >
        <Link
          href="/dashboard/courses/digital-products/distribution-validation/early-feedback"
          style={{ textDecoration: "none" }}
        >
          ← Early Feedback
        </Link>

        <Link
          href="/dashboard/courses/digital-products"
          style={{ textDecoration: "none", fontWeight: 500 }}
        >
          Back to Course Overview →
        </Link>
      </div>
    </div>
  );
}