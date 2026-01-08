import CoachChat from "@/components/CoachChat";
import React from "react";
import Link from "next/link";

export default function OfferFoundationPage() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Offer Creation
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>Offer Foundation</h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        Offer Foundation establishes the core of your offer: who it is for, what
        problem it solves, and why it should exist at all. This module ensures
        clarity before structure, pricing, or engineering.
      </p>

      <div style={{ marginTop: 40 }}>
        <CoachChat
          intent="lesson"
          system="digital-products"
          module="offer-foundation"
          coachId="offer-foundation"
        />
        <div style={{ marginTop: 60, textAlign: "right" }}>
  <Link
    href="/dashboard/courses/digital-products/offer-creation/offer-structure"
    style={{ fontWeight: 500 }}
  >
    Next: Offer Structure →
  </Link>
</div>
      </div>
    </div>
  );
}