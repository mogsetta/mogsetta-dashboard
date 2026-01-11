import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function FeedbackThatMattersLessonPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      {/* Header */}
      <header style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>
          Phase 5 · First Sales & Feedback
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          What Feedback Actually Matters
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Not all feedback is equal. This lesson helps you distinguish between
          feedback that reveals real constraints in your system and opinions
          that feel urgent but lead you off course.
        </p>
      </header>

      {/* Section 1 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Feedback Is a Filter, Not a Directive
        </h2>
        <p style={{ opacity: 0.9 }}>
          Early users will share thoughts, preferences, and suggestions — but
          that does not mean they are instructions to follow. Feedback should
          inform your understanding of the system, not dictate changes
          immediately.
        </p>
      </section>

      {/* Section 2 */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Patterns Matter More Than Opinions
        </h2>
        <p style={{ opacity: 0.9 }}>
          Single comments rarely indicate a real issue. Pay attention to
          repeated points of friction, confusion, or resistance across
          multiple users. Patterns signal constraints. Isolated opinions are
          noise.
        </p>
      </section>

      {/* Section 3 */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Who the Feedback Comes From
        </h2>
        <p style={{ opacity: 0.9 }}>
          Feedback from paying users carries more weight than feedback from
          observers. Prioritize input from people who have demonstrated real
          intent through action, not just interest or commentary.
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
        lesson="feedback-that-matters"
        coachId="digital-products"
        title="Feedback Evaluation Coach"
        description="Use this coach to evaluate feedback objectively, identify meaningful patterns, and avoid reactive changes."
      />
    </div>
  );
}
