import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function MinimumViableAssetLesson() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>Phase 3 · Lesson 1</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Minimum Viable Asset
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Before building everything, you need the smallest asset that can
          actually validate your offer. This lesson helps you define what must
          exist — and what does not — so you can move forward without delay.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Why minimum beats complete
        </h2>
        <p style={{ opacity: 0.85 }}>
          Many founders delay launch because they feel the asset isn’t “ready.”
          In reality, most early buyers don’t need perfection — they need clarity
          and confidence. Building the minimum viable asset helps you validate
          demand while conserving time and energy.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          The goal is not to impress everyone. It’s to serve the first buyer.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          What qualifies as a viable asset
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>
            <strong>Clear Value:</strong> It communicates the outcome and why it
            matters.
          </li>
          <li>
            <strong>Trust Signals:</strong> Enough credibility to reduce doubt.
          </li>
          <li>
            <strong>Action Path:</strong> A clear way for someone to take the
            next step.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Define your minimum asset
        </h2>
        <p style={{ opacity: 0.85 }}>
          Answer the following to clarify what you actually need to build:
        </p>
        <ol style={{ paddingLeft: 20, marginTop: 12, opacity: 0.85 }}>
          <li>
            What is the single page or asset required to explain the offer?
          </li>
          <li>
            What proof or signal is absolutely necessary at this stage?
          </li>
          <li>
            What elements can wait until after initial validation?
          </li>
          <li>
            What would prevent someone from taking action right now?
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Build for learning, not polish
        </h2>
        <p style={{ opacity: 0.85 }}>
          Early assets exist to create learning. Once real users interact with
          your offer, you gain clarity on what actually matters. Optimization
          comes after signal — not before.
        </p>
      </section>

      <div style={{ marginBottom: 64 }}>
        <Link href="/dashboard/courses/digital-products/business-operating-system/build-the-asset">
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
        lesson="minimum-viable-asset"
        coachId="digital-products"
        title="Minimum Viable Asset Coach"
        description="Use this coach to define the smallest usable asset that can validate your offer and generate signal."
      />
    </div>
  );
}
