import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function MetricsThatMatterLessonPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>
          Phase 6 · Operating the Business
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Metrics That Matter
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Most founders track too much and understand too little. This lesson
          helps you identify the small set of metrics that actually indicate
          business health, risk, and leverage.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Why most metrics are noise
        </h2>
        <p style={{ opacity: 0.85 }}>
          Dashboards often create false confidence. Vanity metrics feel good but
          don’t drive decisions. The goal is not visibility — it’s control.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          The core operating metrics
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>
            <strong>Revenue velocity:</strong> How fast money is moving through
            the system.
          </li>
          <li>
            <strong>Conversion rate:</strong> Where attention turns into action.
          </li>
          <li>
            <strong>Fulfillment load:</strong> The cost of delivering the
            outcome.
          </li>
          <li>
            <strong>Churn or drop-off:</strong> Where value leaks.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Using metrics to decide, not panic
        </h2>
        <p style={{ opacity: 0.85 }}>
          Metrics should trigger questions, not reactions. Review them on a
          cadence, compare trends over time, and make adjustments only when
          patterns are clear.
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
        lesson="metrics-that-matter"
        coachId="digital-products"
        title="Metrics Clarity Coach"
        description="Use this coach to decide which metrics actually matter, interpret trends calmly, and avoid vanity-driven decisions."
      />
    </div>
  );
}
