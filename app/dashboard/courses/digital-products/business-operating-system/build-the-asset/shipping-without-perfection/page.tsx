import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function ShippingWithoutPerfectionLesson() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>Phase 3 · Lesson 4</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Shipping Without Perfection
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Progress requires shipping. This lesson helps you launch responsibly
          before everything feels finished—without damaging trust or confidence.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Why perfection delays learning
        </h2>
        <p style={{ opacity: 0.85 }}>
          Waiting for perfection feels safe, but it quietly blocks feedback.
          Real clarity comes from real use. Shipping earlier exposes what matters,
          what breaks, and what can wait.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          The goal is not to ship something sloppy—it’s to ship something honest.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          What must be true before you ship
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>
            <strong>Clarity:</strong> Buyers understand the outcome and next step.
          </li>
          <li>
            <strong>Integrity:</strong> You can deliver what you promise.
          </li>
          <li>
            <strong>Support Path:</strong> There is a way to address issues or questions.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Remove false blockers
        </h2>
        <p style={{ opacity: 0.85 }}>
          These commonly delay shipping without improving results:
        </p>
        <ul style={{ paddingLeft: 20, marginTop: 8, opacity: 0.85 }}>
          <li>Waiting for perfect branding or visuals</li>
          <li>Adding features “just in case”</li>
          <li>Trying to answer every possible objection</li>
          <li>Polishing before real feedback exists</li>
        </ul>
      </section>

      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Ship with intent
        </h2>
        <p style={{ opacity: 0.85 }}>
          Decide what version you are shipping and why. Set expectations clearly,
          listen closely to early users, and improve based on real signal—not fear.
          Shipping is not the end of the process; it’s the beginning of learning.
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
        lesson="shipping-without-perfection"
        coachId="digital-products"
        title="Shipping Coach"
        description="Use this coach to decide when to ship, remove false blockers, and launch with clarity and integrity."
      />
    </div>
  );
}
