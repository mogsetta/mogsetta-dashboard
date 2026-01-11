import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function OperatingCadenceLessonPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>
          Phase 6 · Operating the Business
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Operating Cadence
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Growth breaks businesses that lack rhythm. This lesson defines a
          simple operating cadence so decisions, reviews, and adjustments
          happen intentionally instead of reactively.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Why cadence matters
        </h2>
        <p style={{ opacity: 0.85 }}>
          Most operational chaos comes from inconsistency. Without a defined
          rhythm, founders check numbers randomly, react emotionally, and make
          changes without context. Cadence creates stability and clarity.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          The three operating rhythms
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>
            <strong>Daily:</strong> Revenue movement, support issues, and urgent
            blockers.
          </li>
          <li>
            <strong>Weekly:</strong> Traffic, conversion rates, fulfillment
            quality, and bottlenecks.
          </li>
          <li>
            <strong>Monthly:</strong> Strategy, pricing, systems, and scale
            decisions.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Common cadence mistakes
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>Checking everything constantly with no structure</li>
          <li>Only reviewing the business when something feels wrong</li>
          <li>Making changes without reviewing historical data</li>
        </ul>
      </section>

      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          The outcome you want
        </h2>
        <p style={{ opacity: 0.85 }}>
          A clear cadence allows the business to run calmly and predictably.
          When rhythm is correct, growth feels controlled instead of chaotic.
        </p>
      </section>

      <div style={{ marginBottom: 64 }}>
        <Link href="/dashboard/courses/digital-products/business-operating-system/operating-the-business">
          <button
            style={{
              border: "1px solid #dc2626",
              background: "transparent",
              color: "#dc2626",
              borderRadius: 8,
              padding: "10px 16px",
              cursor: "pointer",
            }}
          >
            ← Back to Phase
          </button>
        </Link>
      </div>

      <CoachChat
        intent="lesson"
        system="digital-products"
        module="business-operating-system"
        lesson="operating-cadence"
        coachId="digital-products"
        title="Operating Cadence Coach"
        description="Use this coach to design a sustainable operating rhythm, reduce reactive decisions, and maintain control as the business scales."
      />
    </div>
  );
}
