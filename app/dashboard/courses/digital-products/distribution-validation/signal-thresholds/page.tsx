

import Link from "next/link";
import CoachChat from "@/components/CoachChat";

const lessonContext = {
  system: "digital-products",
  module: "distribution-validation",
  lesson: "signal-thresholds",
  intent: "lesson",
} satisfies {
  system: "digital-products" | "service-systems" | "ecommerce";
  module: string;
  lesson: string;
  intent: "lesson" | "strategy";
};

export default function SignalThresholdsPage() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 140 }}>
      {/* Breadcrumb */}
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Distribution & Validation
      </div>

      {/* Title */}
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>
        Signal Thresholds
      </h1>

      {/* Description */}
      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        This lesson teaches you how to interpret real signal versus noise, so you
        know when to move forward, pivot, or stop — without guessing or burning
        time.
      </p>

      {/* Core Concepts */}
      <div style={{ marginTop: 28, opacity: 0.9 }}>
        <ul style={{ lineHeight: 1.8, paddingLeft: 18 }}>
          <li>Why raw numbers matter less than consistency</li>
          <li>Minimum thresholds before committing resources</li>
          <li>Distinguishing curiosity from buying intent</li>
          <li>When to scale, iterate, or walk away</li>
        </ul>
      </div>

      {/* Coach */}
      <div style={{ marginTop: 44 }}>
        <CoachChat
          system="digital-products"
          coachId="signal-thresholds"
          lessonContext={lessonContext}
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
          href="/dashboard/courses/digital-products/distribution-validation/conversion-proof"
          style={{ opacity: 0.75 }}
        >
          ← Back: Conversion Proof
        </Link>

        <Link
          href="/dashboard/courses/digital-products/page"
          style={{
            padding: "10px 16px",
            borderRadius: 10,
            background: "rgba(255,255,255,0.06)",
          }}
        >
          Finish Module →
        </Link>
      </div>
    </div>
  );
}