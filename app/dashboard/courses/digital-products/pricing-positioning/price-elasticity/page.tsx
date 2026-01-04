

import Link from "next/link";
import CoachChat from "@/components/CoachChat";

const lessonContext = {
  intent: "lesson",
  system: "digital-products",
  module: "pricing-positioning",
  lesson: "price-elasticity",
} as const;

export default function PriceElasticityPage() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Pricing & Positioning
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>
        Price Elasticity
      </h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        Price elasticity measures how sensitive your buyers are to price changes.
        Understanding this lets you price confidently instead of guessing or copying competitors.
      </p>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Inelastic vs Elastic Demand
        </h2>
        <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
          Some buyers will pay regardless of price because the problem is urgent
          or costly. Others disappear the moment friction increases.
        </p>
        <ul style={{ marginTop: 16, lineHeight: 1.8, opacity: 0.85 }}>
          <li><strong>Inelastic:</strong> Urgent pain, high stakes, clear ROI</li>
          <li><strong>Elastic:</strong> Optional problems, curiosity-driven, low urgency</li>
        </ul>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          How to Test Elasticity
        </h2>
        <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
          You don’t need perfect data. You need directional signal.
        </p>
        <ul style={{ marginTop: 16, lineHeight: 1.8, opacity: 0.85 }}>
          <li>Raise prices slightly and observe conversion changes</li>
          <li>Offer two price points and watch buyer self-selection</li>
          <li>Track objections — price vs clarity vs trust</li>
        </ul>
      </section>

      <div style={{ marginTop: 48 }}>
        <CoachChat
          system="digital-products"
          coachId="price-elasticity"
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
        <Link href="/dashboard/courses/digital-products/pricing-positioning/value-framing">
          ← Back
        </Link>
        <Link href="/dashboard/courses/digital-products/pricing-positioning">
          Finish Module →
        </Link>
      </div>
    </div>
  );
}