import CoachChat from "@/components/CoachChat";
import Link from "next/link";

export default function DeliveryModelLesson() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 14, opacity: 0.7 }}>Phase 2 · Lesson 3</div>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginTop: 8 }}>
          Delivery Model Design
        </h1>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          Your delivery model determines how much leverage, flexibility, and
          sustainability your business has. This lesson helps you choose a
          delivery approach that supports the outcome without burning you out.
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Why delivery model decisions matter
        </h2>
        <p style={{ opacity: 0.85 }}>
          Many founders design great offers that collapse under poor delivery
          choices. A mismatched delivery model creates hidden costs in time,
          energy, and consistency. Choosing the right model early prevents
          painful rework later.
        </p>
        <p style={{ marginTop: 12, opacity: 0.85 }}>
          The goal is not maximum automation or maximum personalization — it’s
          alignment with the outcome and your operating constraints.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Common delivery models
        </h2>
        <ul style={{ paddingLeft: 20, opacity: 0.85 }}>
          <li>
            <strong>Asynchronous:</strong> Courses, templates, recordings, and
            documentation delivered without live interaction.
          </li>
          <li>
            <strong>Synchronous:</strong> Live calls, coaching sessions, or
            real-time support.
          </li>
          <li>
            <strong>Hybrid:</strong> A mix of async assets with limited live
            touchpoints.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Choose the right model
        </h2>
        <p style={{ opacity: 0.85 }}>
          Use these questions to determine which delivery model fits best:
        </p>
        <ol style={{ paddingLeft: 20, marginTop: 12, opacity: 0.85 }}>
          <li>
            How much direct interaction does the buyer need to achieve the
            outcome?
          </li>
          <li>
            How much ongoing involvement can you realistically sustain?
          </li>
          <li>
            Which parts of delivery can be standardized or reused?
          </li>
          <li>
            Where does personalization actually add value?
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>
          Design for sustainability
        </h2>
        <p style={{ opacity: 0.85 }}>
          A good delivery model protects your time while still serving the
          buyer’s needs. Prioritize clarity, repeatability, and leverage so the
          system remains viable as demand grows.
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
        lesson="delivery-model"
        coachId="digital-products"
        title="Delivery Model Coach"
        description="Use this coach to choose a delivery model that balances outcome quality, leverage, and sustainability."
      />
    </div>
  );
}
