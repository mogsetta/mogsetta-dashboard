import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function PrimaryChannelLesson() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>Phase 4 · Lesson 1</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Choose a Primary Channel
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Early traction comes from focus, not coverage. This lesson helps you
          choose one primary channel to concentrate on so your efforts produce
          signal instead of noise.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Why focus beats diversification early
        </h2>
        <p style={{ opacity: 0.85 }}>
          Many founders try to be everywhere at once—posting on multiple
          platforms, testing multiple channels, and spreading effort thin.
          This often leads to burnout and unclear signal.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Choosing a single primary channel allows you to learn faster, refine
          your message, and build momentum before expanding.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          What makes a good primary channel
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>
            <strong>Audience Presence:</strong> Your ideal buyers already spend
            time there.
          </li>
          <li>
            <strong>Execution Fit:</strong> You can consistently create or engage
            on this channel.
          </li>
          <li>
            <strong>Feedback Loop:</strong> The channel provides clear signal
            through replies, clicks, or conversions.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Choose your channel
        </h2>
        <p style={{ opacity: 0.85 }}>
          Use these questions to make a clear selection:
        </p>
        <ol style={{ paddingLeft: 20, marginTop: 12, opacity: 0.85 }}>
          <li>
            Where does my target customer already go to learn or solve problems?
          </li>
          <li>
            Which channel matches my strengths and preferences?
          </li>
          <li>
            Where can I realistically show up consistently for the next 30 days?
          </li>
          <li>
            Which channel provides the fastest feedback?
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Commit to focus
        </h2>
        <p style={{ opacity: 0.85 }}>
          Once you choose a primary channel, commit to it fully for a defined
          period. Ignore secondary channels for now. Focus creates clarity,
          momentum, and real signal.
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
        lesson="primary-channel"
        coachId="digital-products"
        title="Primary Channel Coach"
        description="Use this coach to evaluate distribution options and choose one primary channel to focus on first."
      />
    </div>
  );
}
