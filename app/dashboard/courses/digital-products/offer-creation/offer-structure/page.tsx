import Link from "next/link";
import CoachChat from "@/components/CoachChat";

export default function OfferStructurePage() {
  return (
    <div style={{ padding: "48px 56px", maxWidth: 920 }}>
      {/* Header */}
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
        Offer Structure
      </h1>
      <p style={{ opacity: 0.75, marginBottom: 32 }}>
        A clear offer structure makes your solution easier to understand,
        easier to sell, and easier to deliver.
      </p>

      {/* Section 1 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          Structure Before Features
        </h2>
        <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
          Most offers fail because they feel messy or overwhelming. A strong
          structure creates confidence by showing the buyer how the solution
          fits together before they ever look at the details.
        </p>
      </section>

      {/* Section 2 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          The Structure Filter
        </h2>
        <ul style={{ paddingLeft: 20, lineHeight: 1.7, opacity: 0.9 }}>
          <li>Is the path from start to finish obvious?</li>
          <li>Does each part have a clear purpose?</li>
          <li>Is the order logical for the customer?</li>
          <li>Can the structure be explained simply?</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          Before You Move On
        </h2>
        <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
          Outline your offer in 3–5 clear components. Focus on sequence and
          clarity, not content volume. If it feels bloated or confusing, simplify.
        </p>
      </section>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 56,
        }}
      >
        <Link
          href="/dashboard/courses/digital-products/offer-creation/solution-definition"
          style={{
            textDecoration: "none",
            padding: "12px 18px",
            borderRadius: 10,
            border: "1px solid #991b1b",
            color: "#991b1b",
            fontWeight: 600,
          }}
        >
          ← Back
        </Link>

        <Link
          href="/dashboard/courses/digital-products/offer-creation/offer-engineering"
          style={{
            textDecoration: "none",
            padding: "14px 22px",
            borderRadius: 10,
            background: "#991b1b",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Next: Offer Engineering →
        </Link>
      </div>

      {/* AI Coach */}
      <CoachChat
        coachId="digital-products"
        system="digital-products"
        module="offer-creation"
        intent="strategy"
        title="Offer Creation Coach"
        description="Help structure your offer into a clear, logical package that customers can easily understand and say yes to."
      />
    </div>
  );
}
