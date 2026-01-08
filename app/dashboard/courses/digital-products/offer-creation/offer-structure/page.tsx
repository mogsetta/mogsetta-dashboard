import Link from "next/link";

export default function OfferStructurePage() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Offer Creation
      </div>

      <h1 style={{ fontSize: 32, marginBottom: 12 }}>Offer Structure</h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
        Offer structure defines how your offer is organized, delivered, and
        experienced by the buyer. This section breaks down the core structural
        components that make an offer feel clear, complete, and easy to say yes to.
      </p>

      <div style={{ marginTop: 40, display: "grid", gap: 16 }}>
        <Link
          href="/dashboard/courses/digital-products/offer-creation/offer-structure/audience-clarity"
          style={{ fontSize: 18, fontWeight: 500 }}
        >
          → Audience Clarity
        </Link>

        <Link
          href="/dashboard/courses/digital-products/offer-creation/offer-structure/solution-definition"
          style={{ fontSize: 18, fontWeight: 500 }}
        >
          → Solution Definition
        </Link>
      </div>

      <div style={{ marginTop: 60 }}>
        <Link
          href="/dashboard/courses/digital-products/offer-creation/offer-engineering"
          style={{ fontWeight: 500 }}
        >
          Continue to Offer Engineering →
        </Link>
      </div>
    </div>
  );
}