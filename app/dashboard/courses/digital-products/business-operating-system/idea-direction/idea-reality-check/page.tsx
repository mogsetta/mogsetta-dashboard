import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function IdeaRealityCheckLesson() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>Phase 1 · Lesson 1</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Idea Reality Check
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Before you invest time, money, or emotional energy, this lesson helps
          you pressure-test your idea against reality — without killing your
          motivation.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Why most ideas fail early
        </h2>
        <p style={{ opacity: 0.85 }}>
          Most ideas don’t fail because they’re bad. They fail because they’re
          built on assumptions that were never questioned. Founders fall in
          love with the solution before understanding the problem, the buyer,
          or the constraints that actually matter.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          This lesson is not about tearing your idea down. It’s about making
          sure you’re building on solid ground before you move forward.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          The three reality checks
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>
            <strong>Problem Reality:</strong> Is this a problem someone is
            actively trying to solve, or just something that sounds interesting?
          </li>
          <li>
            <strong>Buyer Reality:</strong> Is there a clear type of person who
            feels this pain strongly enough to pay for a solution?
          </li>
          <li>
            <strong>Constraint Reality:</strong> Can this be built and delivered
            within your current time, skills, and resources?
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Apply the reality check
        </h2>
        <p style={{ opacity: 0.85 }}>
          Answer these honestly. There are no right or wrong answers — only
          clarity.
        </p>
        <ol style={{ paddingLeft: 20, marginTop: 12, opacity: 0.85 }}>
          <li>What specific problem does this idea solve?</li>
          <li>Who feels this problem most acutely?</li>
          <li>How are people currently solving this problem?</li>
          <li>
            What would make someone switch from their current solution to yours?
          </li>
          <li>
            What constraints (time, money, skill) could realistically slow or
            block execution?
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          What clarity looks like
        </h2>
        <p style={{ opacity: 0.85 }}>
          You don’t need certainty at this stage — you need clarity. By the end of this
          lesson, you should be able to clearly articulate the problem, the buyer, and
          your constraints. If you can, that’s a signal to commit and move forward.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          If you can’t, that’s not a failure. It’s a signal to pause, narrow the idea, or
          change direction before investing more time or energy. Making that call early
          is a strength, not a setback.
        </p>
      </section>

      <div style={{ marginBottom: 64 }}>
        <Link href="/dashboard/courses/digital-products/business-operating-system/idea-direction">
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
        lesson="idea-reality-check"
        coachId="digital-products"
        title="Idea Reality Check Coach"
        description="Use this coach to pressure-test your idea, challenge assumptions, and gain clarity before committing further."
      />
    </div>
  );
}