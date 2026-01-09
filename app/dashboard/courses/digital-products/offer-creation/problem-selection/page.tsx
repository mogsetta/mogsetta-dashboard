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
        The success of your offer is determined before you ever write copy or
        build a product. It starts with choosing the right problem.
      </p>

      {/* Section 1 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          What Makes a Problem Worth Solving?
        </h2>
        <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
          Strong offers solve problems that are painful, expensive, or urgent.
          Weak offers solve problems that are optional, vague, or nice-to-have.
          Your goal here is not creativity — it’s accuracy.
        </p>
      </section>

      {/* Section 2 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          The Problem Filter
        </h2>
        <ul style={{ paddingLeft: 20, lineHeight: 1.7, opacity: 0.9 }}>
          <li>Is this problem already costing someone money?</li>
          <li>Is the pain obvious without explanation?</li>
          <li>Are people actively trying to solve it?</li>
          <li>Can you clearly describe the before and after state?</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          Before You Move On
        </h2>
        <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
          Write one clear sentence that describes the problem you’re solving and
          who experiences it. If you can’t do this cleanly, stop here and refine
          before continuing.
        </p>
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
          href="/dashboard/courses/digital-products/offer-creation/audience-clarity"
          style={{
            textDecoration: "none",
            padding: "14px 22px",
            borderRadius: 10,
            background: "#991b1b",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Next: Audience Clarity →
        </Link>
      </div>

      {/* AI Coach */}
      <CoachChat
        coachId="digital-products"
        system="digital-products"
        module="offer-creation"
        intent="strategy"
        title="Offer Creation Coach"
        description="Pressure-test whether a problem is worth building an offer around and refine your thinking before moving forward."
      />
    </div>
  );
}
