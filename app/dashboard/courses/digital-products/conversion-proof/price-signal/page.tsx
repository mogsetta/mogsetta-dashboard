

import Link from "next/link";
import CoachChat from "@/components/CoachChat";

const lessonContext = {
  intent: "lesson",
  system: "digital-products",
  module: "conversion-proof",
  lesson: "price-signal",
} as const;

export default function PriceSignalPage() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Conversion Proof
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>
        Price as Signal
      </h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        Price is not just how you make money — it’s one of the strongest signals of value. In this lesson, you’ll learn how to use pricing to qualify buyers, validate seriousness, and avoid attracting the wrong audience.
      </p>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Why Free Often Fails
        </h2>
        <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
          Free removes friction, but it also removes commitment. When users don’t pay, they don’t evaluate honestly, follow through, or give reliable feedback.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85, lineHeight: 1.7 }}>
          Even a small price dramatically changes behavior. It filters for people who actually want a solution, not just curiosity.
        </p>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Early Pricing Ranges
        </h2>
        <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
          Early-stage pricing is not about optimization — it’s about signal. Your goal is to learn how buyers respond, not to maximize revenue.
        </p>
        <ul style={{ marginTop: 16, lineHeight: 1.8, opacity: 0.85 }}>
          <li>$5–$15: Tests willingness to transact</li>
          <li>$25–$50: Tests perceived value</li>
          <li>$75–$150: Tests urgency and pain severity</li>
        </ul>
      </section>

      <div style={{ marginTop: 48 }}>
        <CoachChat
          system="digital-products"
          coachId="price-signal"
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
        <Link href="/dashboard/courses/digital-products/distribution-validation/validation-metrics">
          ← Back
        </Link>
        <Link href="/dashboard/courses/digital-products/conversion-proof/commitment-actions">
          Next →
        </Link>
      </div>
    </div>
  );
}