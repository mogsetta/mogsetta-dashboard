import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function EarlySalesSignalsLessonPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      {/* Header */}
      <header style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>
          Phase 5 · First Sales & Feedback
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Interpreting Early Sales Signals
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Early sales rarely provide clean validation. This lesson helps you
          interpret early buying behavior correctly so you don’t overreact,
          misread demand, or sabotage a working offer too early.
        </p>
      </header>

      {/* Section 1 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Early Sales Are Not Proof
        </h2>
        <p style={{ opacity: 0.9 }}>
          One or two purchases do not automatically confirm product-market fit.
          Early transactions are signals — not conclusions. The goal at this
          stage is to observe behavior, not declare success or failure.
        </p>
      </section>

      {/* Section 2 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Signal vs Noise
        </h2>
        <p style={{ opacity: 0.9 }}>
          Discounts, curiosity purchases, friends buying to support you, or
          traffic spikes can all create misleading signals. What matters more
          than volume is intent, follow-up behavior, and willingness to pay
          without persuasion.
        </p>
      </section>

      {/* Section 3 */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          When to Observe vs When to Act
        </h2>
        <p style={{ opacity: 0.9 }}>
          Early on, restraint is often the correct move. Make changes only when
          patterns repeat across multiple users. Premature optimization can
          introduce new problems before the original ones are understood.
        </p>
      </section>

      {/* Navigation */}
      <div style={{ marginBottom: 64 }}>
        <Link
          href="/dashboard/courses/digital-products/business-operating-system/first-sales-feedback"
          style={{
            display: "inline-block",
            border: "1px solid #dc2626",
            borderRadius: 8,
            padding: "10px 16px",
            color: "#dc2626",
            textDecoration: "none",
          }}
        >
          ← Back to Phase
        </Link>
      </div>

      {/* Lesson Coach */}
      <CoachChat
        intent="lesson"
        system="digital-products"
        module="business-operating-system"
        lesson="early-sales-signals"
        coachId="digital-products"
        title="Early Sales Signal Coach"
        description="Use this coach to interpret early buying behavior, separate real signals from noise, and decide when to act versus observe."
      />
    </div>
  );
}
