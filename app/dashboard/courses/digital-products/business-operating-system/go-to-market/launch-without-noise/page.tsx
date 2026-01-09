

import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function LaunchWithoutNoiseLesson() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>Phase 4 · Lesson 4</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Launch Without Noise
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Early launches should generate clarity, not pressure. This lesson helps
          you launch in a controlled way that produces useful signal without
          hype, overwhelm, or unnecessary complexity.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Why loud launches distort feedback
        </h2>
        <p style={{ opacity: 0.85 }}>
          Big announcements, countdowns, and hype can create short-term attention,
          but they often blur real signal. When too many variables change at once,
          it becomes difficult to understand what actually worked.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Quiet, intentional launches make feedback easier to interpret and act on.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          What a clean launch looks like
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>
            <strong>Defined Audience:</strong> You know exactly who you’re launching to.
          </li>
          <li>
            <strong>Single Message:</strong> One clear outcome and call to action.
          </li>
          <li>
            <strong>Observable Behavior:</strong> You can see how people respond.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Plan your launch window
        </h2>
        <p style={{ opacity: 0.85 }}>
          Use these questions to define a focused launch:
        </p>
        <ol style={{ paddingLeft: 20, marginTop: 12, opacity: 0.85 }}>
          <li>
            Who specifically will see this first?
          </li>
          <li>
            Where will the message be shared?
          </li>
          <li>
            What action do you want them to take?
          </li>
          <li>
            How will you capture and review feedback?
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Launch is a starting point
        </h2>
        <p style={{ opacity: 0.85 }}>
          A launch is not a verdict on your business — it’s the beginning of a
          learning loop. Treat early responses as data, refine deliberately, and
          improve the system with each iteration.
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
        lesson="launch-without-noise"
        coachId="digital-products"
        title="Launch Coach"
        description="Use this coach to plan a focused launch, interpret early feedback, and iterate without hype."
      />
    </div>
  );
}