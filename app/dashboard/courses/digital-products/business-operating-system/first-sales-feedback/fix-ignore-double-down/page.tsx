import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function FixIgnoreDoubleDownLessonPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      {/* Header */}
      <header style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>
          Phase 5 · First Sales & Feedback
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Fix, Ignore, or Double Down
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Not every signal deserves action. This lesson helps you decide whether
          an issue should be fixed, ignored entirely, or amplified — without
          emotional or reactive decision-making.
        </p>
      </header>

      {/* Section 1 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Most Problems Are Not Problems
        </h2>
        <p style={{ opacity: 0.9 }}>
          Early-stage businesses surface friction constantly. Many of these
          signals are temporary, situational, or irrelevant to long-term success.
          Acting on every issue creates instability instead of progress.
        </p>
      </section>

      {/* Section 2 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          When to Fix
        </h2>
        <p style={{ opacity: 0.9 }}>
          Fix issues only when they appear consistently, block conversion or
          delivery, and affect users who have demonstrated real intent. Fixing
          should reduce friction — not introduce complexity.
        </p>
      </section>

      {/* Section 3 */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          When to Ignore or Double Down
        </h2>
        <p style={{ opacity: 0.9 }}>
          Ignore feedback that conflicts with your core outcome or comes from
          non-buyers. Double down when a behavior, message, or feature repeatedly
          drives positive results — even if it feels uncomfortable or narrow.
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
        lesson="fix-ignore-double-down"
        coachId="digital-products"
        title="Decision Discipline Coach"
        description="Use this coach to evaluate signals calmly and decide whether to fix, ignore, or double down with confidence."
      />
    </div>
  );
}
