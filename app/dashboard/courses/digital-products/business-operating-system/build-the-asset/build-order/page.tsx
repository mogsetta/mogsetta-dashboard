import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function BuildOrderLesson() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>Phase 3 · Lesson 3</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Build Order & Priorities
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Building the right things in the wrong order wastes time. This lesson
          helps you prioritize what must be built first so momentum compounds
          instead of stalling.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Why order matters more than speed
        </h2>
        <p style={{ opacity: 0.85 }}>
          Many founders work hard but make little progress because they build
          secondary features before the core system exists. Progress accelerates
          when effort is applied in the correct sequence.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          This lesson gives you a simple framework to decide what deserves your
          attention now — and what does not.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          The priority hierarchy
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>
            <strong>Critical:</strong> Without this, nothing else works.
          </li>
          <li>
            <strong>Supportive:</strong> Improves effectiveness once the core
            exists.
          </li>
          <li>
            <strong>Optional:</strong> Nice to have, but not required for early
            results.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Apply the ordering framework
        </h2>
        <p style={{ opacity: 0.85 }}>
          Use these questions to assign priorities:
        </p>
        <ol style={{ paddingLeft: 20, marginTop: 12, opacity: 0.85 }}>
          <li>
            What must exist for someone to understand and buy the offer?
          </li>
          <li>
            What directly supports that core path?
          </li>
          <li>
            What would only matter after early users exist?
          </li>
          <li>
            What feels urgent but does not change outcomes?
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Build momentum deliberately
        </h2>
        <p style={{ opacity: 0.85 }}>
          Prioritization is not about doing more — it’s about doing the right
          things first. When the build order is correct, progress feels lighter,
          clearer, and more motivating.
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
        lesson="build-order"
        coachId="digital-products"
        title="Build Order Coach"
        description="Use this coach to decide what to build first, avoid distractions, and keep momentum high."
      />
    </div>
  );
}
