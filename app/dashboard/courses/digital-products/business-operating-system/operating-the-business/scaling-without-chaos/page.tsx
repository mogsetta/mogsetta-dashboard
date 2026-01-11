

import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function ScalingWithoutChaosLessonPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>
          Phase 6 · Operating the Business
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Scaling Without Chaos
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Scaling should increase output, not stress. This lesson shows how to
          grow revenue and volume in a controlled way without breaking systems,
          burning out, or losing clarity.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Why chaos happens during growth
        </h2>
        <p style={{ opacity: 0.85 }}>
          Chaos isn’t caused by growth itself — it’s caused by scaling unstable
          systems. When demand increases faster than structure, cracks appear
          everywhere at once.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Scale constraints, not ambition
        </h2>
        <p style={{ opacity: 0.85 }}>
          The goal is not to grow as fast as possible, but as fast as the system
          can support. Scaling works best when you intentionally expand one
          constraint at a time instead of pushing everything simultaneously.
        </p>
      </section>

      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          What sustainable scaling looks like
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>Predictable operating rhythm</li>
          <li>Clear ownership of work</li>
          <li>Stable fulfillment and support</li>
          <li>Metrics reviewed on cadence</li>
        </ul>
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
        lesson="scaling-without-chaos"
        coachId="digital-products"
        title="Scaling Discipline Coach"
        description="Use this coach to scale output and revenue methodically while preserving stability, clarity, and control."
      />
    </div>
  );
}