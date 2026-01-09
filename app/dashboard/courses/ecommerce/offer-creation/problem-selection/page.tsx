import Link from "next/link";
import CoachChat from "@/components/CoachChat";

export default function ProblemSelectionPage() {
  return (
    <div style={{ padding: "48px 56px", maxWidth: 920 }}>
      {/* Header */}
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
        Problem Selection
      </h1>
      <p style={{ opacity: 0.75, marginBottom: 32 }}>
        The success of your product is determined before you ever write copy, source inventory,
        or choose a fulfillment model. It starts with choosing the right problem. When the problem is
        clear, painful, and valuable, everything else becomes easier. When it isn’t, execution
        alone will not save the offer.
      </p>

      {/* Section 1 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          What Makes a Problem Worth Solving?
        </h2>
        <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
          Strong product offers solve problems that are painful, expensive, or urgent. Weak offers solve
          problems that are optional, vague, or driven by curiosity. This step is not about
          inventing something new — it’s about accurately identifying a problem people already
          want solved. Precision here prevents wasted effort later.
        </p>
      </section>

      {/* Section 2 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          The Problem Filter
        </h2>
        <ul style={{ paddingLeft: 20, lineHeight: 1.7, opacity: 0.9 }}>
          <li>Is this problem already costing someone money, time, or missed opportunity?</li>
          <li>Is the pain obvious without needing a long explanation?</li>
          <li>Are people already searching for solutions or workarounds?</li>
          <li>Can you clearly describe the before and after state?</li>
          <li>Would someone feel urgency to solve this now, not “someday”?</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          Before You Move On
        </h2>
        <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
          Before moving forward, write one clear sentence that describes the problem you are
          solving and who experiences it. Avoid buzzwords or broad categories. If the sentence
          feels generic, unclear, or hard to explain, that is a signal to slow down and refine.
          Clarity at this stage is non‑negotiable.
        </p>
      </section>

      {/* Apply This Step */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          Apply This Step
        </h2>
        <ul style={{ paddingLeft: 20, lineHeight: 1.7, opacity: 0.9 }}>
          <li>Write the one problem you are considering building a product around.</li>
          <li>Describe who experiences this problem and how often it occurs.</li>
          <li>List the real costs of this problem (time, money, stress, missed opportunity).</li>
          <li>Decide whether this problem feels urgent enough to justify a paid solution.</li>
        </ul>
      </section>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 56,
        }}
      >
        <Link
          href="/dashboard/courses/ecommerce/offer-creation/audience-clarity"
          style={{
            textDecoration: "none",
            padding: "14px 22px",
            borderRadius: 10,
            background: "#2563eb",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Next: Audience Clarity →
        </Link>
      </div>

      {/* AI Coach */}
      <CoachChat
        coachId="ecommerce"
        system="ecommerce"
        module="offer-creation"
        intent="strategy"
        title="E‑Commerce Offer Coach"
        description="Pressure-test whether a product problem is worth building inventory, fulfillment, and acquisition around before moving forward."
      />
    </div>
  );
}
