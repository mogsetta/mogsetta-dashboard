import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function MarketSignalVsNoiseLesson() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>Phase 1 · Lesson 3</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Market Signal vs Noise
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Early feedback can be confusing. This lesson helps you separate real
          demand signals from noise, opinions, and false validation so you can
          make better decisions.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Why founders misread the market
        </h2>
        <p style={{ opacity: 0.85 }}>
          Early in a business, feedback is rarely clean. Compliments, curiosity,
          and engagement can feel like validation even when no one is willing to
          pay. At the same time, early rejection can feel like failure when it’s
          actually useful signal.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          This lesson helps you avoid both traps by focusing on behaviors, not
          opinions.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          What counts as real signal
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>
            <strong>Time Investment:</strong> People spend time engaging deeply,
            not just liking or commenting.
          </li>
          <li>
            <strong>Behavior Change:</strong> People alter their workflow or
            habits to try a solution.
          </li>
          <li>
            <strong>Payment or Commitment:</strong> People are willing to pay,
            pre-order, or commit resources.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Common sources of noise
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>Friends and family encouragement</li>
          <li>Polite interest with no follow-up</li>
          <li>High engagement but no conversion</li>
          <li>Advice from people who wouldn’t buy</li>
        </ul>
      </section>

      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Apply the signal filter
        </h2>
        <p style={{ opacity: 0.85 }}>
          Use these questions to interpret feedback more clearly:
        </p>
        <ol style={{ paddingLeft: 20, marginTop: 12, opacity: 0.85 }}>
          <li>What did people actually do, not just say?</li>
          <li>Did anyone invest time, money, or effort?</li>
          <li>Who gave the feedback, and would they realistically buy?</li>
          <li>What pattern appears across multiple interactions?</li>
        </ol>
        <p style={{ marginTop: 16, opacity: 0.85 }}>
          If feedback doesn’t involve real effort, time, or money, treat it as noise —
          not encouragement or discouragement. Your job at this stage is not to feel
          supported, but to identify repeatable behavior that indicates real demand.
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
        lesson="market-signal-vs-noise"
        coachId="digital-products"
        title="Market Signal Coach"
        description="Use this coach to interpret feedback, identify real demand signals, and avoid chasing misleading noise."
      />
    </div>
  );
}