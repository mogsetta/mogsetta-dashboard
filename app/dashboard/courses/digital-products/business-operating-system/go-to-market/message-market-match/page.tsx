import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function MessageMarketMatchLesson() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>Phase 4 · Lesson 2</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Message–Market Match
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Even a strong offer fails if the message doesn’t resonate. This lesson
          helps you align your language with real buyer pain so the value is
          immediately understood.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Why messaging breaks early traction
        </h2>
        <p style={{ opacity: 0.85 }}>
          Most early messaging fails because it reflects how the founder thinks
          about the product — not how the buyer experiences the problem. When
          language is misaligned, people scroll past even good offers.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Message–market match closes that gap by grounding language in lived
          experience, not marketing theory.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Elements of strong message–market match
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>
            <strong>Problem Language:</strong> Uses the buyer’s words, not
            internal jargon.
          </li>
          <li>
            <strong>Specificity:</strong> Describes situations the buyer
            recognizes instantly.
          </li>
          <li>
            <strong>Outcome Framing:</strong> Focuses on change, not features.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Diagnose your current message
        </h2>
        <p style={{ opacity: 0.85 }}>
          Use these questions to evaluate your messaging honestly:
        </p>
        <ol style={{ paddingLeft: 20, marginTop: 12, opacity: 0.85 }}>
          <li>
            Would my ideal buyer immediately recognize themselves in this message?
          </li>
          <li>
            Does the message describe a real moment or frustration?
          </li>
          <li>
            Is the outcome clear without explanation?
          </li>
          <li>
            Does anything sound vague, inflated, or generic?
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Refine through feedback
        </h2>
        <p style={{ opacity: 0.85 }}>
          Strong messaging emerges through iteration. Share drafts, observe
          reactions, and listen closely to the words people use in response.
          Message–market match improves when language mirrors reality.
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
        lesson="message-market-match"
        coachId="digital-products"
        title="Message–Market Match Coach"
        description="Use this coach to refine your messaging so it resonates with real buyer pain and intent."
      />
    </div>
  );
}
