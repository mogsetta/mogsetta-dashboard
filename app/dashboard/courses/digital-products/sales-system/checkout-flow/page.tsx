

import Link from "next/link";
import CoachChat from "@/components/CoachChat";

const lessonContext = {
  intent: "lesson",
  system: "digital-products",
  module: "sales-system",
  lesson: "checkout-flow",
} as const;

export default function CheckoutFlowPage() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Sales System
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>
        Checkout Flow
      </h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        Your checkout flow should feel obvious, calm, and inevitable. In this lesson,
        you’ll learn how to remove hesitation, reduce friction, and guide buyers from
        decision to payment without pressure or confusion.
      </p>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Friction Kills Momentum
        </h2>
        <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
          Most lost sales don’t happen because of price — they happen because the
          checkout experience introduces doubt. Every extra field, step, or decision
          increases the chance a buyer pauses or exits.
        </p>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Elements of a Clean Checkout
        </h2>
        <ul style={{ marginTop: 16, lineHeight: 1.8, opacity: 0.85 }}>
          <li>Minimal form fields (only what’s required)</li>
          <li>Clear price and what’s included</li>
          <li>No surprise fees or last‑minute changes</li>
          <li>Simple payment options</li>
        </ul>
      </section>

      <div style={{ marginTop: 48 }}>
        <CoachChat
          system="digital-products"
          coachId="checkout-flow"
          lessonContext={lessonContext}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 64,
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Link
          href="/dashboard/courses/digital-products/sales-system"
          style={{ opacity: 0.7 }}
        >
          ← Back to module
        </Link>

        <Link
          href="/dashboard/courses/digital-products/sales-system/objection-handling"
          style={{
            padding: "12px 18px",
            borderRadius: 8,
            background: "#fff",
            color: "#000",
            fontWeight: 600,
          }}
        >
          Next lesson →
        </Link>
      </div>
    </div>
  );
}