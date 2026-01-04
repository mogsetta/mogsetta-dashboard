

import Link from "next/link";
import CoachChat from "@/components/CoachChat";

export default function PricingPositioningPage() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 140 }}>
      {/* Breadcrumb */}
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Sales System
      </div>

      {/* Title */}
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>
        Pricing & Positioning
      </h1>

      {/* Description */}
      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        This lesson teaches you how to price your digital product so it sells
        confidently, aligns with perceived value, and reinforces your market
        position instead of undermining it.
      </p>

      {/* Core Concepts */}
      <div style={{ marginTop: 28, opacity: 0.9 }}>
        <ul style={{ lineHeight: 1.8, paddingLeft: 18 }}>
          <li>Why pricing is a positioning decision, not math</li>
          <li>Anchors, tiers, and perceived value</li>
          <li>When higher prices convert better</li>
          <li>Avoiding race-to-the-bottom traps</li>
        </ul>
      </div>

      {/* Coach */}
      <div style={{ marginTop: 44 }}>
        <CoachChat
          system="digital-products"
          coachId="pricing-positioning"
          lessonContext={{
            system: "digital-products",
            module: "sales-system",
            lesson: "pricing-positioning",
            intent: "lesson",
          }}
        />
      </div>

      {/* Navigation */}
      <div
        style={{
          marginTop: 56,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/dashboard/courses/digital-products/sales-system/objection-handling"
          style={{ opacity: 0.75 }}
        >
          ← Back: Objection Handling
        </Link>

        <Link
          href="/dashboard/courses/digital-products/sales-system/closing"
          style={{
            padding: "10px 16px",
            borderRadius: 10,
            background: "rgba(255,255,255,0.06)",
          }}
        >
          Next: Closing →
        </Link>
      </div>
    </div>
  );
}