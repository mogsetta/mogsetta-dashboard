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
        A clear service offer structure makes your solution easier to understand, easier to sell,
        and easier to deliver. When the structure is clean, clients feel confident moving
        forward. When it’s messy or bloated, hesitation increases — even if the solution
        itself is strong.
      </p>

      {/* Section 1 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          Structure Before Features
        </h2>
        <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
          Most service offers fail not because the solution is bad, but because the structure feels
          confusing or overwhelming. A strong structure shows the buyer how the solution fits
          together before they ever look at individual features. Clarity creates confidence,
          and confidence drives decisions.
        </p>
      </section>

      {/* Section 2 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          The Structure Filter
        </h2>
        <ul style={{ paddingLeft: 20, lineHeight: 1.7, opacity: 0.9 }}>
          <li>Is the path from start to finish obvious to a first-time buyer?</li>
          <li>Does each component serve a clear purpose?</li>
          <li>Is the sequence logical from the customer’s perspective?</li>
          <li>Can the structure be explained in a few simple sentences?</li>
          <li>Does the structure feel focused rather than bloated?</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          Before You Move On
        </h2>
        <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
          Before moving forward, outline your offer in 3–5 clear components. Focus on order,
          clarity, and simplicity — not content volume. If any part feels unnecessary,
          confusing, or out of sequence, simplify before continuing. A clean structure is a
          competitive advantage.
        </p>
      </section>

      {/* Apply This Step */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          Apply This Step
        </h2>
        <ul style={{ paddingLeft: 20, lineHeight: 1.7, opacity: 0.9 }}>
          <li>List the 3–5 core components of your offer.</li>
          <li>Order them in the sequence a customer should experience them.</li>
          <li>Remove or simplify anything that feels unnecessary or confusing.</li>
          <li>Rewrite your offer structure in a way that is easy to explain out loud.</li>
        </ul>
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
          href="/dashboard/courses/service-systems/offer-creation/solution-definition"
          style={{
            textDecoration: "none",
            padding: "12px 18px",
            borderRadius: 10,
            border: "1px solid #7c3aed",
            color: "#7c3aed",
            fontWeight: 600,
          }}
        >
          ← Back
        </Link>

        <Link
          href="/dashboard/courses/service-systems/offer-creation/offer-engineering"
          style={{
            textDecoration: "none",
            padding: "14px 22px",
            borderRadius: 10,
            background: "#7c3aed",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Next: Offer Engineering →
        </Link>
      </div>

      {/* AI Coach */}
      <CoachChat
        coachId="service-systems"
        system="service-systems"
        module="offer-creation"
        intent="strategy"
        title="Service Offer Coach"
        description="Help structure your service offer into a clear, logical delivery system that clients can easily understand and commit to."
      />
    </div>
  );
}
