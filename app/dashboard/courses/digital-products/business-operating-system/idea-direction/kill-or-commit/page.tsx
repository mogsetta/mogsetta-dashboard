import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function KillOrCommitLesson() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>Phase 1 · Lesson 4</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Kill or Commit Decision
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          This lesson helps you make a clear decision: either commit to this idea
          with focus and intent, or stop early without guilt and redirect your
          energy to something better.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Why indecision is the real risk
        </h2>
        <p style={{ opacity: 0.85 }}>
          Most founders don’t fail because they choose the wrong path. They fail
          because they never fully choose at all. Lingering in uncertainty
          drains energy, delays learning, and creates quiet burnout.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          This decision is not about predicting the future. It’s about choosing
          how you will move forward based on what you know right now.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          What it means to commit
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>
            You accept uncertainty and move forward anyway.
          </li>
          <li>
            You define a clear next phase with specific actions.
          </li>
          <li>
            You stop second-guessing and focus on execution.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          What it means to kill an idea
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>
            You recognize misalignment or weak signal early.
          </li>
          <li>
            You preserve time, energy, and confidence.
          </li>
          <li>
            You create space for a better opportunity.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Make the decision
        </h2>
        <p style={{ opacity: 0.85 }}>
          Answer these questions honestly and make a clear call.
        </p>
        <ol style={{ paddingLeft: 20, marginTop: 12, opacity: 0.85 }}>
          <li>
            Based on everything so far, do I have enough clarity to move forward?
          </li>
          <li>
            If I commit for the next 30–60 days, what will I do differently?
          </li>
          <li>
            If I stop now, what am I preserving or protecting?
          </li>
          <li>
            Am I avoiding a decision out of fear, or responding to real signal?
          </li>
        </ol>
        <p style={{ marginTop: 16, opacity: 0.85 }}>
          This decision should be explicit. Either you commit fully to this idea for the
          next defined window, or you consciously stop and redirect your energy
          elsewhere. What matters most is that you choose — clarity now is more valuable
          than optionality later.
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
        lesson="kill-or-commit"
        coachId="digital-products"
        title="Kill or Commit Coach"
        description="Use this coach to make a clear decision, reduce hesitation, and choose your next move with confidence."
      />
    </div>
  );
}
