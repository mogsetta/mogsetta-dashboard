

import Link from "next/link";
import CoachChat from "@/components/CoachChat";

export default function SolutionDefinitionPage() {
  return (
    <div style={{ padding: "48px 56px", maxWidth: 920 }}>
      {/* Header */}
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
        Solution Definition
      </h1>
      <p style={{ opacity: 0.75, marginBottom: 32 }}>
        A strong solution is defined by the outcome it delivers, not the features it includes.
      </p>

      {/* Section 1 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          Define the Outcome First
        </h2>
        <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
          People buy results, not processes. Before deciding how your solution works, you must be
          clear on what changes for the customer after they use it. This outcome should be specific,
          measurable, and meaningful.
        </p>
      </section>

      {/* Section 2 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          The Outcome Filter
        </h2>
        <ul style={{ paddingLeft: 20, lineHeight: 1.7, opacity: 0.9 }}>
          <li>Is the outcome clearly different from the customer’s current state?</li>
          <li>Can the result be explained in one sentence?</li>
          <li>Does the outcome justify paying for a solution?</li>
          <li>Is this result achievable within a reasonable timeframe?</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          Before You Move On
        </h2>
        <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
          Write one sentence that clearly states the outcome your solution delivers. Avoid describing
          steps, methods, or tools — focus only on the end result the customer wants.
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
          href="/dashboard/courses/digital-products/offer-creation/audience-clarity"
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
          href="/dashboard/courses/digital-products/offer-creation/offer-structure"
          style={{
            textDecoration: "none",
            padding: "14px 22px",
            borderRadius: 10,
            background: "#991b1b",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Next: Offer Structure →
        </Link>
      </div>

      {/* AI Coach */}
      <CoachChat
        coachId="digital-products"
        system="digital-products"
        module="offer-creation"
        intent="strategy"
        title="Offer Creation Coach"
        description="Clarify the outcome your solution delivers and pressure-test whether it’s strong enough to anchor a compelling offer."
      />
    </div>
  );
}