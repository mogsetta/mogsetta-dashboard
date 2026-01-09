import Link from "next/link";
import CoachChat from "@/components/CoachChat";

export default function AudienceClarityPage() {
  return (
    <div style={{ padding: "48px 56px", maxWidth: 920 }}>
      {/* Header */}
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
        Audience Clarity
      </h1>
      <p style={{ opacity: 0.75, marginBottom: 32 }}>
        A strong offer speaks to a specific person with a specific problem.
        Vague audiences create vague demand.
      </p>

      {/* Section 1 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          Why Audience Precision Matters
        </h2>
        <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
          Most weak offers fail because they try to appeal to too many people.
          Your goal here is not to exclude — it’s to focus. Clear audiences
          create clear messaging, pricing, and outcomes.
        </p>
      </section>

      {/* Section 2 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          The Audience Filter
        </h2>
        <ul style={{ paddingLeft: 20, lineHeight: 1.7, opacity: 0.9 }}>
          <li>Who experiences the problem most frequently?</li>
          <li>Who feels the pain most intensely?</li>
          <li>Who already spends money trying to solve it?</li>
          <li>Who has the authority to make a purchase?</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
          Before You Move On
        </h2>
        <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
          Write a one-sentence description of your ideal customer. Include who
          they are, what they struggle with, and why solving this problem matters
          to them right now.
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
          href="/dashboard/courses/digital-products/offer-creation/problem-selection"
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
          href="/dashboard/courses/digital-products/offer-creation/solution-definition"
          style={{
            textDecoration: "none",
            padding: "14px 22px",
            borderRadius: 10,
            background: "#991b1b",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Next: Solution Definition →
        </Link>
      </div>

      {/* AI Coach */}
      <CoachChat
        coachId="digital-products"
        system="digital-products"
        module="offer-creation"
        intent="strategy"
        title="Offer Creation Coach"
        description="Refine who your offer is for and pressure-test whether your audience is specific enough to support a strong offer."
      />
    </div>
  );
}
