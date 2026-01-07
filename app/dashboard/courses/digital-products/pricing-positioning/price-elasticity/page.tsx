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
          marginTop: 64,
          padding: 24,
          borderRadius: 12,
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <h3 style={{ fontSize: 20, marginBottom: 8 }}>
          Module Complete
        </h3>
        <p style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: 20 }}>
          You now understand how pricing sensitivity works and how to test it in the real world.
          Next, you’ll apply this to your full offer and prepare it for launch.
        </p>

        <div style={{ display: "flex", gap: 16 }}>
          <Link
            href="/dashboard/courses/digital-products/pricing-positioning/value-framing"
            style={{ opacity: 0.7 }}
          >
            ← Previous Lesson
          </Link>

          <Link
            href="/dashboard/courses/digital-products"
            style={{
              marginLeft: "auto",
              padding: "10px 16px",
              borderRadius: 8,
              background: "white",
              color: "black",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Return to Course →
          </Link>
        </div>
      </div>
    </div>
  );
}