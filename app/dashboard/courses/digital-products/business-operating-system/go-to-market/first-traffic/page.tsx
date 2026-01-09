import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function FirstTrafficLesson() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>Phase 4 · Lesson 3</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          First Traffic Strategy
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Early traffic is about learning, not scale. This lesson helps you
          design a simple way to get real people to your offer so you can gather
          signal and improve.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Why simple traffic wins early
        </h2>
        <p style={{ opacity: 0.85 }}>
          Many founders jump straight to ads, funnels, or automation before they
          understand what resonates. Early traffic should be intentional,
          manageable, and observable so feedback is clear.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          The goal is not volume — it’s insight.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Characteristics of a good first traffic strategy
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>
            <strong>Direct:</strong> You know where visitors came from.
          </li>
          <li>
            <strong>Repeatable:</strong> You can run it consistently.
          </li>
          <li>
            <strong>Low Overhead:</strong> Minimal cost and setup.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Design your first traffic loop
        </h2>
        <p style={{ opacity: 0.85 }}>
          Use the questions below to define a simple traffic approach:
        </p>
        <ol style={{ paddingLeft: 20, marginTop: 12, opacity: 0.85 }}>
          <li>
            How will someone discover this offer for the first time?
          </li>
          <li>
            What action brings them directly to the asset?
          </li>
          <li>
            How will you observe or measure their behavior?
          </li>
          <li>
            What will you change based on what you learn?
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Build confidence through repetition
        </h2>
        <p style={{ opacity: 0.85 }}>
          Running the same traffic approach multiple times creates pattern
          recognition. Over time, clarity emerges around what resonates, what
          converts, and what needs adjustment.
        </p>
      </section>

      <div style={{ marginBottom: 64 }}>
        <Link href="/dashboard/courses/digital-products/business-operating-system/go-to-market">
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
        lesson="first-traffic"
        coachId="digital-products"
        title="First Traffic Coach"
        description="Use this coach to design a simple, repeatable traffic strategy and interpret early signal."
      />
    </div>
  );
}
