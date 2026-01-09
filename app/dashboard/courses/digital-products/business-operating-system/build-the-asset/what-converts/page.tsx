

import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function WhatConvertsLesson() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>Phase 3 · Lesson 2</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          What Actually Converts
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Conversion is not about design trends or clever copy. This lesson helps
          you identify the small set of elements that actually move someone from
          interest to action.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Why most assets don’t convert
        </h2>
        <p style={{ opacity: 0.85 }}>
          Many founders focus on visuals, animations, and branding before
          establishing clarity and trust. When people don’t understand the
          outcome, the path forward, or why they should believe you, no amount
          of polish will fix conversion.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Conversion improves when friction is removed, not when decoration is
          added.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          The four conversion pillars
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>
            <strong>Clear Outcome:</strong> Visitors immediately understand what
            changes for them.
          </li>
          <li>
            <strong>Credibility:</strong> Proof, experience, or logic that builds
            trust.
          </li>
          <li>
            <strong>Reduced Friction:</strong> Minimal steps, minimal confusion,
            minimal doubt.
          </li>
          <li>
            <strong>Direct Call to Action:</strong> A clear next step with no
            ambiguity.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Apply the conversion filter
        </h2>
        <p style={{ opacity: 0.85 }}>
          Use these questions to evaluate your asset honestly:
        </p>
        <ol style={{ paddingLeft: 20, marginTop: 12, opacity: 0.85 }}>
          <li>
            Can someone explain the offer after five seconds on the page?
          </li>
          <li>
            What evidence exists that this works or is credible?
          </li>
          <li>
            What objections or doubts are left unanswered?
          </li>
          <li>
            Is the next step obvious and easy to take?
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Optimize after signal
        </h2>
        <p style={{ opacity: 0.85 }}>
          Early optimization should focus on clarity and trust — not color
          schemes or micro-copy. Once people take action, you can refine and
          improve based on real behavior instead of guesses.
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
        lesson="what-converts"
        coachId="digital-products"
        title="Conversion Coach"
        description="Use this coach to identify what actually drives action and remove friction from your asset."
      />
    </div>
  );
}