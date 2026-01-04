

import Link from "next/link";
import CoachChat from "@/components/CoachChat";

const lessonContext = {
  intent: "lesson",
  system: "digital-products",
  module: "distribution-validation",
  lesson: "validation-metrics",
} as const;

export default function ValidationMetricsPage() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Distribution & Validation
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>
        Validation Metrics
      </h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        Validation is not about feelings or opinions — it’s about signal. In this lesson, you’ll learn which metrics actually indicate demand, which ones are noise, and how to interpret early data without lying to yourself.
      </p>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Metrics That Matter Early
        </h2>
        <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
          Early-stage validation metrics are behavioral, not vanity-based. You are looking for actions that require effort or commitment, not likes or compliments.
        </p>
        <ul style={{ marginTop: 16, lineHeight: 1.8, opacity: 0.85 }}>
          <li>Email signups from cold traffic</li>
          <li>Direct replies to outreach or posts</li>
          <li>People asking follow-up questions</li>
          <li>Willingness to get on a call or waitlist</li>
        </ul>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Avoiding False Positives
        </h2>
        <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
          The biggest mistake founders make is mistaking attention for intent. Engagement without friction feels good, but it does not validate a business.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85, lineHeight: 1.7 }}>
          If someone won’t give you an email, time, or money, you do not yet have signal — no matter how enthusiastic they sound.
        </p>
      </section>

      <div style={{ marginTop: 48 }}>
        <CoachChat
          system="digital-products"
          coachId="validation-metrics"
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
        <Link href="/dashboard/courses/digital-products/distribution-validation/early-feedback">
          ← Back
        </Link>
        <Link href="/dashboard/courses/digital-products/conversion-proof/price-signal">
          Next →
        </Link>
      </div>
    </div>
  );
}