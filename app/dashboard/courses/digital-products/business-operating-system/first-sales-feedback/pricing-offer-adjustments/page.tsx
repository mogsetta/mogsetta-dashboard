

import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function PricingOfferAdjustmentsLessonPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      {/* Header */}
      <header style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>
          Phase 5 · First Sales & Feedback
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Pricing & Offer Adjustments
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Early results may suggest changes — but not all changes are pricing
          problems. This lesson helps you diagnose whether pricing, positioning,
          or offer structure actually needs adjustment before reacting.
        </p>
      </header>

      {/* Section 1 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Price Is Rarely the First Problem
        </h2>
        <p style={{ opacity: 0.9 }}>
          When sales are slow, pricing is often blamed first. In reality, unclear
          positioning, weak problem definition, or misaligned messaging are more
          common constraints. Lowering price too early can hide the real issue
          instead of fixing it.
        </p>
      </section>

      {/* Section 2 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Adjusting the Offer Before the Price
        </h2>
        <p style={{ opacity: 0.9 }}>
          Before touching price, examine what is included, how the outcome is
          framed, and where friction exists in the buying process. Small changes
          to scope, clarity, or delivery often have a greater impact than price
          adjustments alone.
        </p>
      </section>

      {/* Section 3 */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          When a Pricing Change Is Justified
        </h2>
        <p style={{ opacity: 0.9 }}>
          Pricing adjustments are appropriate only after consistent feedback or
          behavior indicates resistance specifically tied to cost. Even then,
          changes should be deliberate, tested incrementally, and tied to a
          clearer value signal — not desperation.
        </p>
      </section>

      {/* Navigation */}
      <div style={{ marginBottom: 64 }}>
        <Link
          href="/dashboard/courses/digital-products/business-operating-system/first-sales-feedback"
          style={{
            display: "inline-block",
            border: "1px solid #dc2626",
            borderRadius: 8,
            padding: "10px 16px",
            color: "#dc2626",
            textDecoration: "none",
          }}
        >
          ← Back to Phase
        </Link>
      </div>

      {/* Lesson Coach */}
      <CoachChat
        intent="lesson"
        system="digital-products"
        module="business-operating-system"
        lesson="pricing-offer-adjustments"
        coachId="digital-products"
        title="Pricing & Offer Adjustment Coach"
        description="Use this coach to evaluate whether pricing, positioning, or offer structure should change based on real signals."
      />
    </div>
  );
}