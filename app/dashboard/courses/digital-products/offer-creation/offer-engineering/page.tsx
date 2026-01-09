import Link from "next/link";

export default function OfferEngineeringPage() {
  return (
    <div style={{ padding: "48px 56px", maxWidth: 920 }}>
      {/* Header */}
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
        Offer Engineering
      </h1>
      <p style={{ opacity: 0.75, marginBottom: 32 }}>
        Offer Engineering is where you refine, pressure-test, and strengthen your
        offer so it can be confidently priced and sold.
      </p>

      {/* Overview */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          What You’ll Do Here
        </h2>
        <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
          This section focuses on improving the leverage and resilience of your
          offer. You’ll strengthen perceived value, define pricing logic, and
          reduce buyer risk through clear guarantees.
        </p>
      </section>

      {/* Lessons */}
      <section>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 16 }}>
          Lessons
        </h2>

        <div style={{ display: "grid", gap: 16 }}>
          <Link
            href="/dashboard/courses/digital-products/offer-creation/offer-engineering/value-stacking"
            style={{
              textDecoration: "none",
              padding: 20,
              borderRadius: 14,
              border: "1px solid #991b1b",
              color: "#991b1b",
              fontWeight: 600,
            }}
          >
            Value Stacking →
          </Link>

          <Link
            href="/dashboard/courses/digital-products/offer-creation/offer-engineering/pricing-logic"
            style={{
              textDecoration: "none",
              padding: 20,
              borderRadius: 14,
              border: "1px solid #991b1b",
              color: "#991b1b",
              fontWeight: 600,
            }}
          >
            Pricing Logic →
          </Link>

          <Link
            href="/dashboard/courses/digital-products/offer-creation/offer-engineering/guarantees"
            style={{
              textDecoration: "none",
              padding: 20,
              borderRadius: 14,
              border: "1px solid #991b1b",
              color: "#991b1b",
              fontWeight: 600,
            }}
          >
            Guarantees →
          </Link>
        </div>
      </section>
    </div>
  );
}
