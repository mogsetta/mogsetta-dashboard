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
        A strong service solution is defined by the outcome it delivers, not the features it includes.
        Clients don’t buy tools or processes — they buy change. This step forces you to clearly
        define what success looks like for the client before deciding how to deliver it.
      </p>

      {/* Section 1 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          Define the Outcome First
        </h2>
        <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
          People buy results, not processes. Before deciding how your solution works, you must be
          clear on what changes for the client after they use it. A strong outcome is specific,
          easy to understand, and clearly better than their current situation. If the outcome is
          vague, even strong execution will struggle to convert.
        </p>
      </section>

      {/* Section 2 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          The Outcome Filter
        </h2>
        <ul style={{ paddingLeft: 20, lineHeight: 1.7, opacity: 0.9 }}>
          <li>Is the outcome clearly different from the customer’s current state?</li>
          <li>Can the result be explained simply, without technical language?</li>
          <li>Does the outcome justify paying for a solution?</li>
          <li>Is this result realistically achievable for the customer?</li>
          <li>Would achieving this outcome meaningfully improve their situation?</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          Before You Move On
        </h2>
        <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
          Before moving forward, write one clear sentence that describes the outcome your solution
          delivers. Do not describe steps, methods, or features. Focus only on the end result the
          customer wants to achieve. If the outcome feels generic or difficult to explain, refine
          it before continuing.
        </p>
      </section>

      {/* Apply This Step */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          Apply This Step
        </h2>
        <ul style={{ paddingLeft: 20, lineHeight: 1.7, opacity: 0.9 }}>
          <li>Write the single outcome your solution promises to deliver.</li>
          <li>Describe the customer’s situation before achieving this outcome.</li>
          <li>Describe what changes for the customer after achieving this outcome.</li>
          <li>Decide whether this outcome feels specific, valuable, and easy to explain.</li>
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
          href="/dashboard/courses/service-systems/offer-creation/audience-clarity"
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
          href="/dashboard/courses/service-systems/offer-creation/offer-structure"
          style={{
            textDecoration: "none",
            padding: "14px 22px",
            borderRadius: 10,
            background: "#7c3aed",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Next: Offer Structure →
        </Link>
      </div>

      {/* AI Coach */}
      <CoachChat
        coachId="service-systems"
        system="service-systems"
        module="offer-creation"
        intent="strategy"
        title="Service Offer Coach"
        description="Clarify the outcome your service delivers and pressure-test whether it’s strong enough to anchor a scalable service system."
      />
    </div>
  );
}