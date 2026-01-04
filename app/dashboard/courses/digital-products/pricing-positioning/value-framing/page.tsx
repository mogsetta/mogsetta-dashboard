

import Link from "next/link";
import CoachChat from "@/components/CoachChat";

const lessonContext = {
  intent: "lesson",
  system: "digital-products",
  module: "pricing-positioning",
  lesson: "value-framing",
} as const;

export default function ValueFramingPage() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Pricing & Positioning
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>
        Value Framing
      </h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        Buyers don’t decide based on price — they decide based on perceived value.
        In this lesson, you’ll learn how to frame your offer so the price feels
        justified, inevitable, and easy to say yes to.
      </p>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Why Framing Comes Before Price
        </h2>
        <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
          Price is evaluated relative to context. When buyers understand the
          outcome, urgency, and cost of inaction, the number itself becomes
          secondary.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85, lineHeight: 1.7 }}>
          Poor framing makes even cheap offers feel expensive. Strong framing
          makes premium prices feel reasonable.
        </p>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Core Value Anchors
        </h2>
        <ul style={{ marginTop: 16, lineHeight: 1.8, opacity: 0.85 }}>
          <li>Outcome: What specific result the buyer gets</li>
          <li>Time: How fast they achieve that result</li>
          <li>Effort: How much work is removed for them</li>
          <li>Risk: What mistakes or losses are avoided</li>
        </ul>
      </section>

      <div style={{ marginTop: 48 }}>
        <CoachChat
          system="digital-products"
          coachId="value-framing"
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
        <Link href="/dashboard/courses/digital-products/conversion-proof/commitment-actions">
          ← Back
        </Link>
        <Link href="/dashboard/courses/digital-products/pricing-positioning/price-elasticity">
          Next →
        </Link>
      </div>
    </div>
  );
}