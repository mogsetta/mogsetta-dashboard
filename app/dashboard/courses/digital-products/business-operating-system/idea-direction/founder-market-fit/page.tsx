import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function FounderMarketFitLesson() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>Phase 1 · Lesson 2</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Founder–Market Fit
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          A good idea on paper can still be a bad idea for you. This lesson helps
          you evaluate whether this business aligns with your skills, energy,
          and the way you actually want to work.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Why founder–market fit matters
        </h2>
        <p style={{ opacity: 0.85 }}>
          Many businesses fail not because the market doesn’t exist, but because
          the founder burns out, loses interest, or builds something that doesn’t
          fit their natural strengths. Long-term success depends on alignment
          between the market and the person building the business.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          This lesson helps you identify friction early — before it turns into
          exhaustion or regret.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          The three alignment checks
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>
            <strong>Skill Alignment:</strong> Do you already have, or can you
            realistically acquire, the skills required to build and operate this?
          </li>
          <li>
            <strong>Energy Alignment:</strong> Does this type of work energize you
            or drain you over time?
          </li>
          <li>
            <strong>Risk Alignment:</strong> Does the uncertainty, pace, and
            downside risk match your tolerance?
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Apply the alignment check
        </h2>
        <p style={{ opacity: 0.85 }}>
          Answer these questions honestly. There’s no benefit to forcing a fit
          that doesn’t exist.
        </p>
        <ol style={{ paddingLeft: 20, marginTop: 12, opacity: 0.85 }}>
          <li>What skills does this business demand on a weekly basis?</li>
          <li>Which of those skills do you already possess?</li>
          <li>What parts of this work excite you, and what parts do you avoid?</li>
          <li>
            How would failure or slow progress in this business affect you
            emotionally and financially?
          </li>
          <li>
            If this business takes longer than expected, are you still willing
            to continue?
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          What a good fit looks like
        </h2>
        <p style={{ opacity: 0.85 }}>
          A good founder–market fit doesn’t mean the work is easy. It means the challenges
          are ones you’re willing to face repeatedly over time. If you can realistically
          see yourself doing this work — even when progress is slow — that’s a signal to
          continue.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          If the effort already feels draining, misaligned, or like something you’re
          forcing yourself to tolerate, that’s not a motivation problem — it’s a fit
          problem. Recognizing that early allows you to adjust before commitment turns
          into burnout.
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
        lesson="founder-market-fit"
        coachId="digital-products"
        title="Founder–Market Fit Coach"
        description="Use this coach to assess alignment between you, the market, and the type of business you’re building."
      />
    </div>
  );
}
