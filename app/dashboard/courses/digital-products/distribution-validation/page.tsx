

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

      {/* Stats / meta */}
      <div
        style={{
          display: "flex",
          gap: 32,
          marginTop: 32,
          marginBottom: 48,
          opacity: 0.75,
          fontSize: 14,
        }}
      >
        <div>
          <strong>Lessons</strong>
          <div>4</div>
        </div>
        <div>
          <strong>Estimated Time</strong>
          <div>1.5–2 hours</div>
        </div>
        <div>
          <strong>Outcome</strong>
          <div>Validated distribution path</div>
        </div>
      </div>

      {/* Lessons */}
      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 16 }}>Lessons</h2>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ marginBottom: 14 }}>
            <Link
              href="/dashboard/courses/digital-products/distribution-validation/channel-selection"
              style={{ fontSize: 16, textDecoration: "none" }}
            >
              Channel Selection
            </Link>
          </li>
          <li style={{ marginBottom: 14 }}>
            <Link
              href="/dashboard/courses/digital-products/distribution-validation/messaging-tests"
              style={{ fontSize: 16, textDecoration: "none" }}
            >
              Messaging Tests
            </Link>
          </li>
          <li style={{ marginBottom: 14 }}>
            <Link
              href="/dashboard/courses/digital-products/distribution-validation/early-feedback"
              style={{ fontSize: 16, textDecoration: "none" }}
            >
              Early Feedback Loops
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/courses/digital-products/distribution-validation/validation-metrics"
              style={{ fontSize: 16, textDecoration: "none" }}
            >
              Validation Metrics
            </Link>
          </li>
        </ul>
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