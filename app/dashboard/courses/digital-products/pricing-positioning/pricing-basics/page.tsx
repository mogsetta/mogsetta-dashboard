"use client";

import CoachChat from "@/components/CoachChat";

export default function PricingBasicsLesson() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 140 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Pricing & Positioning
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>
        Pricing Fundamentals
      </h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        This lesson establishes how to price digital products with clarity,
        confidence, and leverage. You’ll learn how to avoid underpricing,
        anchor value correctly, and position your offer so pricing feels
        obvious rather than debated.
      </p>

      <div style={{ marginTop: 28 }}>
        <ul style={{ lineHeight: 1.8, opacity: 0.8 }}>
          <li>Why pricing is a positioning decision, not math</li>
          <li>Common pricing traps that kill momentum</li>
          <li>Anchoring, tiers, and perceived value</li>
          <li>How to price for simplicity and conversion</li>
        </ul>
      </div>

      <div style={{ marginTop: 48 }}>
        <CoachChat
          system="digital-products"
          module="pricing-positioning"
          coachId="pricing-basics"
          intent="lesson"
          lesson="pricing-basics"
        />
      </div>
    </div>
  );
}