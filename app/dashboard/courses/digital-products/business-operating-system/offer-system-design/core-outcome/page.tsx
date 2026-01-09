import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function CoreOutcomeLesson() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>Phase 2 · Lesson 1</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Define the Core Outcome
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Strong offers are built around outcomes, not features. This lesson
          helps you define the specific transformation your offer delivers so
          every design decision stays focused.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Why outcomes matter more than features
        </h2>
        <p style={{ opacity: 0.85 }}>
          Buyers don’t pay for content, tools, or access. They pay for change.
          When an offer lacks a clear outcome, it grows bloated with features
          that feel impressive but don’t move the customer forward.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Defining the core outcome creates a decision filter that keeps your
          system simple and aligned.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          What a strong outcome looks like
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>
            <strong>Specific:</strong> Clearly describes what changes for the
            buyer.
          </li>
          <li>
            <strong>Observable:</strong> The buyer can tell when they’ve achieved
            it.
          </li>
          <li>
            <strong>Valuable:</strong> It meaningfully improves their situation.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Define your core outcome
        </h2>
        <p style={{ opacity: 0.85 }}>
          Use the prompts below to articulate the transformation your offer
          delivers.
        </p>
        <ol style={{ paddingLeft: 20, marginTop: 12, opacity: 0.85 }}>
          <li>
            Who is this offer for, and what is their current situation?
          </li>
          <li>
            What problem or limitation does this offer help them overcome?
          </li>
          <li>
            What does success look like after using your offer?
          </li>
          <li>
            How would the buyer describe the change in their own words?
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Use the outcome as a filter
        </h2>
        <p style={{ opacity: 0.85 }}>
          Once your core outcome is clear, use it to evaluate every feature,
          lesson, or component you consider adding. If it doesn’t directly
          support the outcome, it likely doesn’t belong.
        </p>
      </section>

      <div style={{ marginBottom: 64 }}>
        <Link href="/dashboard/courses/digital-products/business-operating-system/offer-system-design">
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
        lesson="core-outcome"
        coachId="digital-products"
        title="Core Outcome Coach"
        description="Use this coach to define a clear outcome and ensure your offer is built around real transformation."
      />
    </div>
  );
}
