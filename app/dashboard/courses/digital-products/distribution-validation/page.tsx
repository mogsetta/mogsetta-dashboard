

import Link from "next/link";

export default function DistributionValidationPage() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", paddingBottom: 140 }}>
      {/* Eyebrow */}
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Distribution & Validation
      </div>

      {/* Title */}
      <h1 style={{ fontSize: 36, marginBottom: 16 }}>
        Distribution & Validation
      </h1>

      {/* Intro */}
      <p style={{ fontSize: 18, lineHeight: 1.75, opacity: 0.9, maxWidth: 760 }}>
        Before you scale anything, you must prove that real people want what
        you’re offering. This module focuses on validating demand, messaging,
        and channels <em>before</em> time or money is wasted.
      </p>

      {/* Module Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 16,
          marginTop: 32,
          marginBottom: 48,
        }}
      >
        <Stat label="Lessons" value="4" />
        <Stat label="Estimated Time" value="1.5–2 hrs" />
        <Stat label="Outcome" value="Validated distribution path" />
      </div>

      {/* Lessons */}
      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 16 }}>Lessons</h2>
        <div style={{ display: "grid", gap: 14 }}>
          <LessonCard
            number={1}
            title="Channel Selection"
            href="/dashboard/courses/digital-products/distribution-validation/channel-selection"
          />
          <LessonCard
            number={2}
            title="Messaging Tests"
            href="/dashboard/courses/digital-products/distribution-validation/messaging-tests"
          />
          <LessonCard
            number={3}
            title="Early Feedback Loops"
            href="/dashboard/courses/digital-products/distribution-validation/early-feedback"
          />
          <LessonCard
            number={4}
            title="Validation Metrics"
            href="/dashboard/courses/digital-products/distribution-validation/validation-metrics"
          />
        </div>
      </section>

      {/* CTA */}
      <Link
        href="/dashboard/courses/digital-products/distribution-validation/channel-selection"
        style={{
          display: "inline-block",
          padding: "14px 22px",
          borderRadius: 14,
          background: "#2563eb",
          color: "#fff",
          textDecoration: "none",
          fontWeight: 500,
          fontSize: 15,
        }}
      >
        Start Module →
      </Link>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        padding: 18,
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <div style={{ fontSize: 12, opacity: 0.6 }}>{label}</div>
      <div style={{ fontSize: 18, marginTop: 6 }}>{value}</div>
    </div>
  );
}

function LessonCard({
  number,
  title,
  href,
}: {
  number: number;
  title: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        padding: 20,
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,0.08)",
        textDecoration: "none",
        color: "inherit",
        background: "rgba(255,255,255,0.015)",
      }}
    >
      <div style={{ opacity: 0.5, fontSize: 13, marginBottom: 6 }}>
        Lesson {number}
      </div>
      <div style={{ fontSize: 18 }}>{title}</div>
    </Link>
  );
}