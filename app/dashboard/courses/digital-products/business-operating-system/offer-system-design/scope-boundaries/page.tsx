

import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function ScopeBoundariesLesson() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>Phase 2 · Lesson 2</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          System Scope & Boundaries
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Clear boundaries protect both you and the buyer. This lesson helps you
          decide what your offer includes, what it intentionally excludes, and
          how to avoid overbuilding.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Why scope discipline matters
        </h2>
        <p style={{ opacity: 0.85 }}>
          Many offers collapse under their own weight. As founders try to make
          something “complete,” they add features, lessons, and promises that
          dilute the outcome and increase delivery complexity.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Scope discipline ensures your system stays focused on the core outcome
          and remains sustainable to deliver.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Define the boundaries
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>
            <strong>Included:</strong> The minimum components required to achieve
            the core outcome.
          </li>
          <li>
            <strong>Excluded:</strong> Valuable but non-essential elements that
            would distract or overcomplicate delivery.
          </li>
          <li>
            <strong>Deferred:</strong> Features or depth that may come later, but
            not now.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Apply the scope filter
        </h2>
        <p style={{ opacity: 0.85 }}>
          Use these questions to establish clear boundaries:
        </p>
        <ol style={{ paddingLeft: 20, marginTop: 12, opacity: 0.85 }}>
          <li>
            What must exist for the buyer to reach the core outcome?
          </li>
          <li>
            What sounds helpful but is not strictly necessary?
          </li>
          <li>
            What would significantly increase delivery effort with little added
            outcome value?
          </li>
          <li>
            What can be postponed without harming results?
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Boundaries create leverage
        </h2>
        <p style={{ opacity: 0.85 }}>
          Strong boundaries make your system easier to deliver, easier to
          improve, and easier to scale. Saying no to unnecessary scope is not
          limiting — it’s strategic.
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
        lesson="scope-boundaries"
        coachId="digital-products"
        title="Scope & Boundaries Coach"
        description="Use this coach to define clear scope, avoid overbuilding, and protect the integrity of your offer."
      />
    </div>
  );
}